// Идемпотентный скрипт миграции и заполнения БД сид-данными из «Трэкинг_23.10.2026.xlsx»
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

// Дата отчёта для расчёта просроченных задач без факта (23.10.2026 / текущая дата)
const REFERENCE_TODAY = new Date().toISOString().slice(0, 10);

// Функция автоматического определения статуса задачи по правилам ТЗ
function resolveSeedStatus(dueDate, dueText, factInfo, note) {
  const noteStr = (note || '').toLowerCase();
  const factStr = (factInfo || '').toLowerCase();
  const dueStr = (dueText || '').toLowerCase();

  // 1. Примечание или срок содержит маркеры «в процессе» / «не завершено» / «будет делать» → 'in_progress'
  if (
    noteStr.includes('в процессе') ||
    noteStr.includes('не завершено') ||
    noteStr.includes('будет делать') ||
    factStr.includes('в процессе') ||
    dueStr.includes('в процессе')
  ) {
    return 'in_progress';
  }

  // 2. Есть факт/продление и примечание подтверждает выполнение
  const hasFact = Boolean(factInfo && factInfo !== '—' && factInfo.trim() !== '');
  const doneMarkers = [
    'получено',
    'приобретено',
    'загружено',
    'проект сделан',
    'рапорт подписан',
    'принято',
    'направлено',
    'задано 83 вопроса'
  ];
  const hasDoneMarker = doneMarkers.some((m) => noteStr.includes(m) || factStr.includes(m));

  if (hasFact && hasDoneMarker) {
    return 'done';
  }

  // Если факта нет, но в примечании зафиксирована передача в работу (например, для обзвона клиентов)
  if (!hasFact && noteStr.includes('передано')) {
    return 'in_progress';
  }

  // 3. Факта нет, проверяем срок относительно текущей даты
  if (!hasFact && dueDate) {
    return dueDate < REFERENCE_TODAY ? 'overdue' : 'not_started';
  }

  return hasFact ? 'done' : 'not_started';
}

