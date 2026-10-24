// Модуль подключения к базе данных Neon, авто-инициализации таблиц и проверки JWT-токенов
const { neon } = require('@neondatabase/serverless');
const jwt = require('jsonwebtoken');

const DEFAULT_JWT_SECRET = process.env.JWT_SECRET || 'sqb-finblock-ai-tracker-jwt-secret-2026';

// Получение клиента SQL-запросов Neon из переменной окружения DATABASE_URL
function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Не задана переменная окружения DATABASE_URL');
  }
  return neon(process.env.DATABASE_URL);
}

// Автоматическое создание таблиц в Neon при первом обращении, если миграция ещё не запускалась
let schemaInitialized = false;
async function ensureSchema(sql) {
  if (schemaInitialized) return;
  await sql`
    DO $$ BEGIN
        CREATE TYPE user_role_enum AS ENUM ('admin', 'user');
    EXCEPTION WHEN duplicate_object THEN null; END $$;
  `;
  await sql`
    DO $$ BEGIN
        CREATE TYPE department_enum AS ENUM ('AI_FM', 'DBU', 'MSFO', 'ZAKUPKI', 'ALM');
    EXCEPTION WHEN duplicate_object THEN null; END $$;
  `;
  await sql`
    DO $$ BEGIN
        CREATE TYPE criticality_enum AS ENUM ('red', 'yellow', 'green');
    EXCEPTION WHEN duplicate_object THEN null; END $$;
  `;
  await sql`
    DO $$ BEGIN
        CREATE TYPE task_status_enum AS ENUM ('done', 'in_progress', 'not_started', 'overdue');
    EXCEPTION WHEN duplicate_object THEN null; END $$;
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role user_role_enum NOT NULL DEFAULT 'user',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        task_number INTEGER NOT NULL,
        title TEXT NOT NULL,
        department department_enum NOT NULL,
        due_date DATE NULL,
        due_text VARCHAR(120) NULL,
        fact_info TEXT NULL,
        note TEXT NULL,
        status task_status_enum NOT NULL DEFAULT 'not_started',
        ai_stage VARCHAR(40) NOT NULL DEFAULT 'awaiting_docs',
        criticality criticality_enum NOT NULL DEFAULT 'yellow',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT uq_department_task_number UNIQUE (department, task_number)
    )
  `;
  await sql`
    ALTER TABLE tasks ADD COLUMN IF NOT EXISTS ai_stage VARCHAR(40) NOT NULL DEFAULT 'awaiting_docs'
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS login_history (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) NOT NULL,
        role user_role_enum NOT NULL DEFAULT 'user',
        event_type VARCHAR(32) NOT NULL DEFAULT 'login',
        logged_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `;
  // Авто-миграция столбцов времени в TIMESTAMP WITH TIME ZONE, если таблицы создавались ранее без часового пояса
  await sql`
    DO $$ BEGIN
        IF EXISTS (
            SELECT 1 FROM information_schema.columns
            WHERE table_name = 'tasks' AND column_name = 'updated_at' AND data_type = 'timestamp without time zone'
        ) THEN
            ALTER TABLE tasks
                ALTER COLUMN created_at TYPE TIMESTAMP WITH TIME ZONE USING created_at AT TIME ZONE 'UTC',
                ALTER COLUMN updated_at TYPE TIMESTAMP WITH TIME ZONE USING updated_at AT TIME ZONE 'UTC';
        END IF;
        IF EXISTS (
            SELECT 1 FROM information_schema.columns
            WHERE table_name = 'users' AND column_name = 'created_at' AND data_type = 'timestamp without time zone'
        ) THEN
            ALTER TABLE users
                ALTER COLUMN created_at TYPE TIMESTAMP WITH TIME ZONE USING created_at AT TIME ZONE 'UTC';
        END IF;
    END $$;
  `;
  schemaInitialized = true;
}

