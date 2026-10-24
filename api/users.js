// Серверный эндпоинт для управления пользователями и ролями в админке (/api/users)
const { getSql, ensureSchema, setCors, verifyToken } = require('./_db');

const ADMIN_EMAIL = 'tsoyelena1980@gmail.com';

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const tokenPayload = verifyToken(req);
  if (!tokenPayload) {
    return res.status(401).json({ error: 'Требуется авторизация' });
  }

  try {
    const sql = getSql();
    await ensureSchema(sql);

    const callerRows = await sql`
      SELECT id, email, role FROM users WHERE id = ${tokenPayload.id} LIMIT 1
    `;
    if (
      callerRows.length === 0 ||
      callerRows[0].role !== 'admin' ||
      String(callerRows[0].email).trim().toLowerCase() !== ADMIN_EMAIL
    ) {
      return res.status(403).json({ error: 'Доступ разрешён только администратору (tsoyelena1980@gmail.com)' });
    }
    // GET /api/users — получение всех пользователей и истории входов для вкладки «Админка»
    if (req.method === 'GET') {
      const users = await sql`
        SELECT
          u.id,
          u.name,
          u.email,
          u.role,
          u.created_at,
          (
            SELECT MAX(lh.logged_at)
            FROM login_history lh
            WHERE lh.email = u.email
          ) AS last_login_at
        FROM users u
        ORDER BY u.id ASC
      `;

      const loginHistory = await sql`
        SELECT id, user_id, name, email, role, event_type, logged_at
        FROM login_history
        ORDER BY logged_at DESC
        LIMIT 200
      `;

      return res.status(200).json({ users, loginHistory });
    }

    // PATCH /api/users — защита правила: только tsoyelena1980@gmail.com может иметь роль admin
    if (req.method === 'PATCH') {
      return res.status(403).json({
        error: 'По регламенту безопасности права администратора закреплены исключительно за tsoyelena1980@gmail.com. Остальные пользователи имеют режим чтения.'
      });
    }

    return res.status(405).json({ error: 'Метод не поддерживается' });
  } catch (err) {
    console.error('Ошибка в /api/users:', err);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера при управлении пользователями' });
  }
};