// Полный набор сид-данных из файла «Трэкинг_23.10.2026.xlsx» (26 задач)
const SEED_TASKS = [
  // === ДБУ (DBU) ===
  {
    department: 'DBU',
    task_number: 1,
    title: 'Инициативы ДБУ',
    due_date: '2026-09-28',
    due_text: '2026-09-28',
    fact_info: '2026-09-28',
    note: 'Принято. Для реализации решено использовать платформу NOVA'
  },
  {
    department: 'DBU',
    task_number: 2,
    title: 'Предоставить внутренние документы ДБУ (Положение по оплате труда, документы по формир. налоговой базы, расчёту выплат сотрудникам — отпускные, больничные, командировочные и т.д.), а также ссылки на сайты (внешние)',
    due_date: '2026-10-20',
    due_text: '2026-10-20',
    fact_info: '2026-10-20',
    note: 'Получено, направлено в AI департамент 20.10.26'
  },
  {
    department: 'DBU',
    task_number: 3,
    title: 'Предоставить список типовых вопросо-ответов по ДБУ',
    due_date: '2026-10-23',
    due_text: '2026-10-23',
    fact_info: '2026-10-21',
    note: 'Получено, направлено в AI департамент 21.10.26'
  },
  {
    department: 'DBU',
    task_number: 4,
    title: 'Выборочное тестирование',
    due_date: '2026-10-30',
    due_text: '2026-10-30',
    fact_info: null,
    note: null
  },
  {
    department: 'DBU',
    task_number: 5,
    title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)',
    due_date: '2026-10-27',
    due_text: '2026-10-27',
    fact_info: null,
    note: null
  },

  // === МСФО (MSFO) ===
  {
    department: 'MSFO',
    task_number: 1,
    title: 'Инициативы МСФО',
    due_date: '2026-09-28',
    due_text: '2026-09-28',
    fact_info: '2026-09-28',
    note: 'Принято. Решено использовать платформу NOVA'
  },
  {
    department: 'MSFO',
    task_number: 2,
    title: 'Предоставить Годовые и полугодовые отчёты за период 2019–2025 гг.',
    due_date: '2026-10-02',
    due_text: '2026-10-02',
    fact_info: '2026-10-02',
    note: 'Загружено в NOVA 13.10.2026'
  },
  {
    department: 'MSFO',
    task_number: 3,
    title: 'Тестирование в NOVA',
    due_date: '2026-10-21',
    due_text: '2026-10-21',
    fact_info: '2026-10-21',
    note: 'Системе задано 83 вопроса, по 12% получены некорректные ответы'
  },
  {
    department: 'MSFO',
    task_number: 4,
    title: 'Необходимо представить правильные ответы с указанием источников и способа их получения',
    due_date: '2026-10-26',
    due_text: '2026-10-26',
    fact_info: '2026-10-23',
    note: 'Получено, направлено в AI департамент 23.10.26'
  },
  {
    department: 'MSFO',
    task_number: 5,
    title: 'Предоставить доп. документы для загрузки в NOVA (IFRS, IAS)',
    due_date: '2026-10-22',
    due_text: '2026-10-22',
    fact_info: '2026-10-21',
    note: 'Получено, направлено в AI департамент 21.10.26'
  },
  {
    department: 'MSFO',
    task_number: 6,
    title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)',
    due_date: '2026-10-27',
    due_text: '2026-10-27',
    fact_info: null,
    note: null
  },

  // === Закупки (ZAKUPKI) ===
  {
    department: 'ZAKUPKI',
    task_number: 1,
    title: 'Загрузить в AI Закупки всю необходимую документацию',
    due_date: '2026-10-16',
    due_text: '2026-10-16',
    fact_info: '2026-10-23',
    note: 'не завершено'
  },
  {
    department: 'ZAKUPKI',
    task_number: 2,
    title: 'Обеспечить приобретение платных токенов для работы программы',
    due_date: '2026-10-16',
    due_text: '2026-10-16',
    fact_info: 'Приобретено',
    note: 'Уходит много токенов'
  },
  {
    department: 'ZAKUPKI',
    task_number: 3,
    title: 'В связи с высоким расходом платных токенов необходимо дополнительное обследование',
    due_date: '2026-10-26',
    due_text: '2026-10-26',
    fact_info: null,
    note: 'Чингиз (26.10.2026)'
  },
  {
    department: 'ZAKUPKI',
    task_number: 4,
    title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)',
    due_date: '2026-10-27',
    due_text: '2026-10-27',
    fact_info: null,
    note: null
  },
  {
    department: 'ZAKUPKI',
    task_number: 5,
    title: 'Предоставить исходные данные для расчёта эффективности',
    due_date: '2026-10-28',
    due_text: '2026-10-28',
    fact_info: null,
    note: null
  },

  // === ALM ===
  {
    department: 'ALM',
    task_number: 1,
    title: 'Провести тестирование NOVA',
    due_date: '2026-10-22',
    due_text: '2026-10-22',
    fact_info: '2026-10-23',
    note: 'не завершено'
  },
  {
    department: 'ALM',
    task_number: 2,
    title: 'Предоставить внутренние документы ALM',
    due_date: '2026-10-23',
    due_text: '2026-10-23',
    fact_info: '2026-10-23',
    note: 'Получено, направлено в AI департамент 23.10.26'
  },
  {
    department: 'ALM',
    task_number: 3,
    title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)',
    due_date: '2026-10-27',
    due_text: '2026-10-27',
    fact_info: null,
    note: null
  },

  // === Группа AI / ФМ (AI_FM) ===
  {
    department: 'AI_FM',
    task_number: 1,
    title: 'Рассчитать эффективность внедрения по каждой из 33 инициатив совместно с директорами Финблока',
    due_date: '2026-10-09',
    due_text: '2026-10-09',
    fact_info: 'Проект сделан и направлен CFO 09.10.2026',
    note: 'Проект сделан и направлен CFO 09.10.2026'
  },
  {
    department: 'AI_FM',
    task_number: 2,
    title: 'Направить проект расчёта эффективности директорам Финблока',
    due_date: '2026-10-21',
    due_text: '2026-10-21',
    fact_info: '2026-10-21',
    note: '21/10/2026 направлено Директорам Финблока на корп почту'
  },
  {
    department: 'AI_FM',
    task_number: 3,
    title: 'Подготовить рапорт на RDP и GPU и FTP – 21.10',
    due_date: '2026-10-21',
    due_text: '2026-10-21',
    fact_info: '2026-10-21',
    note: 'Рапорт подписан'
  },
  {
    department: 'AI_FM',
    task_number: 4,
    title: 'Завершить настройку FTP-подключения для Елены',
    due_date: '2026-10-23',
    due_text: '2026-10-23',
    fact_info: null,
    note: 'в процессе'
  },
  {
    department: 'AI_FM',
    task_number: 5,
    title: 'Завершить настройку RDP и GPU-подключения для Абдуллоха',
    due_date: '2026-10-23',
    due_text: '2026-10-23',
    fact_info: null,
    note: 'в процессе'
  },
  {
    department: 'AI_FM',
    task_number: 6,
    title: 'Разработать скрипт для ежедневной синхронизации OPEX, CAPEX, Daily с NOVA',
    due_date: null,
    due_text: 'в процессе',
    fact_info: 'в процессе',
    note: 'Будет делать Абдуллох'
  },
  {
    department: 'AI_FM',
    task_number: 7,
    title: 'Сформировать выборку клиентов, ушедших в другие банки в 2026 году',
    due_date: '2026-10-30',
    due_text: '2026-10-30',
    fact_info: null,
    note: '21.10.2026 Передано Орифжонову А. для обзвона клиентов (1355 шт)'
  }
];

