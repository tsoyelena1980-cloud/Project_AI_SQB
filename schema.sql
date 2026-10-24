-- Схема базы данных «Трекер задач по внедрению AI в Финблоке SQB» (Neon PostgreSQL)

-- Очистка типов при повторной инициализации (безопасное создание через DO-блоки)
DO $$ BEGIN
    CREATE TYPE user_role_enum AS ENUM ('admin', 'user');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE department_enum AS ENUM ('AI_FM', 'DBU', 'MSFO', 'ZAKUPKI', 'ALM');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE criticality_enum AS ENUM ('red', 'yellow', 'green');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE task_status_enum AS ENUM ('done', 'in_progress', 'not_started', 'overdue');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Таблица пользователей
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role_enum NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Таблица задач по внедрению AI
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
);

-- Индексы для ускорения фильтрации на дашборде
CREATE INDEX IF NOT EXISTS idx_tasks_department ON tasks(department);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_criticality ON tasks(criticality);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);

-- Таблица истории входов пользователей в систему
CREATE TABLE IF NOT EXISTS login_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role user_role_enum NOT NULL DEFAULT 'user',
    event_type VARCHAR(32) NOT NULL DEFAULT 'login',
    logged_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_login_history_logged_at ON login_history(logged_at DESC);