// Автоматическое первичное заполнение 26 задач в Neon, если таблица tasks пуста
const AUTO_SEED_TASKS = [
  { department: 'DBU', task_number: 1, title: 'Инициативы ДБУ', due_date: '2026-09-28', due_text: '2026-09-28', fact_info: '2026-09-28', note: 'Принято. Для реализации решено использовать платформу NOVA', status: 'done' },
  { department: 'DBU', task_number: 2, title: 'Предоставить внутренние документы ДБУ (Положение по оплате труда, документы по формир. налоговой базы, расчёту выплат сотрудникам — отпускные, больничные, командировочные и т.д.), а также ссылки на сайты (внешние)', due_date: '2026-10-20', due_text: '2026-10-20', fact_info: '2026-10-20', note: 'Получено, направлено в AI департамент 20.10.26', status: 'done' },
  { department: 'DBU', task_number: 3, title: 'Предоставить список типовых вопросо-ответов по ДБУ', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: '2026-10-21', note: 'Получено, направлено в AI департамент 21.10.26', status: 'done' },
  { department: 'DBU', task_number: 4, title: 'Выборочное тестирование', due_date: '2026-10-30', due_text: '2026-10-30', fact_info: null, note: null, status: 'not_started' },
  { department: 'DBU', task_number: 5, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started' },
  { department: 'MSFO', task_number: 1, title: 'Инициативы МСФО', due_date: '2026-09-28', due_text: '2026-09-28', fact_info: '2026-09-28', note: 'Принято. Решено использовать платформу NOVA', status: 'done' },
  { department: 'MSFO', task_number: 2, title: 'Предоставить Годовые и полугодовые отчёты за период 2019–2025 гг.', due_date: '2026-10-02', due_text: '2026-10-02', fact_info: '2026-10-02', note: 'Загружено в NOVA 13.10.2026', status: 'done' },
  { department: 'MSFO', task_number: 3, title: 'Тестирование в NOVA', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: 'Системе задано 83 вопроса, по 12% получены некорректные ответы', status: 'done' },
  { department: 'MSFO', task_number: 4, title: 'Необходимо представить правильные ответы с указанием источников и способа их получения', due_date: '2026-10-26', due_text: '2026-10-26', fact_info: '2026-10-23', note: 'Получено, направлено в AI департамент 23.10.26', status: 'done' },
  { department: 'MSFO', task_number: 5, title: 'Предоставить доп. документы для загрузки в NOVA (IFRS, IAS)', due_date: '2026-10-22', due_text: '2026-10-22', fact_info: '2026-10-21', note: 'Получено, направлено в AI департамент 21.10.26', status: 'done' },
  { department: 'MSFO', task_number: 6, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started' },
  { department: 'ZAKUPKI', task_number: 1, title: 'Загрузить в AI Закупки всю необходимую документацию', due_date: '2026-10-16', due_text: '2026-10-16', fact_info: '2026-10-23', note: 'не завершено', status: 'in_progress' },
  { department: 'ZAKUPKI', task_number: 2, title: 'Обеспечить приобретение платных токенов для работы программы', due_date: '2026-10-16', due_text: '2026-10-16', fact_info: 'Приобретено', note: 'Уходит много токенов', status: 'done' },
  { department: 'ZAKUPKI', task_number: 3, title: 'В связи с высоким расходом платных токенов необходимо дополнительное обследование', due_date: '2026-10-26', due_text: '2026-10-26', fact_info: null, note: 'Чингиз (26.10.2026)', status: 'not_started' },
  { department: 'ZAKUPKI', task_number: 4, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started' },
  { department: 'ZAKUPKI', task_number: 5, title: 'Предоставить исходные данные для расчёта эффективности', due_date: '2026-10-28', due_text: '2026-10-28', fact_info: null, note: null, status: 'not_started' },
  { department: 'ALM', task_number: 1, title: 'Провести тестирование NOVA', due_date: '2026-10-22', due_text: '2026-10-22', fact_info: '2026-10-23', note: 'не завершено', status: 'in_progress' },
  { department: 'ALM', task_number: 2, title: 'Предоставить внутренние документы ALM', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: '2026-10-23', note: 'Получено, направлено в AI департамент 23.10.26', status: 'done' },
  { department: 'ALM', task_number: 3, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started' },
  { department: 'AI_FM', task_number: 1, title: 'Рассчитать эффективность внедрения по каждой из 33 инициатив совместно с директорами Финблока', due_date: '2026-10-09', due_text: '2026-10-09', fact_info: 'Проект сделан и направлен CFO 09.10.2026', note: 'Проект сделан и направлен CFO 09.10.2026', status: 'done' },
  { department: 'AI_FM', task_number: 2, title: 'Направить проект расчёта эффективности директорам Финблока', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: '21/10/2026 направлено Директорам Финблока на корп почту', status: 'done' },
  { department: 'AI_FM', task_number: 3, title: 'Подготовить рапорт на RDP и GPU и FTP – 21.10', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: 'Рапорт подписан', status: 'done' },
  { department: 'AI_FM', task_number: 4, title: 'Завершить настройку FTP-подключения для Елены', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: null, note: 'в процессе', status: 'in_progress' },
  { department: 'AI_FM', task_number: 5, title: 'Завершить настройку RDP и GPU-подключения для Абдуллоха', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: null, note: 'в процессе', status: 'in_progress' },
  { department: 'AI_FM', task_number: 6, title: 'Разработать скрипт для ежедневной синхронизации OPEX, CAPEX, Daily с NOVA', due_date: null, due_text: 'в процессе', fact_info: 'в процессе', note: 'Будет делать Абдуллох', status: 'in_progress' },
  { department: 'AI_FM', task_number: 7, title: 'Сформировать выборку клиентов, ушедших в другие банки в 2026 году', due_date: '2026-10-30', due_text: '2026-10-30', fact_info: null, note: '21.10.2026 Передано Орифжонову А. для обзвона клиентов (1355 шт)', status: 'in_progress' }
];

// Определение начального статуса в AI департаменте (done, in_progress, not_started, overdue)
function inferInitialAiStage(item) {
  const text = `${item.title || ''} ${item.note || ''} ${item.fact_info || ''}`.toLowerCase();
  if (text.includes('направлено в ai департамент') || text.includes('тестирование') || text.includes('83 вопроса')) {
    return 'in_progress';
  }
  if (item.status === 'done') return 'done';
  if (item.status === 'in_progress') return 'in_progress';
  if (item.status === 'overdue') return 'overdue';
  return 'not_started';
}

async function ensureSeedTasks(sql) {
  const countRows = await sql`SELECT COUNT(*)::int AS cnt FROM tasks`;
  if (countRows[0].cnt > 0) return;

  for (const item of AUTO_SEED_TASKS) {
    const aiStage = inferInitialAiStage(item);
    await sql`
      INSERT INTO tasks (task_number, title, department, due_date, due_text, fact_info, note, status, ai_stage, criticality)
      VALUES (${item.task_number}, ${item.title}, ${item.department}, ${item.due_date}, ${item.due_text}, ${item.fact_info}, ${item.note}, ${item.status}, ${aiStage}, 'yellow')
      ON CONFLICT (department, task_number) DO NOTHING
    `;
  }
}

// Стандартные CORS-заголовки для serverless-функций Vercel
function setCors(res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );
}

// Извлечение и валидация JWT-токена из заголовка Authorization
function verifyToken(req) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.slice(7);
  try {
    return jwt.verify(token, DEFAULT_JWT_SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = {
  getSql,
  ensureSchema,
  ensureSeedTasks,
  setCors,
  verifyToken,
  DEFAULT_JWT_SECRET
};