async function runSeed() {
  if (!process.env.DATABASE_URL) {
    console.error('Ошибка: переменная окружения DATABASE_URL не найдена.');
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);

  console.log('1. Создание типов и таблиц (выполнение schema.sql)...');
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
        criticality criticality_enum NOT NULL DEFAULT 'yellow',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT uq_department_task_number UNIQUE (department, task_number)
    )
  `;

  console.log('2. Актуализация ролей существующих пользователей (без создания тестовых аккаунтов)...');
  // Каждый пользователь самостоятельно регистрируется и задаёт пароль через интерфейс.
  // При этом роль admin закреплена только за tsoyelena1980@gmail.com, у остальных — user.
  await sql`
    UPDATE users
    SET role = CASE
      WHEN LOWER(email) = 'tsoyelena1980@gmail.com' THEN 'admin'::user_role_enum
      ELSE 'user'::user_role_enum
    END
  `;

  console.log('3. Заполнение сид-данных задач (26 позиций)...');
  let insertedCount = 0;

  for (const item of SEED_TASKS) {
    const computedStatus = resolveSeedStatus(item.due_date, item.due_text, item.fact_info, item.note);

    const res = await sql`
      INSERT INTO tasks (
        task_number,
        title,
        department,
        due_date,
        due_text,
        fact_info,
        note,
        status,
        criticality
      )
      VALUES (
        ${item.task_number},
        ${item.title},
        ${item.department},
        ${item.due_date},
        ${item.due_text},
        ${item.fact_info},
        ${item.note},
        ${computedStatus},
        'yellow'
      )
      ON CONFLICT (department, task_number) DO NOTHING
      RETURNING id
    `;

    if (res.length > 0) {
      insertedCount++;
    }
  }

  console.log(`Сидирование успешно завершено! Добавлено новых задач: ${insertedCount} (всего в шаблоне: ${SEED_TASKS.length}).`);
  console.log('Пользователи регистрируются самостоятельно в UI и сами устанавливают свой пароль.');
  console.log('При регистрации tsoyelena1980@gmail.com автоматически получает права администратора (admin).');
}

runSeed().catch((err) => {
  console.error('Ошибка при выполнении seed.js:', err);
  process.exit(1);
});
