// Серверный эндпоинт аутентификации: регистрация, вход и проверка профиля (/api/auth)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getSql, ensureSchema, setCors, verifyToken, DEFAULT_JWT_SECRET } = require('./_db');

// Единственный email с полными правами администратора (все остальные получают роль 'user')
const ADMIN_EMAIL = 'tsoyelena1980@gmail.com';

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const sql = getSql();
    await ensureSchema(sql);
    // GET /api/auth — получение текущего авторизованного пользователя по токену
    if (req.method === 'GET') {
      const payload = verifyToken(req);
      if (!payload) {
        return res.status(401).json({ error: 'Токен отсутствует или недействителен' });
      }

      const rows = await sql`
        SELECT id, name, email, role, created_at
        FROM users
        WHERE id = ${payload.id}
        LIMIT 1
      `;

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Пользователь не найден' });
      }

      return res.status(200).json({ user: rows[0] });
    }

    // POST /api/auth — вход (action: 'login') или регистрация (action: 'register')
    if (req.method === 'POST') {
      const { action, name, email, password } = req.body || {};

      if (!email || !password) {
        return res.status(400).json({ error: 'Email и пароль обязательны для заполнения' });
      }

      // Поддержка любого корректного email без ограничений по корпоративному домену
      const cleanEmail = String(email).trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({ error: 'Введите корректный адрес электронной почты (например, user@gmail.com)' });
      }

      if (action === 'register') {
        const cleanName = String(name || cleanEmail.split('@')[0]).trim();
        if (password.length < 6) {
          return res.status(400).json({ error: 'Пароль должен содержать не менее 6 символов' });
        }

        const existing = await sql`
          SELECT id FROM users WHERE email = ${cleanEmail} LIMIT 1
        `;
        if (existing.length > 0) {
          return res.status(409).json({ error: 'Пользователь с таким email уже зарегистрирован' });
        }

        // Права администратора назначаются ТОЛЬКО для tsoyelena1980@gmail.com, все остальные — только 'user'
        const assignedRole = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';

        const passwordHash = await bcrypt.hash(password, 10);

        const inserted = await sql`
          INSERT INTO users (name, email, password_hash, role)
          VALUES (${cleanName}, ${cleanEmail}, ${passwordHash}, ${assignedRole})
          RETURNING id, name, email, role, created_at
        `;

        const user = inserted[0];

        // Запись события регистрации в историю входов
        await sql`
          INSERT INTO login_history (user_id, name, email, role, event_type)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${user.role}, 'register')
        `;

        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role, name: user.name },
          DEFAULT_JWT_SECRET,
          { expiresIn: '7d' }
        );

        return res.status(201).json({ token, user });
      }

      // По умолчанию выполняем вход (login)
      const rows = await sql`
        SELECT id, name, email, password_hash, role, created_at
        FROM users
        WHERE email = ${cleanEmail}
        LIMIT 1
      `;

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Неверный email или пароль' });
      }

      const userRecord = rows[0];
      const passwordValid = await bcrypt.compare(password, userRecord.password_hash);
      if (!passwordValid) {
        return res.status(401).json({ error: 'Неверный email или пароль' });
      }

      // Гарантируем, что роль в БД строго соответствует правилу: только tsoyelena1980@gmail.com — admin
      const enforcedRole = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';
      if (userRecord.role !== enforcedRole) {
        await sql`UPDATE users SET role = ${enforcedRole} WHERE id = ${userRecord.id}`;
        userRecord.role = enforcedRole;
      }

      const user = {
        id: userRecord.id,
        name: userRecord.name,
        email: userRecord.email,
        role: userRecord.role,
        created_at: userRecord.created_at
      };

      // Запись события входа в историю
      await sql`
        INSERT INTO login_history (user_id, name, email, role, event_type)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.role}, 'login')
      `;

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role, name: user.name },
        DEFAULT_JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({ token, user });
    }

    return res.status(405).json({ error: 'Метод не поддерживается' });
  } catch (err) {
    console.error('Ошибка в /api/auth:', err);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера при аутентификации' });
  }
};
