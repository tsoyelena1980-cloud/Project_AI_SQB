// Серверный эндпоинт для работы с задачами (/api/tasks) с проверкой JWT и роли администратора
const { getSql, ensureSchema, ensureSeedTasks, setCors, verifyToken } = require('./_db');

const VALID_DEPARTMENTS = ['AI_FM', 'DBU', 'MSFO', 'ZAKUPKI', 'ALM'];
const VALID_CRITICALITIES = ['red', 'yellow', 'green'];
const VALID_STATUSES = ['done', 'in_progress', 'not_started', 'overdue'];
const VALID_AI_STAGES = [
  'done',
  'in_progress',
  'not_started',
  'overdue',
  'awaiting_docs',
  'sent_to_ai',
  'uploading_nova',
  'testing_nova',
  'completed_ai',
  'overdue_ai'
];
const ADMIN_EMAIL = 'tsoyelena1980@gmail.com';

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Все запросы к API задач требуют валидного JWT-токена
  const tokenPayload = verifyToken(req);
  if (!tokenPayload) {
    return res.status(401).json({ error: 'Необходима авторизация для доступа к задачам' });
  }

  try {
    const sql = getSql();
    await ensureSchema(sql);

    // Актуализация роли пользователя из БД для надёжной серверной защиты
    const userRows = await sql`
      SELECT id, role, name, email FROM users WHERE id = ${tokenPayload.id} LIMIT 1
    `;
    if (userRows.length === 0) {
      return res.status(401).json({ error: 'Пользователь не найден в базе данных' });
    }
    const currentUser = userRows[0];

    // GET /api/tasks — чтение всех задач (доступно и admin, и user)
    if (req.method === 'GET') {
      await ensureSeedTasks(sql);
      const tasks = await sql`
        SELECT
          id,
          task_number,
          title,
          department,
          TO_CHAR(due_date, 'YYYY-MM-DD') AS due_date,
          due_text,
          fact_info,
          note,
          status,
          ai_stage,
          criticality,
          created_at,
          updated_at
        FROM tasks
        ORDER BY department ASC, task_number ASC, id ASC
      `;
      const maxRow = await sql`
        SELECT MAX(updated_at) AS last_modified FROM tasks
      `;
      const rawLast = maxRow[0] && maxRow[0].last_modified ? maxRow[0].last_modified : null;
      const lastModifiedAt = rawLast ? new Date(rawLast).toISOString() : new Date().toISOString();

      return res.status(200).json({ tasks, lastModifiedAt });
    }

    // Все модифицирующие операции (POST, PUT, PATCH, DELETE) разрешены ТОЛЬКО администратору tsoyelena1980@gmail.com
    const isAdminUser =
      currentUser.role === 'admin' &&
      String(currentUser.email).trim().toLowerCase() === ADMIN_EMAIL;

    if (!isAdminUser) {
      return res.status(403).json({
        error: 'Доступ запрещён: права на изменение задач и этапов есть только у администратора (tsoyelena1980@gmail.com)'
      });
    }

    // POST /api/tasks — создание новой задачи
    if (req.method === 'POST') {
      const {
        task_number,
        title,
        department,
        due_date,
        due_text,
        fact_info,
        note,
        status,
        ai_stage,
        criticality
      } = req.body || {};

      if (!title || !department || !VALID_DEPARTMENTS.includes(department)) {
        return res.status(400).json({ error: 'Укажите корректное описание задачи и подразделение' });
      }

      const taskCrit = VALID_CRITICALITIES.includes(criticality) ? criticality : 'yellow';
      const taskStatus = VALID_STATUSES.includes(status) ? status : 'not_started';
      const taskAiStage = VALID_AI_STAGES.includes(ai_stage) ? ai_stage : 'awaiting_docs';

      // Вычисление следующего порядкового номера задачи в подразделении, если не передан
      let num = parseInt(task_number, 10);
      if (!num || isNaN(num)) {
        const maxRow = await sql`
          SELECT COALESCE(MAX(task_number), 0)::int AS max_num
          FROM tasks
          WHERE department = ${department}
        `;
        num = maxRow[0].max_num + 1;
      }

      const parsedDate = due_date && /^\d{4}-\d{2}-\d{2}$/.test(due_date) ? due_date : null;
      const parsedDueText = due_text || (parsedDate ? parsedDate : '—');

      const inserted = await sql`
        INSERT INTO tasks (
          task_number, title, department, due_date, due_text, fact_info, note, status, ai_stage, criticality
        )
        VALUES (
          ${num},
          ${String(title).trim()},
          ${department},
          ${parsedDate},
          ${parsedDueText},
          ${fact_info ? String(fact_info).trim() : null},
          ${note ? String(note).trim() : null},
          ${taskStatus},
          ${taskAiStage},
          ${taskCrit}
        )
        RETURNING
          id,
          task_number,
          title,
          department,
          TO_CHAR(due_date, 'YYYY-MM-DD') AS due_date,
          due_text,
          fact_info,
          note,
          status,
          ai_stage,
          criticality,
          created_at,
          updated_at
      `;

      return res.status(201).json({
        task: inserted[0],
        lastModifiedAt: new Date(inserted[0].updated_at || Date.now()).toISOString()
      });
    }

    // PATCH /api/tasks — быстрое обновление критичности, статуса или этапа в AI департаменте (только для администратора)
    if (req.method === 'PATCH') {
      const { id, criticality, status, ai_stage } = req.body || {};
      if (!id) {
        return res.status(400).json({ error: 'Не указан идентификатор задачи (id)' });
      }

      if (criticality !== undefined && !VALID_CRITICALITIES.includes(criticality)) {
        return res.status(400).json({ error: 'Некорректное значение критичности' });
      }

      if (status !== undefined && !VALID_STATUSES.includes(status)) {
        return res.status(400).json({ error: 'Некорректное значение статуса' });
      }

      if (ai_stage !== undefined && !VALID_AI_STAGES.includes(ai_stage)) {
        return res.status(400).json({ error: 'Некорректный этап AI департамента' });
      }

      const existing = await sql`SELECT * FROM tasks WHERE id = ${id} LIMIT 1`;
      if (existing.length === 0) {
        return res.status(404).json({ error: 'Задача не найдена' });
      }

      const nextCrit = criticality !== undefined ? criticality : existing[0].criticality;
      const nextStatus = status !== undefined ? status : existing[0].status;
      const nextAiStage = ai_stage !== undefined ? ai_stage : (existing[0].ai_stage || 'awaiting_docs');

      const updated = await sql`
        UPDATE tasks
        SET
          criticality = ${nextCrit},
          status = ${nextStatus},
          ai_stage = ${nextAiStage},
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING
          id,
          task_number,
          title,
          department,
          TO_CHAR(due_date, 'YYYY-MM-DD') AS due_date,
          due_text,
          fact_info,
          note,
          status,
          ai_stage,
          criticality,
          created_at,
          updated_at
      `;

      return res.status(200).json({
        task: updated[0],
        lastModifiedAt: new Date(updated[0].updated_at || Date.now()).toISOString()
      });
    }

    // PUT /api/tasks — полное обновление задачи администратором
    if (req.method === 'PUT') {
      const {
        id,
        task_number,
        title,
        department,
        due_date,
        due_text,
        fact_info,
        note,
        status,
        ai_stage,
        criticality
      } = req.body || {};

      if (!id || !title || !VALID_DEPARTMENTS.includes(department)) {
        return res.status(400).json({ error: 'Некорректные данные для обновления задачи' });
      }

      const taskCrit = VALID_CRITICALITIES.includes(criticality) ? criticality : 'yellow';
      const taskStatus = VALID_STATUSES.includes(status) ? status : 'not_started';
      const taskAiStage = VALID_AI_STAGES.includes(ai_stage) ? ai_stage : 'awaiting_docs';
      const parsedDate = due_date && /^\d{4}-\d{2}-\d{2}$/.test(due_date) ? due_date : null;
      const parsedDueText = due_text || (parsedDate ? parsedDate : '—');
      const num = parseInt(task_number, 10) || 1;

      const updated = await sql`
        UPDATE tasks
        SET
          task_number = ${num},
          title = ${String(title).trim()},
          department = ${department},
          due_date = ${parsedDate},
          due_text = ${parsedDueText},
          fact_info = ${fact_info ? String(fact_info).trim() : null},
          note = ${note ? String(note).trim() : null},
          status = ${taskStatus},
          ai_stage = ${taskAiStage},
          criticality = ${taskCrit},
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING
          id,
          task_number,
          title,
          department,
          TO_CHAR(due_date, 'YYYY-MM-DD') AS due_date,
          due_text,
          fact_info,
          note,
          status,
          ai_stage,
          criticality,
          created_at,
          updated_at
      `;

      if (updated.length === 0) {
        return res.status(404).json({ error: 'Задача не найдена' });
      }

      return res.status(200).json({
        task: updated[0],
        lastModifiedAt: new Date(updated[0].updated_at || Date.now()).toISOString()
      });
    }

    // DELETE /api/tasks?id=... — удаление задачи администратором
    if (req.method === 'DELETE') {
      const id = req.query.id || (req.body && req.body.id);
      if (!id) {
        return res.status(400).json({ error: 'Не передан идентификатор удаляемой задачи' });
      }

      await sql`DELETE FROM tasks WHERE id = ${id}`;
      return res.status(200).json({
        deletedId: Number(id),
        lastModifiedAt: new Date().toISOString()
      });
    }

    return res.status(405).json({ error: 'Метод не поддерживается' });
  } catch (err) {
    console.error('Ошибка в /api/tasks:', err);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера при обработке задач' });
  }
};
