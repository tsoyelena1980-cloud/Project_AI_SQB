// Клиентская логика «Трекер задач по внедрению AI в Финблоке SQB» с поддержкой 3 языков (RU / EN / UZ)

// Словарь локализации интерфейса, подразделений, статусов и критичности
const I18N = {
  ru: {
    authTitle: 'AI Трекер Финблока',
    authSubtitle: 'Мониторинг внедрения AI-инициатив в подразделениях SQB',
    loginTab: 'Вход в систему',
    registerTab: 'Регистрация',
    labelName: 'ФИО / Подразделение',
    placeholderName: 'Например: Алиев Рустам (ДБУ)',
    labelEmail: 'Email (любой почтовый сервис)',
    labelPassword: 'Пароль',
    btnLoginSubmit: 'Войти в трекер',
    btnRegisterSubmit: 'Зарегистрироваться',
    demoAccountsTitle: 'Тестовые доступы (после запуска сида):',
    appHeaderTitle: 'Трекер внедрения AI — Финблок SQB',
    appHeaderSub: 'Актуальность трекинга: октябрь 2026',
    navDashboard: 'Дашборд Финблока',
    navAiDashboard: 'Дашборд AI департамента',
    navTasks: 'Задачи и подразделения',
    navAdmin: 'Админка',
    btnLogout: 'Выйти',
    lastUpdatedPrefix: 'Обновление:',
    roleAdminBadge: 'РЕЖИМ АДМИНИСТРАТОРА',
    roleAdminSub: 'Полный доступ к управлению',
    roleUserBadge: 'РЕЖИМ ПОЛЬЗОВАТЕЛЯ',
    kpiTotalLabel: 'Всего задач (Финблок)',
    kpiTotalFoot: 'По 5 подразделениям Финблока',
    aiKpiTotalLabel: 'Задач в AI департаменте',
    aiKpiTotalFoot: 'Задачи с участием AI департамента (без «Не требуется»)',
    aiChartDeptTitle: 'Задачи AI департамента по подразделениям',
    aiExecProgressTitle: 'Прогресс выполнения (AI департамент)',
    kpiDoneLabel: 'Выполнено',
    kpiPercentOfTotal: '% от общего объёма',
    kpiProgressLabel: 'В работе',
    kpiProgressFoot: 'Активная фаза внедрения',
    kpiOverdueLabel: 'Просрочено',
    kpiOverdueFoot: 'Контроль приоритетов и сроков',
    kpiAttentionLabel: 'Критичных / Просрочено',
    kpiCriticalLabel: 'Критичных (🔴)',
    kpiCriticalFoot: 'Высокий приоритет',
    execProgressEyebrow: 'ИНДЕКС РЕАЛИЗАЦИИ',
    execProgressTitle: 'Прогресс выполнения',
    planFactSummaryLabel: 'Интегральный охват (Выполнено + В работе)',
    statusPendingShort: 'Не начато',
    statusNotStartedShort: 'Не начато',
    pfFactPlanLabel: 'Факт / План',
    deadlineEyebrow: 'ТАЙМ-МЕНЕДЖМЕНТ',
    deadlineTitle: 'Контроль сроков и SLA',
    upcomingSubheader: 'Задачи на оперативном контроле сроков',
    dlDoneOnTime: 'Завершено с фактом',
    dlInWork: 'В активной работе',
    dlUpcoming: 'Срок до 31.10.2026',
    dlOverdue: 'Просрочено',
    aiInsightsTitle: 'AI-аналитика и ключевые выводы',
    aiScopeAll: 'Весь Финблок SQB',
    btnRunAiAnalysis: '✦ Сформировать AI-анализ',
    aiPromptPlaceholder: 'Выберите «Весь Финблок SQB» или конкретное подразделение и нажмите «✦ Сформировать AI-анализ» для расчёта живой сводки, сверки статусов Подразделение ↔ AI и формирования отчёта.',
    aiGeneratingText: 'Анализ текущих задач, сроков и сверка статусов Подразделение ↔ AI департамент...',
    aiBtnCopyReport: '📋 Скопировать отчёт',
    aiBtnDownloadReport: '📥 Скачать отчёт (.txt)',
    aiBtnOpenTasks: '📂 Открыть задачи в таблице',
    aiToastCopied: 'AI-отчёт скопирован в буфер обмена',
    chartEyebrowStatus: 'СТРУКТУРА ПОРТФЕЛЯ',
    chartEyebrowDept: 'РАЗРЕЗ ПОДРАЗДЕЛЕНИЙ',
    chartEyebrowCrit: 'МАТРИЦА РИСКОВ',
    chartEyebrowTimeline: 'ДИНАМИКА ИСПОЛНЕНИЯ',
    chartStatusTitle: 'Распределение по статусам',
    chartDeptTitle: 'Задачи по подразделениям Финблока',
    chartCritTitle: 'Распределение по критичности (🔴 / 🟡 / 🟢)',
    chartMonthlyTitle: 'Динамика плановых сроков по месяцам',
    chartDoneSeries: 'Выполнено',
    chartPendingSeries: 'В работе',
    chartNotStartedSeries: 'Не начато',
    chartOverdueSeries: 'Просрочено',
    chartTotalByMonth: 'Всего задач по сроку',
    chartDoneByMonth: 'Из них выполнено',
    noDateLabel: 'Без даты',
    filterSearchLabel: 'Поиск по задаче / примечанию',
    filterSearchPlaceholder: 'Например: NOVA, токены, отчёты...',
    filterDeptLabel: 'Подразделение',
    filterAllDepts: 'Все подразделения',
    deptFilterSelectLabel: 'Выберите подразделение для просмотра',
    deptShowAllOption: 'Показать все подразделения',
    filterStatusLabel: 'Статус',
    filterAllStatuses: 'Все статусы',
    filterCritLabel: 'Критичность',
    filterAllCrits: 'Любая критичность',
    foundTasksPrefix: 'Найдено задач',
    btnAddTask: '+ Добавить задачу',
    thCriticality: 'Критичность',
    thDepartment: 'Подразделение',
    thTask: 'Задача',
    thDueDate: 'Срок завершения',
    thFact: 'Факт / продление',
    thStatus: 'Статус подразделения Финблока',
    thAiProcess: 'Статус AI департамента',
    thNote: 'Примечание',
    thActions: 'Действия',
    btnEdit: 'Изменить',
    btnDelete: 'Удалить',
    deptCompletedSummary: 'Выполнено',
    deptOf: 'из',
    lblDue: 'Срок',
    lblFact: 'Факт',
    lblNote: 'Прим.',
    readonlyTitle: 'Режим просмотра (Read-Only)',
    readonlyDesc:
      'Вы вошли с ролью Обычный пользователь. Создание, редактирование, удаление задач и изменение индикатора критичности (🔴 / 🟡 / 🟢) доступны только администратору (tsoyelena1980@gmail.com).',
    adminCritTitle: 'Быстрое управление критичностью задач (🔴 / 🟡 / 🟢)',
    adminCritSub: 'Мгновенная раскраска приоритетов администратором с сохранением в Neon PostgreSQL',
    adminUsersTitle: 'Пользователи и ролевой доступ',
    adminUsersSub: 'Полные права (CRUD) закреплены за tsoyelena1980@gmail.com, остальные — Read-Only',
    thUserName: 'Имя',
    thUserRole: 'Роль',
    thLastLogin: 'Последний вход (Ташкент)',
    thUserAccess: 'Уровень доступа',
    accessFullCrud: 'Полный доступ (CRUD)',
    accessReadOnly: 'Только просмотр (Read-Only)',
    adminHistoryTitle: 'Журнал входов в систему (Ташкентское время, UTC+5)',
    adminHistorySub: 'Полная история авторизаций и регистраций пользователей с точным временем по Ташкенту',
    thHistoryTime: 'Дата и время (Ташкент, UTC+5)',
    thHistoryEvent: 'Событие',
    eventLogin: 'Вход в систему',
    eventRegister: 'Регистрация',
    historyEmpty: 'Записей о входах пока нет',
    modalNewTask: 'Новая задача Финблока',
    modalEditTask: 'Редактирование задачи #',
    modalTaskNum: 'Порядковый № в подразделении',
    modalTaskTitle: 'Формулировка задачи',
    modalDueDate: 'Плановый срок (дата)',
    modalDueText: 'Текст срока (если нестандартный)',
    btnCancel: 'Отмена',
    btnSave: 'Сохранить задачу',
    btnSaveChangesAdmin: '💾 Сохранить изменения',
    toastAdminSavedAll: '✓ Все изменения сохранены и обновлены у всех пользователей на всех устройствах!',
    toastWelcome: 'Добро пожаловать',
    toastSynced: 'Данные синхронизированы с Neon PostgreSQL',
    toastTaskUpdated: 'Задача обновлена',
    toastTaskCreated: 'Задача добавлена',
    toastCritUpdated: 'Критичность задачи обновлена',
    toastTaskDeleted: 'Задача удалена',
    confirmDelete: 'Удалить выбранную задачу из базы данных?',
    departments: {
      AI_FM: 'ФМ',
      DBU: 'ДБУ',
      MSFO: 'МСФО',
      ZAKUPKI: 'Закупки',
      ALM: 'ALM'
    },
    statuses: {
      done: 'Выполнено',
      in_progress: 'В работе',
      not_started: 'Не начата',
      overdue: 'Просрочена',
      not_required: 'Не требуется'
    },
    criticalities: {
      red: 'Высокая',
      yellow: 'Средняя',
      green: 'Низкая'
    },
    aiStages: {
      awaiting_docs: '○ Не начата (Ожидание документов)',
      sent_to_ai: '📥 Получено в AI (На проверке)',
      uploading_nova: '⚡ В работе (Загрузка в NOVA)',
      testing_nova: '🧪 В работе (Тестирование в NOVA)',
      completed_ai: '✓ Выполнено (Внедрено в AI)',
      overdue_ai: '◷ Просрочена'
    },
    pipeStart: 'Подразделение',
    pipeEnd: 'AI NOVA Готово'
  },

  en: {
    authTitle: 'SQB Finblock AI Tracker',
    authSubtitle: 'Monitoring AI implementation initiatives across SQB divisions',
    loginTab: 'Sign In',
    registerTab: 'Sign Up',
    labelName: 'Full Name / Division',
    placeholderName: 'e.g. Rustam Aliev (Accounting)',
    labelEmail: 'Email (any email provider)',
    labelPassword: 'Password',
    btnLoginSubmit: 'Sign In to Tracker',
    btnRegisterSubmit: 'Create Account',
    demoAccountsTitle: 'Demo accounts (after running seed):',
    appHeaderTitle: 'AI Implementation Tracker — SQB Finblock',
    appHeaderSub: 'Tracking period: October 2026',
    navDashboard: 'Finblock Dashboard',
    navAiDashboard: 'AI Department Dashboard',
    navTasks: 'Tasks & Divisions',
    navAdmin: 'Admin Panel',
    btnLogout: 'Sign Out',
    lastUpdatedPrefix: 'Updated:',
    roleAdminBadge: 'ADMINISTRATOR MODE',
    roleAdminSub: 'Full management access',
    roleUserBadge: 'USER MODE',
    kpiTotalLabel: 'Total Tasks (Finblock)',
    kpiTotalFoot: 'Across 5 Finblock divisions',
    aiKpiTotalLabel: 'AI Department Tasks',
    aiKpiTotalFoot: 'Tasks involving AI Department (excl. Not Required)',
    aiChartDeptTitle: 'AI Department Tasks by Division',
    aiExecProgressTitle: 'Execution Progress (AI Department)',
    kpiDoneLabel: 'Completed',
    kpiPercentOfTotal: '% of total volume',
    kpiProgressLabel: 'In Progress',
    kpiProgressFoot: 'Active implementation phase',
    kpiOverdueLabel: 'Overdue',
    kpiOverdueFoot: 'Priority & deadline control',
    kpiAttentionLabel: 'Critical / Overdue',
    kpiCriticalLabel: 'Critical (🔴)',
    kpiCriticalFoot: 'High priority',
    execProgressEyebrow: 'EXECUTION INDEX',
    execProgressTitle: 'Execution Progress',
    planFactSummaryLabel: 'Active Coverage (Completed + In Progress)',
    statusPendingShort: 'Not Started',
    statusNotStartedShort: 'Not Started',
    pfFactPlanLabel: 'Actual / Plan',
    deadlineEyebrow: 'TIME MANAGEMENT',
    deadlineTitle: 'Deadline Control & SLA',
    upcomingSubheader: 'Tasks under active deadline monitoring',
    dlDoneOnTime: 'Completed with actuals',
    dlInWork: 'Actively in progress',
    dlUpcoming: 'Due by Oct 31, 2026',
    dlOverdue: 'Overdue tasks',
    aiInsightsTitle: 'AI Analytics & Executive Insights',
    aiScopeAll: 'Entire Finblock SQB',
    btnRunAiAnalysis: '✦ Generate AI Analysis',
    aiPromptPlaceholder: 'Select "Entire Finblock SQB" or a division and click "✦ Generate AI Analysis" to calculate live metrics, Division ↔ AI status sync, and generate an executive report.',
    aiGeneratingText: 'Analyzing live tasks, deadlines, and Division ↔ AI Department status alignment...',
    aiBtnCopyReport: '📋 Copy Report',
    aiBtnDownloadReport: '📥 Download Report (.txt)',
    aiBtnOpenTasks: '📂 Open Tasks in Table',
    aiToastCopied: 'AI report copied to clipboard',
    chartEyebrowStatus: 'PORTFOLIO STRUCTURE',
    chartEyebrowDept: 'DIVISION BREAKDOWN',
    chartEyebrowCrit: 'RISK MATRIX',
    chartEyebrowTimeline: 'EXECUTION TIMELINE',
    chartStatusTitle: 'Distribution by Status',
    chartDeptTitle: 'Tasks by Finblock Division',
    chartCritTitle: 'Distribution by Criticality (🔴 / 🟡 / 🟢)',
    chartMonthlyTitle: 'Monthly Planned Deadlines Dynamics',
    chartDoneSeries: 'Completed',
    chartPendingSeries: 'In Progress',
    chartNotStartedSeries: 'Not Started',
    chartOverdueSeries: 'Overdue',
    chartTotalByMonth: 'Total tasks by deadline',
    chartDoneByMonth: 'Completed tasks',
    noDateLabel: 'No date',
    filterSearchLabel: 'Search by task / note',
    filterSearchPlaceholder: 'e.g. NOVA, tokens, reports...',
    filterDeptLabel: 'Division',
    filterAllDepts: 'All divisions',
    deptFilterSelectLabel: 'Select division to view',
    deptShowAllOption: 'Show all divisions',
    filterStatusLabel: 'Status',
    filterAllStatuses: 'All statuses',
    filterCritLabel: 'Criticality',
    filterAllCrits: 'Any criticality',
    foundTasksPrefix: 'Tasks found',
    btnAddTask: '+ Add Task',
    thCriticality: 'Criticality',
    thDepartment: 'Division',
    thTask: 'Task Description',
    thDueDate: 'Due Date',
    thFact: 'Actual / Extension',
    thStatus: 'Finblock Division Status',
    thAiProcess: 'AI Department Status',
    thNote: 'Notes',
    thActions: 'Actions',
    btnEdit: 'Edit',
    btnDelete: 'Delete',
    deptCompletedSummary: 'Completed',
    deptOf: 'of',
    lblDue: 'Due',
    lblFact: 'Actual',
    lblNote: 'Note',
    readonlyTitle: 'Read-Only Mode',
    readonlyDesc:
      'You are signed in as a Standard User. Creating, editing, deleting tasks, and changing criticality badges (🔴 / 🟡 / 🟢) are restricted exclusively to the administrator (tsoyelena1980@gmail.com).',
    adminCritTitle: 'Quick Task Criticality Management (🔴 / 🟡 / 🟢)',
    adminCritSub: 'Instant priority assignment by Administrator saved directly to Neon PostgreSQL',
    adminUsersTitle: 'Users & Role Access',
    adminUsersSub: 'Full CRUD privileges are assigned exclusively to tsoyelena1980@gmail.com; others are Read-Only',
    thUserName: 'Name',
    thUserRole: 'Role',
    thLastLogin: 'Last Login (Tashkent)',
    thUserAccess: 'Access Level',
    accessFullCrud: 'Full Access (CRUD)',
    accessReadOnly: 'Read-Only View',
    adminHistoryTitle: 'System Login History (Tashkent Time, UTC+5)',
    adminHistorySub: 'Complete log of user sign-ins and registrations in Tashkent timezone',
    thHistoryTime: 'Date & Time (Tashkent, UTC+5)',
    thHistoryEvent: 'Event',
    eventLogin: 'Sign In',
    eventRegister: 'Registration',
    historyEmpty: 'No login records yet',
    modalNewTask: 'New Finblock Task',
    modalEditTask: 'Edit Task #',
    modalTaskNum: 'Task # in Division',
    modalTaskTitle: 'Task Description',
    modalDueDate: 'Planned Due Date',
    modalDueText: 'Due Date Text (if custom)',
    btnCancel: 'Cancel',
    btnSave: 'Save Task',
    btnSaveChangesAdmin: '💾 Save Changes',
    toastAdminSavedAll: '✓ All changes saved and updated for all users across all devices!',
    toastWelcome: 'Welcome',
    toastSynced: 'Data synchronized with Neon PostgreSQL',
    toastTaskUpdated: 'Task updated',
    toastTaskCreated: 'Task created',
    toastCritUpdated: 'Task criticality updated',
    toastTaskDeleted: 'Task deleted',
    confirmDelete: 'Are you sure you want to delete this task?',
    departments: {
      AI_FM: 'FM',
      DBU: 'Accounting (DBU)',
      MSFO: 'IFRS (MSFO)',
      ZAKUPKI: 'Procurement',
      ALM: 'ALM'
    },
    statuses: {
      done: 'Completed',
      in_progress: 'In Progress',
      not_started: 'Not Started',
      overdue: 'Overdue',
      not_required: 'Not Required'
    },
    criticalities: {
      red: 'High',
      yellow: 'Medium',
      green: 'Low'
    },
    aiStages: {
      awaiting_docs: '○ Not Started (Awaiting Docs)',
      sent_to_ai: '📥 Received in AI (In Review)',
      uploading_nova: '⚡ In Progress (Uploading to NOVA)',
      testing_nova: '🧪 In Progress (Testing in NOVA)',
      completed_ai: '✓ Completed (Deployed in AI)',
      overdue_ai: '◷ Overdue'
    },
    pipeStart: 'Division',
    pipeEnd: 'AI NOVA Ready'
  },

  uz: {
    authTitle: 'SQB Moliya bloki AI Trekeri',
    authSubtitle: 'SQB bo‘linmalarida AI tashabbuslarini joriy etish monitoringi',
    loginTab: 'Tizimga kirish',
    registerTab: 'Ro‘yxatdan o‘tish',
    labelName: 'F.I.Sh. / Bo‘linma',
    placeholderName: 'Masalan: Aliyev Rustam (Buxgalteriya)',
    labelEmail: 'Email (istalgan pochta xizmati)',
    labelPassword: 'Parol',
    btnLoginSubmit: 'Trekerga kirish',
    btnRegisterSubmit: 'Ro‘yxatdan o‘tish',
    demoAccountsTitle: 'Test hisoblari (seed ishga tushirilgandan so‘ng):',
    appHeaderTitle: 'AI joriy etish trekeri — SQB Moliya bloki',
    appHeaderSub: 'Treking holati: 2026-yil oktabr',
    navDashboard: 'Moliya bloki dashbordi',
    navAiDashboard: 'AI departamenti dashbordi',
    navTasks: 'Vazifalar va bo‘linmalar',
    navAdmin: 'Admin panel',
    btnLogout: 'Chiqish',
    lastUpdatedPrefix: 'Yangilanish:',
    roleAdminBadge: 'ADMINISTRATOR REJIMI',
    roleAdminSub: 'Boshqaruvga to‘liq ruxsat',
    roleUserBadge: 'FOYDALANUVCHI REJIMI',
    kpiTotalLabel: 'Jami vazifalar (Moliya bloki)',
    kpiTotalFoot: 'Moliya blokining 5 ta bo‘linmasi bo‘yicha',
    aiKpiTotalLabel: 'AI departamenti vazifalari',
    aiKpiTotalFoot: 'AI departamenti ishtirokidagi vazifalar',
    aiChartDeptTitle: 'Bo‘linmalar bo‘yicha AI departamenti vazifalari',
    aiExecProgressTitle: 'Bajarilish jarayoni (AI departamenti)',
    kpiDoneLabel: 'Bajarildi',
    kpiPercentOfTotal: '% umumiy hajmdan',
    kpiProgressLabel: 'Jarayonda',
    kpiProgressFoot: 'Faol joriy etish bosqichi',
    kpiOverdueLabel: 'Muddati o‘tgan',
    kpiOverdueFoot: 'Ustuvorlik va muddat nazorati',
    kpiAttentionLabel: 'Muhim / Muddati o‘tgan',
    kpiCriticalLabel: 'Muhim (🔴)',
    kpiCriticalFoot: 'Yuqori ustuvorlik',
    execProgressEyebrow: 'IJRO INDEKSI',
    execProgressTitle: 'Bajarilish jarayoni',
    planFactSummaryLabel: 'Umumiy qamrov (Bajarildi + Jarayonda)',
    statusPendingShort: 'Boshlanmagan',
    statusNotStartedShort: 'Boshlanmagan',
    pfFactPlanLabel: 'Fakt / Reja',
    deadlineEyebrow: 'VAQT NAZORATI',
    deadlineTitle: 'Muddatlar nazorati va SLA',
    upcomingSubheader: 'Tezkor muddat nazoratidagi vazifalar',
    dlDoneOnTime: 'Fakt bilan bajarilgan',
    dlInWork: 'Faol jarayonda',
    dlUpcoming: 'Muddati 31.10.2026 gacha',
    dlOverdue: 'Muddati o‘tgan',
    aiInsightsTitle: 'AI-tahlil va asosiy xulosalar',
    aiScopeAll: 'Butun SQB Moliya bloki',
    btnRunAiAnalysis: '✦ AI-tahlilni shakllantirish',
    aiPromptPlaceholder: '«Butun SQB Moliya bloki» yoki bo‘linmani tanlang va jonli hisobot hamda Bo‘linma ↔ AI holatlar solishtirmasini olish uchun «✦ AI-tahlilni shakllantirish» tugmasini bosing.',
    aiGeneratingText: 'Joriy vazifalar, muddatlar va Bo‘linma ↔ AI departamenti holatlari tahlil qilinmoqda...',
    aiBtnCopyReport: '📋 Hisobotni nusxalash',
    aiBtnDownloadReport: '📥 Hisobotni yuklab olish (.txt)',
    aiBtnOpenTasks: '📂 Vazifalarni jadvalda ochish',
    aiToastCopied: 'AI-hisobot vaqtinchalik xotiraga nusxalandi',
    chartEyebrowStatus: 'PORTFEL TARKIBI',
    chartEyebrowDept: 'BO‘LINMALAR KESIMI',
    chartEyebrowCrit: 'XAVFLAR MATRITSASI',
    chartEyebrowTimeline: 'IJRO DINAMIKASI',
    chartStatusTitle: 'Holatlar bo‘yicha taqsimot',
    chartDeptTitle: 'Moliya bloki bo‘linmalari bo‘yicha vazifalar',
    chartCritTitle: 'Muhimlik darajasi bo‘yicha taqsimot (🔴 / 🟡 / 🟢)',
    chartMonthlyTitle: 'Oylar bo‘yicha rejadagi muddatlar dinamikasi',
    chartDoneSeries: 'Bajarildi',
    chartPendingSeries: 'Jarayonda',
    chartNotStartedSeries: 'Boshlanmagan',
    chartOverdueSeries: 'Muddati o‘tgan',
    chartTotalByMonth: 'Muddat bo‘yicha jami vazifalar',
    chartDoneByMonth: 'Shundan bajarilgani',
    noDateLabel: 'Sanasiz',
    filterSearchLabel: 'Vazifa / izoh bo‘yicha qidiruv',
    filterSearchPlaceholder: 'Masalan: NOVA, tokenlar, hisobotlar...',
    filterDeptLabel: 'Bo‘linma',
    filterAllDepts: 'Barcha bo‘linmalar',
    deptFilterSelectLabel: 'Ko‘rish uchun bo‘linmani tanlang',
    deptShowAllOption: 'Barcha bo‘linmalarni ko‘rsatish',
    filterStatusLabel: 'Holat',
    filterAllStatuses: 'Barcha holatlar',
    filterCritLabel: 'Muhimlik darajasi',
    filterAllCrits: 'Barcha darajalar',
    foundTasksPrefix: 'Topilgan vazifalar',
    btnAddTask: '+ Vazifa qo‘shish',
    thCriticality: 'Muhimlik',
    thDepartment: 'Bo‘linma',
    thTask: 'Vazifa',
    thDueDate: 'Yakunlash muddati',
    thFact: 'Fakt / uzaytirish',
    thStatus: 'Moliya bloki bo‘linmasi holati',
    thAiProcess: 'AI departamenti holati',
    thNote: 'Izoh',
    thActions: 'Amallar',
    btnEdit: 'Tahrirlash',
    btnDelete: 'O‘chirish',
    deptCompletedSummary: 'Bajarildi',
    deptOf: 'dan',
    lblDue: 'Muddat',
    lblFact: 'Fakt',
    lblNote: 'Izoh',
    readonlyTitle: 'Faqat ko‘rish rejimi (Read-Only)',
    readonlyDesc:
      'Siz Oddiy foydalanuvchi sifatida kirdingiz. Vazifalarni yaratish, tahrirlash, o‘chirish va muhimlik belgisini (🔴 / 🟡 / 🟢) o‘zgartirish faqat administrator (tsoyelena1980@gmail.com) uchun ruxsat etilgan.',
    adminCritTitle: 'Vazifalar muhimligini tezkor boshqarish (🔴 / 🟡 / 🟢)',
    adminCritSub: 'Administrator tomonidan ustuvorlikni belgilash va Neon PostgreSQL bazasida saqlash',
    adminUsersTitle: 'Foydalanuvchilar va rollar',
    adminUsersSub: 'To‘liq CRUD huquqlari faqat tsoyelena1980@gmail.com uchun biriktirilgan, qolganlar — Read-Only',
    thUserName: 'Ism',
    thUserRole: 'Rol',
    thLastLogin: 'Oxirgi kirish (Toshkent)',
    thUserAccess: 'Ruxsat darajasi',
    accessFullCrud: 'To‘liq huquq (CRUD)',
    accessReadOnly: 'Faqat ko‘rish (Read-Only)',
    adminHistoryTitle: 'Tizimga kirishlar tarixi (Toshkent vaqti, UTC+5)',
    adminHistorySub: 'Foydalanuvchilarning tizimga kirish va ro‘yxatdan o‘tish tarixi (Toshkent vaqti bilan)',
    thHistoryTime: 'Sana va vaqt (Toshkent, UTC+5)',
    thHistoryEvent: 'Hodisa',
    eventLogin: 'Tizimga kirish',
    eventRegister: 'Ro‘yxatdan o‘tish',
    historyEmpty: 'Kirish yozuvlari hali mavjud emas',
    modalNewTask: 'Yangi vazifa qo‘shish',
    modalEditTask: 'Vazifani tahrirlash #',
    modalTaskNum: 'Bo‘linmadagi tartib raqami',
    modalTaskTitle: 'Vazifa tavsifi',
    modalDueDate: 'Rejadagi muddat (sana)',
    modalDueText: 'Muddat matni (nostandart bo‘lsa)',
    btnCancel: 'Bekor qilish',
    btnSave: 'Saqlash',
    btnSaveChangesAdmin: '💾 O‘zgarishlarni saqlash',
    toastAdminSavedAll: '✓ Barcha o‘zgarishlar saqlandi va barcha qurilmalardagi foydalanuvchilarda yangilandi!',
    toastWelcome: 'Xush kelibsiz',
    toastSynced: 'Ma’lumotlar Neon PostgreSQL bilan sinxronlashtirildi',
    toastTaskUpdated: 'Vazifa yangilandi',
    toastTaskCreated: 'Yangi vazifa qo‘shildi',
    toastCritUpdated: 'Vazifa muhimligi yangilandi',
    toastTaskDeleted: 'Vazifa o‘chirildi',
    confirmDelete: 'Tanlangan vazifani ma’lumotlar bazasidan o‘chirishni tasdiqlaysizmi?',
    departments: {
      AI_FM: 'FM',
      DBU: 'Buxgalteriya (DBU)',
      MSFO: 'MHXS (MSFO)',
      ZAKUPKI: 'Xaridlar',
      ALM: 'ALM'
    },
    statuses: {
      done: 'Bajarildi',
      in_progress: 'Jarayonda',
      not_started: 'Boshlanmagan',
      overdue: 'Muddati o‘tgan',
      not_required: 'Talab etilmaydi'
    },
    criticalities: {
      red: 'Yuqori',
      yellow: 'O‘rta',
      green: 'Past'
    },
    aiStages: {
      awaiting_docs: '○ Boshlanmagan (Hujjat kutilmoqda)',
      sent_to_ai: '📥 AI ga qabul qilindi (Tekshiruvda)',
      uploading_nova: '⚡ Jarayonda (NOVA ga yuklash)',
      testing_nova: '🧪 Jarayonda (NOVA test sinovi)',
      completed_ai: '✓ Bajarildi (AI ga joriy etildi)',
      overdue_ai: '◷ Muddati o‘tgan'
    },
    pipeStart: 'Bo‘linma',
    pipeEnd: 'AI NOVA Tayyor'
  }
};

// Переводы сид-задач по ключу "DEPARTMENT:TASK_NUMBER" для бесшовного переключения на EN и UZ
const TASK_CONTENT_TRANSLATIONS = {
  'DBU:1': {
    en: { title: 'DBU Initiatives', note: 'Accepted. Decided to use NOVA platform for implementation' },
    uz: { title: 'DBU tashabbuslari', note: 'Qabul qilindi. Amalga oshirish uchun NOVA platformasidan foydalanishga qaror qilindi' }
  },
  'DBU:2': {
    en: {
      title: 'Provide internal DBU documents (Remuneration policy, tax base calculation, employee benefits — vacation, sick leave, business trips, etc.) and external website links',
      note: 'Received, forwarded to AI Department on 20.10.26'
    },
    uz: {
      title: 'DBU ichki hujjatlarini (Mehnatga haq to‘lash nizomi, soliq bazasini shakllantirish, xodimlarga to‘lovlar — ta’til, kasallik varaqasi, xizmat safari va h.k.) hamda tashqi sayt havolalarini taqdim etish',
      note: 'Qabul qilindi, 20.10.26 da AI departamentiga yuborildi'
    }
  },
  'DBU:3': {
    en: { title: 'Provide a list of standard FAQs for DBU', note: 'Received, forwarded to AI Department on 21.10.26' },
    uz: { title: 'DBU bo‘yicha namunaviy savol-javoblar ro‘yxatini taqdim etish', note: 'Qabul qilindi, 21.10.26 da AI departamentiga yuborildi' }
  },
  'DBU:4': {
    en: { title: 'Sample testing' },
    uz: { title: 'Tanlanma test sinovlari' }
  },
  'DBU:5': {
    en: { title: 'Provide feedback on the efficiency calculation draft (sent to corporate email on 21.10)' },
    uz: { title: 'Samaradorlikni hisoblash loyihasi bo‘yicha fikr-mulohaza bildirish (21.10 da korporativ pochtaga yuborilgan)' }
  },
  'MSFO:1': {
    en: { title: 'IFRS (MSFO) Initiatives', note: 'Accepted. Decided to use NOVA platform' },
    uz: { title: 'MHXS (MSFO) tashabbuslari', note: 'Qabul qilindi. NOVA platformasidan foydalanishga qaror qilindi' }
  },
  'MSFO:2': {
    en: { title: 'Provide Annual and Semi-Annual Reports for 2019–2025', note: 'Uploaded to NOVA on 13.10.2026' },
    uz: { title: '2019–2025 yillar uchun yillik va yarim yillik hisobotlarni taqdim etish', note: '13.10.2026 da NOVA tizimiga yuklandi' }
  },
  'MSFO:3': {
    en: { title: 'Testing in NOVA', note: '83 questions asked to the system, 12% returned inaccurate answers' },
    uz: { title: 'NOVA tizimida test sinovi', note: 'Tizimga 83 ta savol berildi, 12% holatda noto‘g‘ri javob olindi' }
  },
  'MSFO:4': {
    en: { title: 'Provide correct answers indicating sources and calculation methodology', note: 'Received, forwarded to AI Department on 23.10.26' },
    uz: { title: 'Manbalar va olish usullarini ko‘rsatgan holda to‘g‘ri javoblarni taqdim etish', note: 'Qabul qilindi, 23.10.26 da AI departamentiga yuborildi' }
  },
  'MSFO:5': {
    en: { title: 'Provide additional documents for uploading to NOVA (IFRS, IAS)', note: 'Received, forwarded to AI Department on 21.10.26' },
    uz: { title: 'NOVA tizimiga yuklash uchun qo‘shimcha hujjatlarni taqdim etish (IFRS, IAS)', note: 'Qabul qilindi, 21.10.26 da AI departamentiga yuborildi' }
  },
  'MSFO:6': {
    en: { title: 'Provide feedback on the efficiency calculation draft (sent to corporate email on 21.10)' },
    uz: { title: 'Samaradorlikni hisoblash loyihasi bo‘yicha fikr-mulohaza bildirish (21.10 da korporativ pochtaga yuborilgan)' }
  },
  'ZAKUPKI:1': {
    en: { title: 'Upload all required documentation to AI Procurement', note: 'not completed' },
    uz: { title: 'AI Xaridlar tizimiga barcha zarur hujjatlarni yuklash', note: 'yakunlanmagan' }
  },
  'ZAKUPKI:2': {
    en: { title: 'Ensure purchase of paid tokens for software operation', fact: 'Purchased', note: 'High token consumption' },
    uz: { title: 'Dastur ishlashi uchun pullik tokenlar xarid qilinishini ta’minlash', fact: 'Xarid qilindi', note: 'Ko‘p token sarflanmoqda' }
  },
  'ZAKUPKI:3': {
    en: { title: 'Additional assessment required due to high consumption of paid tokens', note: 'Chingiz (26.10.2026)' },
    uz: { title: 'Pullik tokenlar sarfi yuqoriligi sababli qo‘shimcha o‘rganish talab etiladi', note: 'Chingiz (26.10.2026)' }
  },
  'ZAKUPKI:4': {
    en: { title: 'Provide feedback on the efficiency calculation draft (sent to corporate email on 21.10)' },
    uz: { title: 'Samaradorlikni hisoblash loyihasi bo‘yicha fikr-mulohaza bildirish (21.10 da korporativ pochtaga yuborilgan)' }
  },
  'ZAKUPKI:5': {
    en: { title: 'Provide baseline data for efficiency calculation' },
    uz: { title: 'Samaradorlikni hisoblash uchun dastlabki ma’lumotlarni taqdim etish' }
  },
  'ALM:1': {
    en: { title: 'Conduct NOVA testing', note: 'not completed' },
    uz: { title: 'NOVA test sinovlarini o‘tkazish', note: 'yakunlanmagan' }
  },
  'ALM:2': {
    en: { title: 'Provide internal ALM documents', note: 'Received, forwarded to AI Department on 23.10.26' },
    uz: { title: 'ALM ichki hujjatlarini taqdim etish', note: 'Qabul qilindi, 23.10.26 da AI departamentiga yuborildi' }
  },
  'ALM:3': {
    en: { title: 'Provide feedback on the efficiency calculation draft (sent to corporate email on 21.10)' },
    uz: { title: 'Samaradorlikni hisoblash loyihasi bo‘yicha fikr-mulohaza bildirish (21.10 da korporativ pochtaga yuborilgan)' }
  },
  'AI_FM:1': {
    en: {
      title: 'Calculate implementation efficiency across each of the 33 initiatives jointly with Finblock Directors',
      fact: 'Draft completed and sent to CFO on 09.10.2026',
      note: 'Draft completed and sent to CFO on 09.10.2026'
    },
    uz: {
      title: 'Moliya bloki direktorlari bilan birgalikda 33 ta tashabbusning har biri bo‘yicha joriy etish samaradorligini hisoblash',
      fact: 'Loyiha tayyorlandi va 09.10.2026 da CFO ga yuborildi',
      note: 'Loyiha tayyorlandi va 09.10.2026 da CFO ga yuborildi'
    }
  },
  'AI_FM:2': {
    en: { title: 'Send efficiency calculation draft to Finblock Directors', note: '21/10/2026 sent to Finblock Directors via corporate email' },
    uz: { title: 'Samaradorlikni hisoblash loyihasini Moliya bloki direktorlariga yuborish', note: '21/10/2026 da Moliya bloki direktorlarining korporativ pochtasiga yuborildi' }
  },
  'AI_FM:3': {
    en: { title: 'Prepare memo for RDP, GPU and FTP – 21.10', note: 'Memo signed' },
    uz: { title: 'RDP, GPU va FTP bo‘yicha bildirishnoma tayyorlash – 21.10', note: 'Bildirishnoma imzolandi' }
  },
  'AI_FM:4': {
    en: { title: 'Complete FTP connection setup for Elena', note: 'in progress' },
    uz: { title: 'Yelena uchun FTP ulanishini sozlashni yakunlash', note: 'jarayonda' }
  },
  'AI_FM:5': {
    en: { title: 'Complete RDP and GPU connection setup for Abdullokh', note: 'in progress' },
    uz: { title: 'Abdulloh uchun RDP va GPU ulanishini sozlashni yakunlash', note: 'jarayonda' }
  },
  'AI_FM:6': {
    en: { title: 'Develop script for daily synchronization of OPEX, CAPEX, Daily with NOVA', due: 'in progress', fact: 'in progress', note: 'Assigned to Abdullokh' },
    uz: { title: 'OPEX, CAPEX, Daily ma’lumotlarini NOVA bilan kunlik sinxronlash skriptini ishlab chiqish', due: 'jarayonda', fact: 'jarayonda', note: 'Abdulloh bajaradi' }
  },
  'AI_FM:7': {
    en: { title: 'Compile sample of clients who moved to other banks in 2026', note: '21.10.2026 Handed over to A. Orifjonov for client outreach (1,355 clients)' },
    uz: { title: '2026-yilda boshqa banklarga o‘tib ketgan mijozlar tanlanmasini shakllantirish', note: '21.10.2026 Mijozlarga qo‘ng‘iroq qilish uchun A. Orifjonovga topshirildi (1355 ta)' }
  }
};

// Иконки критичности
const CRIT_ICONS = {
  red: '🔴',
  yellow: '🟡',
  green: '🟢'
};

// Получение актуальной метки последнего обновления администратором (без генерации ложной локальной метки при открытии на новом устройстве)
function getStoredLastModified() {
  const saved = localStorage.getItem('sqb_last_admin_update');
  if (!saved || saved === '2026-10-23T18:00:00+05:00') {
    return '';
  }
  return saved;
}

// Глобальное состояние приложения
const state = {
  lang: localStorage.getItem('sqb_ai_lang') || 'ru',
  token: localStorage.getItem('sqb_ai_jwt') || null,
  user: null,
  tasks: [],
  lastModifiedAt: getStoredLastModified(),
  hasUnsavedChanges: false,
  users: [],
  loginHistory: [],
  authMode: 'login',
  aiAnalysisGenerated: false,
  aiAnalysisScope: 'ALL',
  charts: {
    status: null,
    department: null,
    aiDepartment: null,
    criticality: null,
    monthly: null
  }
};

// Форматирование даты и времени строго по Ташкентскому часовому поясу (Asia/Tashkent, UTC+5)
function formatTashkentDateTime(isoDate) {
  if (!isoDate) return '—';
  let str = String(isoDate).trim();
  // Если строка из БД вернулась без суффикса часового пояса (например "2026-10-24 11:10:00"), интерпретируем её как UTC
  if (/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}:\d{2}(\.\d+)?$/.test(str)) {
    str = str.replace(' ', 'T') + 'Z';
  }

  const dateObj = new Date(str);
  if (isNaN(dateObj.getTime())) return '—';

  // Прямой расчёт Ташкентского времени (UTC + 5 часов), не зависящий от настроек часового пояса ОС пользователя
  const tashkentMs = dateObj.getTime() + 5 * 60 * 60 * 1000;
  const tashkentDate = new Date(tashkentMs);

  const day = String(tashkentDate.getUTCDate()).padStart(2, '0');
  const month = String(tashkentDate.getUTCMonth() + 1).padStart(2, '0');
  const year = tashkentDate.getUTCFullYear();
  const hours = String(tashkentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(tashkentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(tashkentDate.getUTCSeconds()).padStart(2, '0');

  const cityLabels = {
    ru: 'Ташкент',
    en: 'Tashkent',
    uz: 'Toshkent'
  };
  const cityLabel = cityLabels[state.lang] || 'Ташкент';

  return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds} (${cityLabel})`;
}

// Получение текущего словаря локализации
function t(key) {
  const dict = I18N[state.lang] || I18N.ru;
  return dict[key] || I18N.ru[key] || key;
}

// Получение локализованного текста задачи (для сид-данных переводит на EN/UZ, для новых задач оставляет оригинал)
function getLocalizedTaskFields(task) {
  if (state.lang === 'ru') {
    return {
      title: task.title,
      due: task.due_date || task.due_text || '—',
      fact: task.fact_info || '—',
      note: task.note || '—'
    };
  }
  const key = `${task.department}:${task.task_number}`;
  const tr = TASK_CONTENT_TRANSLATIONS[key] && TASK_CONTENT_TRANSLATIONS[key][state.lang];
  return {
    title: (tr && tr.title) || task.title,
    due: (tr && tr.due) || task.due_date || task.due_text || '—',
    fact: (tr && tr.fact) || task.fact_info || '—',
    note: (tr && tr.note) || task.note || '—'
  };
}

// Применение выбранного языка (RU / EN / UZ) ко всему DOM и графикам
function setLanguage(lang) {
  if (!I18N[lang]) return;
  state.lang = lang;
  localStorage.setItem('sqb_ai_lang', lang);
  document.documentElement.lang = lang;

  // Подсветка активной кнопки языка
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Перевод всех элементов с атрибутом data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Перевод всех плейсхолдеров с атрибутом data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Кнопка входа/регистрации
  const submitBtn = document.getElementById('auth-submit-btn');
  if (submitBtn) {
    submitBtn.textContent = state.authMode === 'register' ? t('btnRegisterSubmit') : t('btnLoginSubmit');
  }

  // Перевод выпадающих списков подразделений, статусов и критичности
  const deptDict = I18N[lang].departments;
  document.querySelectorAll('[data-dept-opt]').forEach((opt) => {
    const code = opt.getAttribute('data-dept-opt');
    if (deptDict[code]) opt.textContent = deptDict[code];
  });

  const statusDict = I18N[lang].statuses;
  document.querySelectorAll('[data-status-opt]').forEach((opt) => {
    const code = opt.getAttribute('data-status-opt');
    if (statusDict[code]) opt.textContent = statusDict[code];
  });

  const critDict = I18N[lang].criticalities;
  document.querySelectorAll('[data-crit-opt]').forEach((opt) => {
    const code = opt.getAttribute('data-crit-opt');
    if (critDict[code]) opt.textContent = `${CRIT_ICONS[code]} ${critDict[code]}`;
  });

  const aiStageDict = I18N[lang].aiStages;
  document.querySelectorAll('[data-ai-stage-opt]').forEach((opt) => {
    const code = opt.getAttribute('data-ai-stage-opt');
    if (aiStageDict && aiStageDict[code]) opt.textContent = aiStageDict[code];
  });

  updateAuthUI();

  if (state.token && state.user) {
    renderDashboard();
    renderTasksTable();
    renderAdminTab();
  }
}

// Начальные 26 задач из файла «Трэкинг_23.10.2026.xlsx» (для автоматической инициализации при локальном запуске)
const INITIAL_SEED_TASKS = [
  { id: 1, department: 'DBU', task_number: 1, title: 'Инициативы ДБУ', due_date: '2026-09-28', due_text: '2026-09-28', fact_info: '2026-09-28', note: 'Принято. Для реализации решено использовать платформу NOVA', status: 'done', criticality: 'yellow' },
  { id: 2, department: 'DBU', task_number: 2, title: 'Предоставить внутренние документы ДБУ (Положение по оплате труда, документы по формир. налоговой базы, расчёту выплат сотрудникам — отпускные, больничные, командировочные и т.д.), а также ссылки на сайты (внешние)', due_date: '2026-10-20', due_text: '2026-10-20', fact_info: '2026-10-20', note: 'Получено, направлено в AI департамент 20.10.26', status: 'done', criticality: 'yellow' },
  { id: 3, department: 'DBU', task_number: 3, title: 'Предоставить список типовых вопросо-ответов по ДБУ', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: '2026-10-21', note: 'Получено, направлено в AI департамент 21.10.26', status: 'done', criticality: 'yellow' },
  { id: 4, department: 'DBU', task_number: 4, title: 'Выборочное тестирование', due_date: '2026-10-30', due_text: '2026-10-30', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 5, department: 'DBU', task_number: 5, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 6, department: 'MSFO', task_number: 1, title: 'Инициативы МСФО', due_date: '2026-09-28', due_text: '2026-09-28', fact_info: '2026-09-28', note: 'Принято. Решено использовать платформу NOVA', status: 'done', criticality: 'yellow' },
  { id: 7, department: 'MSFO', task_number: 2, title: 'Предоставить Годовые и полугодовые отчёты за период 2019–2025 гг.', due_date: '2026-10-02', due_text: '2026-10-02', fact_info: '2026-10-02', note: 'Загружено в NOVA 13.10.2026', status: 'done', criticality: 'yellow' },
  { id: 8, department: 'MSFO', task_number: 3, title: 'Тестирование в NOVA', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: 'Системе задано 83 вопроса, по 12% получены некорректные ответы', status: 'done', criticality: 'yellow' },
  { id: 9, department: 'MSFO', task_number: 4, title: 'Необходимо представить правильные ответы с указанием источников и способа их получения', due_date: '2026-10-26', due_text: '2026-10-26', fact_info: '2026-10-23', note: 'Получено, направлено в AI департамент 23.10.26', status: 'done', criticality: 'yellow' },
  { id: 10, department: 'MSFO', task_number: 5, title: 'Предоставить доп. документы для загрузки в NOVA (IFRS, IAS)', due_date: '2026-10-22', due_text: '2026-10-22', fact_info: '2026-10-21', note: 'Получено, направлено в AI департамент 21.10.26', status: 'done', criticality: 'yellow' },
  { id: 11, department: 'MSFO', task_number: 6, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 12, department: 'ZAKUPKI', task_number: 1, title: 'Загрузить в AI Закупки всю необходимую документацию', due_date: '2026-10-16', due_text: '2026-10-16', fact_info: '2026-10-23', note: 'не завершено', status: 'in_progress', criticality: 'yellow' },
  { id: 13, department: 'ZAKUPKI', task_number: 2, title: 'Обеспечить приобретение платных токенов для работы программы', due_date: '2026-10-16', due_text: '2026-10-16', fact_info: 'Приобретено', note: 'Уходит много токенов', status: 'done', criticality: 'yellow' },
  { id: 14, department: 'ZAKUPKI', task_number: 3, title: 'В связи с высоким расходом платных токенов необходимо дополнительное обследование', due_date: '2026-10-26', due_text: '2026-10-26', fact_info: null, note: 'Чингиз (26.10.2026)', status: 'not_started', criticality: 'yellow' },
  { id: 15, department: 'ZAKUPKI', task_number: 4, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 16, department: 'ZAKUPKI', task_number: 5, title: 'Предоставить исходные данные для расчёта эффективности', due_date: '2026-10-28', due_text: '2026-10-28', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 17, department: 'ALM', task_number: 1, title: 'Провести тестирование NOVA', due_date: '2026-10-22', due_text: '2026-10-22', fact_info: '2026-10-23', note: 'не завершено', status: 'in_progress', criticality: 'yellow' },
  { id: 18, department: 'ALM', task_number: 2, title: 'Предоставить внутренние документы ALM', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: '2026-10-23', note: 'Получено, направлено в AI департамент 23.10.26', status: 'done', criticality: 'yellow' },
  { id: 19, department: 'ALM', task_number: 3, title: 'Предоставить обратную связь по проекту расчёта эффективности (21.10 направлено на корп почту)', due_date: '2026-10-27', due_text: '2026-10-27', fact_info: null, note: null, status: 'not_started', criticality: 'yellow' },
  { id: 20, department: 'AI_FM', task_number: 1, title: 'Рассчитать эффективность внедрения по каждой из 33 инициатив совместно с директорами Финблока', due_date: '2026-10-09', due_text: '2026-10-09', fact_info: 'Проект сделан и направлен CFO 09.10.2026', note: 'Проект сделан и направлен CFO 09.10.2026', status: 'done', criticality: 'yellow' },
  { id: 21, department: 'AI_FM', task_number: 2, title: 'Направить проект расчёта эффективности директорам Финблока', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: '21/10/2026 направлено Директорам Финблока на корп почту', status: 'done', criticality: 'yellow' },
  { id: 22, department: 'AI_FM', task_number: 3, title: 'Подготовить рапорт на RDP и GPU и FTP – 21.10', due_date: '2026-10-21', due_text: '2026-10-21', fact_info: '2026-10-21', note: 'Рапорт подписан', status: 'done', criticality: 'yellow' },
  { id: 23, department: 'AI_FM', task_number: 4, title: 'Завершить настройку FTP-подключения для Елены', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: null, note: 'в процессе', status: 'in_progress', criticality: 'yellow' },
  { id: 24, department: 'AI_FM', task_number: 5, title: 'Завершить настройку RDP и GPU-подключения для Абдуллоха', due_date: '2026-10-23', due_text: '2026-10-23', fact_info: null, note: 'в процессе', status: 'in_progress', criticality: 'yellow' },
  { id: 25, department: 'AI_FM', task_number: 6, title: 'Разработать скрипт для ежедневной синхронизации OPEX, CAPEX, Daily с NOVA', due_date: null, due_text: 'в процессе', fact_info: 'в процессе', note: 'Будет делать Абдуллох', status: 'in_progress', criticality: 'yellow' },
  { id: 26, department: 'AI_FM', task_number: 7, title: 'Сформировать выборку клиентов, ушедших в другие банки в 2026 году', due_date: '2026-10-30', due_text: '2026-10-30', fact_info: null, note: '21.10.2026 Передано Орифжонову А. для обзвона клиентов (1355 шт)', status: 'in_progress', criticality: 'yellow' }
];

const ADMIN_EMAIL = 'tsoyelena1980@gmail.com';
const AI_STAGE_ORDER = ['done', 'in_progress', 'not_started', 'overdue', 'not_required'];

// Определение статуса AI департамента (выполнено, в работе, не начата, просрочена, не требуется)
function resolveTaskAiStage(task) {
  if (task.ai_stage && AI_STAGE_ORDER.includes(task.ai_stage)) {
    return task.ai_stage;
  }
  // Конвертация прежних значений этапов, если они остались в кэше
  if (task.ai_stage === 'completed_ai') return 'done';
  if (['sent_to_ai', 'uploading_nova', 'testing_nova'].includes(task.ai_stage)) return 'in_progress';
  if (task.ai_stage === 'overdue_ai') return 'overdue';

  const raw = `${task.title || ''} ${task.note || ''} ${task.fact_info || ''}`.toLowerCase();
  // Задачи Финблока, не требующие участия AI департамента (расчёт эффективности, рапорты, обзвон клиентов и т.д.)
  if (
    raw.includes('расчёта эффективности') ||
    raw.includes('эффективность внедрения') ||
    raw.includes('подготовить рапорт') ||
    raw.includes('обзвона клиентов')
  ) {
    return 'not_required';
  }
  if (task.ai_stage === 'awaiting_docs') return 'not_started';
  // Если документы переданы в AI департамент или идут тесты — для AI департамента задача «В работе»
  if (raw.includes('направлено в ai департамент') || raw.includes('тестирование') || raw.includes('83 вопроса')) {
    return 'in_progress';
  }
  if (task.status && AI_STAGE_ORDER.includes(task.status)) {
    return task.status;
  }
  return 'not_started';
}

// Облачное хранилище для синхронизации пользователей, истории входов и задач между любыми устройствами (телефон, планшет, ноутбук) на GitHub Pages
const CLOUD_SYNC_URL = 'https://kvdb.io/BSDxhx7z1QdEMT8ErBYh7c/sqb_finblock_state_v1';

// Визуальная индикация кнопки «💾 Сохранить изменения» у администратора
function setUnsavedAdminIndicator(hasChanges) {
  state.hasUnsavedChanges = Boolean(hasChanges);
  ['admin-save-top-btn', 'admin-save-tasks-btn', 'admin-save-panel-btn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.classList.toggle('has-changes', state.hasUnsavedChanges);
    }
  });
}

// Загрузка и интеллектуальное слияние данных из облака в локальное хранилище устройства
async function pullCloudState() {
  try {
    const res = await fetch(`${CLOUD_SYNC_URL}?t=${Date.now()}`, {
      method: 'GET',
      cache: 'no-store'
    });
    if (!res.ok) return { updated: false };
    const cloud = await res.json().catch(() => null);
    if (!cloud || typeof cloud !== 'object') return { updated: false };

    let tasksUpdated = false;

    // 1. Слияние списка зарегистрированных пользователей по email (чтобы аккаунт с ноутбука работал на телефоне и наоборот)
    if (Array.isArray(cloud.users)) {
      const localUsers = JSON.parse(localStorage.getItem('sqb_local_users') || '[]');
      const mapByEmail = new Map();
      cloud.users.forEach((u) => {
        if (u && u.email) mapByEmail.set(String(u.email).toLowerCase(), u);
      });
      let localHasNew = false;
      localUsers.forEach((u) => {
        if (u && u.email) {
          const key = String(u.email).toLowerCase();
          if (!mapByEmail.has(key)) {
            mapByEmail.set(key, u);
            localHasNew = true;
          }
        }
      });
      const mergedUsers = Array.from(mapByEmail.values()).map((u, idx) => ({
        ...u,
        id: u.id || idx + 1,
        role: String(u.email).toLowerCase() === ADMIN_EMAIL ? 'admin' : 'user'
      }));
      localStorage.setItem('sqb_local_users', JSON.stringify(mergedUsers));
      if (localHasNew) {
        pushCloudState({ includeTasks: false }).catch(() => {});
      }
    }

    // 2. Слияние истории входов со всех устройств
    if (Array.isArray(cloud.loginHistory)) {
      const localHist = JSON.parse(localStorage.getItem('sqb_local_login_history') || '[]');
      const seenKeys = new Set();
      const mergedHist = [];
      [...cloud.loginHistory, ...localHist].forEach((entry) => {
        if (!entry || !entry.email || !entry.logged_at) return;
        const k = `${entry.email}|${entry.logged_at}|${entry.event_type}`;
        if (!seenKeys.has(k)) {
          seenKeys.add(k);
          mergedHist.push(entry);
        }
      });
      mergedHist.sort((a, b) => String(b.logged_at).localeCompare(String(a.logged_at)));
      localStorage.setItem('sqb_local_login_history', JSON.stringify(mergedHist.slice(0, 200)));
    }

    // 3. Синхронизация задач и метки времени последнего сохранения администратором для всех пользователей и устройств
    if (Array.isArray(cloud.tasks) && cloud.tasks.length > 0) {
      const localStamp = getStoredLastModified();
      const cloudStamp = cloud.lastModifiedAt || '';
      const prevTasksJson = localStorage.getItem('sqb_local_tasks') || '';
      const nextTasksJson = JSON.stringify(cloud.tasks);

      // Для обычных пользователей облачная версия от администратора ВСЕГДА является единственным источником истины.
      // Для администратора облачная версия применяется, если нет несохранённых локальных правок.
      const shouldAdoptCloudTasks =
        !isCurrentUserAdmin() ||
        (!state.hasUnsavedChanges && (!prevTasksJson || !localStamp || cloudStamp >= localStamp));

      if (shouldAdoptCloudTasks) {
        if (prevTasksJson !== nextTasksJson || (cloudStamp && cloudStamp !== localStamp)) {
          tasksUpdated = true;
        }
        localStorage.setItem('sqb_local_tasks', nextTasksJson);
        if (cloudStamp) {
          localStorage.setItem('sqb_last_admin_update', cloudStamp);
          state.lastModifiedAt = cloudStamp;
        }
      }
    }

    return { updated: tasksUpdated };
  } catch (_) {
    // При временном отсутствии интернета продолжаем работу с локальным кэшем
    return { updated: false };
  }
}

// Отправка актуального состояния в облако (задачи перезаписываются ТОЛЬКО при сохранении администратором)
async function pushCloudState(options = { includeTasks: false }) {
  try {
    let existingCloud = null;
    try {
      const getRes = await fetch(`${CLOUD_SYNC_URL}?t=${Date.now()}`, {
        method: 'GET',
        cache: 'no-store'
      });
      if (getRes.ok) {
        existingCloud = await getRes.json().catch(() => null);
      }
    } catch (_) {
      existingCloud = null;
    }

    const localUsers = JSON.parse(localStorage.getItem('sqb_local_users') || '[]');
    const localHistory = JSON.parse(localStorage.getItem('sqb_local_login_history') || '[]');

    const canPushTasks =
      Boolean(options && options.includeTasks) ||
      !existingCloud ||
      !Array.isArray(existingCloud.tasks) ||
      existingCloud.tasks.length === 0;

    const tasksToSave = canPushTasks
      ? JSON.parse(localStorage.getItem('sqb_local_tasks') || JSON.stringify(INITIAL_SEED_TASKS))
      : existingCloud.tasks;

    const stampToSave = canPushTasks
      ? getStoredLastModified() || new Date().toISOString()
      : existingCloud.lastModifiedAt || getStoredLastModified() || new Date().toISOString();

    const payload = {
      users: localUsers,
      tasks: tasksToSave,
      lastModifiedAt: stampToSave,
      loginHistory: localHistory
    };

    await fetch(CLOUD_SYNC_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (_) {
    // Ошибка сети игнорируется, данные сохранены локально и отправятся при следующей синхронизации
  }
}

// Принудительное сохранение и публикация всех изменений администратором для всех пользователей на всех устройствах
async function saveAllAdminChanges() {
  if (!isCurrentUserAdmin()) return;
  const nowIso = new Date().toISOString();
  state.lastModifiedAt = nowIso;
  localStorage.setItem('sqb_last_admin_update', nowIso);
  if (Array.isArray(state.tasks) && state.tasks.length > 0) {
    localStorage.setItem('sqb_local_tasks', JSON.stringify(state.tasks));
  }
  await pushCloudState({ includeTasks: true });
  setUnsavedAdminIndicator(false);
  renderDashboard();
  renderTasksTable();
  renderAdminTab();
  showToast(t('toastAdminSavedAll'));
}

// Локальный и облачный обработчик API для работы с любого устройства (телефон, планшет, ноутбук) на GitHub Pages
async function localApiFallback(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  const body = options.body ? JSON.parse(options.body) : {};

  // Перед выполнением запроса синхронизируем данные из облака между устройствами
  await pullCloudState();

  const getLocalUsers = () => JSON.parse(localStorage.getItem('sqb_local_users') || '[]');
  const saveLocalUsers = (list) => localStorage.setItem('sqb_local_users', JSON.stringify(list));

  const getLocalLoginHistory = () => JSON.parse(localStorage.getItem('sqb_local_login_history') || '[]');
  const appendLocalLoginHistory = (userObj, eventType = 'login') => {
    const history = getLocalLoginHistory();
    history.unshift({
      id: history.length > 0 ? Math.max(...history.map((h) => h.id || 0)) + 1 : 1,
      user_id: userObj.id,
      name: userObj.name,
      email: userObj.email,
      role: userObj.email.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'user',
      event_type: eventType,
      logged_at: new Date().toISOString()
    });
    localStorage.setItem('sqb_local_login_history', JSON.stringify(history.slice(0, 200)));
  };

  const getLocalTasks = () => {
    const raw = localStorage.getItem('sqb_local_tasks');
    if (!raw) {
      localStorage.setItem('sqb_local_tasks', JSON.stringify(INITIAL_SEED_TASKS));
      return [...INITIAL_SEED_TASKS];
    }
    return JSON.parse(raw);
  };
  const saveLocalTasks = (list) => localStorage.setItem('sqb_local_tasks', JSON.stringify(list));

  const decodeLocalToken = () => {
    if (!state.token) return null;
    try {
      return JSON.parse(decodeURIComponent(escape(atob(state.token))));
    } catch (_) {
      return null;
    }
  };

  // Эндпоинт /api/auth
  if (url.startsWith('/api/auth')) {
    const users = getLocalUsers();

    if (method === 'GET') {
      const payload = decodeLocalToken();
      if (!payload || !payload.email) throw new Error('Токен недействителен');
      const cleanTokenEmail = String(payload.email).toLowerCase();
      let found = users.find((u) => String(u.email).toLowerCase() === cleanTokenEmail);
      if (!found) {
        // Восстановление пользователя из валидного токена на устройстве и синхронизация с облаком
        found = {
          id: payload.id || users.length + 1,
          name: payload.name || cleanTokenEmail.split('@')[0],
          email: cleanTokenEmail,
          password_hash: '',
          role: cleanTokenEmail === ADMIN_EMAIL ? 'admin' : 'user',
          created_at: new Date().toISOString()
        };
        users.push(found);
        saveLocalUsers(users);
        await pushCloudState();
      }
      const role = found.email.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'user';
      return { user: { id: found.id, name: found.name, email: found.email, role } };
    }

    if (method === 'POST') {
      const { action, name, email, password } = body;
      const cleanEmail = String(email || '').trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        throw new Error('Введите корректный адрес электронной почты');
      }
      if (!password || String(password).length < 4) {
        throw new Error('Введите пароль (не менее 4 символов)');
      }

      const encodedPass = btoa(unescape(encodeURIComponent(password)));
      const existingIdx = users.findIndex((u) => String(u.email).toLowerCase() === cleanEmail);

      if (action === 'register') {
        if (existingIdx !== -1) {
          // Если пользователь уже регистрировался ранее и повторно заполняет форму регистрации на другом устройстве — обновляем/входим
          users[existingIdx].password_hash = encodedPass;
          if (name && String(name).trim()) {
            users[existingIdx].name = String(name).trim();
          }
          users[existingIdx].role = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';
          saveLocalUsers(users);
          appendLocalLoginHistory(users[existingIdx], 'login');
          await pushCloudState();

          const userPublic = {
            id: users[existingIdx].id,
            name: users[existingIdx].name,
            email: users[existingIdx].email,
            role: users[existingIdx].role
          };
          const token = btoa(unescape(encodeURIComponent(JSON.stringify(userPublic))));
          return { token, user: userPublic };
        }

        const role = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';
        const newUser = {
          id: users.length > 0 ? Math.max(...users.map((u) => u.id || 0)) + 1 : 1,
          name: String(name || cleanEmail.split('@')[0]).trim(),
          email: cleanEmail,
          password_hash: encodedPass,
          role,
          created_at: new Date().toISOString()
        };
        users.push(newUser);
        saveLocalUsers(users);
        appendLocalLoginHistory(newUser, 'register');
        await pushCloudState();

        const userPublic = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
        const token = btoa(unescape(encodeURIComponent(JSON.stringify(userPublic))));
        return { token, user: userPublic };
      }

      // Вход (login) с любого устройства (телефон, планшет, ноутбук)
      let userRecord = existingIdx !== -1 ? users[existingIdx] : null;

      if (!userRecord) {
        // Если аккаунт создавался на другом устройстве до включения облачной синхронизации — автоматически создаём и синхронизируем профиль в облаке
        const role = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';
        userRecord = {
          id: users.length > 0 ? Math.max(...users.map((u) => u.id || 0)) + 1 : 1,
          name: String(name || cleanEmail.split('@')[0]).trim(),
          email: cleanEmail,
          password_hash: encodedPass,
          role,
          created_at: new Date().toISOString()
        };
        users.push(userRecord);
        saveLocalUsers(users);
        appendLocalLoginHistory(userRecord, 'login');
        await pushCloudState();
      } else {
        // Если у пользователя пароль ещё не был синхронизирован или совпадает — разрешаем вход
        if (userRecord.password_hash && userRecord.password_hash !== encodedPass) {
          throw new Error('Неверный пароль для указанного email.');
        }
        userRecord.password_hash = encodedPass;
        userRecord.role = cleanEmail === ADMIN_EMAIL ? 'admin' : 'user';
        saveLocalUsers(users);
        appendLocalLoginHistory(userRecord, 'login');
        await pushCloudState();
      }

      const userPublic = { id: userRecord.id, name: userRecord.name, email: userRecord.email, role: userRecord.role };
      const token = btoa(unescape(encodeURIComponent(JSON.stringify(userPublic))));
      return { token, user: userPublic };
    }
  }

  // Проверка авторизации для /api/tasks и /api/users
  const caller = decodeLocalToken();
  if (!caller) throw new Error('Требуется авторизация');
  const isCallerAdmin = caller.email && caller.email.toLowerCase() === ADMIN_EMAIL && caller.role === 'admin';

  // Эндпоинт /api/tasks
  if (url.startsWith('/api/tasks')) {
    const tasks = getLocalTasks();
    if (method === 'GET') {
      const lastModifiedAt = getStoredLastModified();
      return { tasks, lastModifiedAt };
    }

    if (!isCallerAdmin) {
      throw new Error('Доступ запрещён: права на изменение есть только у администратора (tsoyelena1980@gmail.com)');
    }

    const nowIso = new Date().toISOString();

    if (method === 'POST') {
      const deptTasks = tasks.filter((t) => t.department === body.department);
      const nextNum = parseInt(body.task_number, 10) || (deptTasks.length > 0 ? Math.max(...deptTasks.map((t) => t.task_number)) + 1 : 1);
      const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
        department: body.department,
        task_number: nextNum,
        title: String(body.title).trim(),
        due_date: body.due_date || null,
        due_text: body.due_text || body.due_date || '—',
        fact_info: body.fact_info || null,
        note: body.note || null,
        status: body.status || 'not_started',
        ai_stage: body.ai_stage || 'awaiting_docs',
        criticality: body.criticality || 'yellow',
        updated_at: nowIso
      };
      tasks.push(newTask);
      saveLocalTasks(tasks);
      localStorage.setItem('sqb_last_admin_update', nowIso);
      setUnsavedAdminIndicator(true);
      await pushCloudState({ includeTasks: true });
      return { task: newTask, lastModifiedAt: nowIso };
    }

    if (method === 'PATCH') {
      const idx = tasks.findIndex((t) => t.id === Number(body.id));
      if (idx === -1) throw new Error('Задача не найдена');
      if (body.criticality) tasks[idx].criticality = body.criticality;
      if (body.status) tasks[idx].status = body.status;
      if (body.ai_stage) tasks[idx].ai_stage = body.ai_stage;
      tasks[idx].updated_at = nowIso;
      saveLocalTasks(tasks);
      localStorage.setItem('sqb_last_admin_update', nowIso);
      setUnsavedAdminIndicator(true);
      await pushCloudState({ includeTasks: true });
      return { task: tasks[idx], lastModifiedAt: nowIso };
    }

    if (method === 'PUT') {
      const idx = tasks.findIndex((t) => t.id === Number(body.id));
      if (idx === -1) throw new Error('Задача не найдена');
      tasks[idx] = {
        ...tasks[idx],
        department: body.department,
        task_number: parseInt(body.task_number, 10) || tasks[idx].task_number,
        title: String(body.title).trim(),
        due_date: body.due_date || null,
        due_text: body.due_text || body.due_date || '—',
        fact_info: body.fact_info || null,
        note: body.note || null,
        status: body.status || tasks[idx].status,
        ai_stage: body.ai_stage || tasks[idx].ai_stage || 'awaiting_docs',
        criticality: body.criticality || tasks[idx].criticality,
        updated_at: nowIso
      };
      saveLocalTasks(tasks);
      localStorage.setItem('sqb_last_admin_update', nowIso);
      setUnsavedAdminIndicator(true);
      await pushCloudState({ includeTasks: true });
      return { task: tasks[idx], lastModifiedAt: nowIso };
    }

    if (method === 'DELETE') {
      const idParam = new URLSearchParams(url.split('?')[1] || '').get('id') || body.id;
      const filtered = tasks.filter((t) => t.id !== Number(idParam));
      saveLocalTasks(filtered);
      localStorage.setItem('sqb_last_admin_update', nowIso);
      setUnsavedAdminIndicator(true);
      await pushCloudState({ includeTasks: true });
      return { deletedId: Number(idParam), lastModifiedAt: nowIso };
    }
  }

  // Эндпоинт /api/users
  if (url.startsWith('/api/users')) {
    if (!isCallerAdmin) throw new Error('Доступ разрешён только администратору');
    let loginHistory = getLocalLoginHistory();
    // Если журнал ещё пуст, но администратор уже авторизован — фиксируем текущую сессию
    if (loginHistory.length === 0 && caller) {
      appendLocalLoginHistory(caller, 'login');
      loginHistory = getLocalLoginHistory();
    }
    const users = getLocalUsers().map((u) => {
      const lastEntry = loginHistory.find((h) => h.email.toLowerCase() === u.email.toLowerCase());
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.email.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'user',
        created_at: u.created_at,
        last_login_at: lastEntry ? lastEntry.logged_at : u.created_at
      };
    });
    return { users, loginHistory };
  }

  throw new Error('Неизвестный запрос');
}

// Универсальная функция вызова серверного API Vercel (/api/*) с автоматической облачной синхронизацией на GitHub Pages
async function apiRequest(url, options = {}) {
  // На GitHub Pages или при открытии из файловой системы (file://) сразу используем облачно-локальный обработчик
  if (
    window.location.protocol === 'file:' ||
    window.location.hostname.endsWith('github.io')
  ) {
    return localApiFallback(url, options);
  }

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  if (state.token) {
    headers.Authorization = `Bearer ${state.token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers
    });

    // Если статический сервер (например, Live Server) вернул 404/405 на /api/* или не задан DATABASE_URL (500)
    if (response.status === 404 || response.status === 405 || response.status === 500) {
      const errData = await response.json().catch(() => ({}));
      if (!errData.error || errData.error.includes('внутренняя ошибка') || response.status === 404 || response.status === 405) {
        return localApiFallback(url, options);
      }
      throw new Error(errData.error);
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || `Error (${response.status})`);
    }
    const reqMethod = (options.method || 'GET').toUpperCase();
    if (url.startsWith('/api/tasks') && reqMethod !== 'GET') {
      const updatedStamp = data.lastModifiedAt || new Date().toISOString();
      state.lastModifiedAt = updatedStamp;
      localStorage.setItem('sqb_last_admin_update', updatedStamp);
    }
    return data;
  } catch (err) {
    // Перехват ошибки браузера "TypeError: Failed to fetch" при отсутствии запущенного бэкенда
    if (err instanceof TypeError || String(err.message).includes('Failed to fetch') || String(err.message).includes('NetworkError')) {
      return localApiFallback(url, options);
    }
    throw err;
  }
}

// Показ всплывающего уведомления
function showToast(message) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 3200);
}

// Переключение вкладок с плавным переходом (вкладка «Админка» доступна только администратору)
function switchTab(tabName) {
  if (tabName === 'admin' && !isCurrentUserAdmin()) {
    tabName = 'dashboard';
  }
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-pane').forEach((pane) => {
    pane.classList.toggle('active', pane.id === `tab-${tabName}`);
  });
}

// Проверка прав главного администратора (tsoyelena1980@gmail.com)
function isCurrentUserAdmin() {
  return (
    state.user &&
    state.user.role === 'admin' &&
    String(state.user.email).trim().toLowerCase() === 'tsoyelena1980@gmail.com'
  );
}

// Иконки статусов
const STATUS_ICONS = {
  done: '✓',
  in_progress: '⚡',
  not_started: '○',
  overdue: '◷',
  not_required: '—'
};

// Отображение ячейки «Критичность»: выпадающий список ТОЛЬКО для администратора, статичный бейдж для пользователей
function renderCriticalityCell(task) {
  const critLabels = I18N[state.lang].criticalities;
  const icon = CRIT_ICONS[task.criticality] || '🟡';
  const label = critLabels[task.criticality] || critLabels.yellow;

  if (!isCurrentUserAdmin()) {
    return `<span class="crit-badge crit-${task.criticality}">${icon} ${label}</span>`;
  }

  return `
    <select class="crit-select-inline crit-${task.criticality}" data-crit-task-id="${task.id}" aria-label="Task Criticality">
      <option value="red" ${task.criticality === 'red' ? 'selected' : ''}>🔴 ${critLabels.red}</option>
      <option value="yellow" ${task.criticality === 'yellow' ? 'selected' : ''}>🟡 ${critLabels.yellow}</option>
      <option value="green" ${task.criticality === 'green' ? 'selected' : ''}>🟢 ${critLabels.green}</option>
    </select>
  `;
}

// Отображение ячейки «Статус подразделения Финблока»: выпадающий список ТОЛЬКО для администратора, статичный бейдж для пользователей
function renderStatusCell(task) {
  const statusLabels = I18N[state.lang].statuses;
  const st = task.status || 'not_started';
  const icon = STATUS_ICONS[st] || '○';
  const label = statusLabels[st] || statusLabels.not_started;

  if (!isCurrentUserAdmin()) {
    return `<span class="status-badge status-${st}">${icon} ${label}</span>`;
  }

  return `
    <select class="crit-select-inline status-${st}" data-status-task-id="${task.id}" aria-label="Finblock Division Status">
      <option value="done" ${st === 'done' ? 'selected' : ''}>✓ ${statusLabels.done}</option>
      <option value="in_progress" ${st === 'in_progress' ? 'selected' : ''}>⚡ ${statusLabels.in_progress}</option>
      <option value="not_started" ${st === 'not_started' ? 'selected' : ''}>○ ${statusLabels.not_started}</option>
      <option value="overdue" ${st === 'overdue' ? 'selected' : ''}>◷ ${statusLabels.overdue}</option>
    </select>
  `;
}

// Отображение ячейки «Статус AI департамента»: выпадающий список ТОЛЬКО для администратора, статичный бейдж для пользователей
function renderAiPipelineCell(task) {
  const stage = resolveTaskAiStage(task);
  const statusLabels = I18N[state.lang].statuses;
  const icon = STATUS_ICONS[stage] || '○';
  const label = statusLabels[stage] || statusLabels.not_started;

  if (!isCurrentUserAdmin()) {
    return `<span class="status-badge status-${stage}">${icon} ${label}</span>`;
  }

  return `
    <select class="crit-select-inline status-${stage}" data-ai-stage-task-id="${task.id}" aria-label="AI Department Status">
      <option value="done" ${stage === 'done' ? 'selected' : ''}>✓ ${statusLabels.done}</option>
      <option value="in_progress" ${stage === 'in_progress' ? 'selected' : ''}>⚡ ${statusLabels.in_progress}</option>
      <option value="not_started" ${stage === 'not_started' ? 'selected' : ''}>○ ${statusLabels.not_started}</option>
      <option value="overdue" ${stage === 'overdue' ? 'selected' : ''}>◷ ${statusLabels.overdue}</option>
      <option value="not_required" ${stage === 'not_required' ? 'selected' : ''}>— ${statusLabels.not_required}</option>
    </select>
  `;
}

// Обновление карточек KPI, панели План/Факт и графиков Chart.js
function renderDashboard() {
  const lastUpdatedEl = document.getElementById('last-updated-time');
  if (lastUpdatedEl) {
    lastUpdatedEl.textContent = formatTashkentDateTime(state.lastModifiedAt || new Date().toISOString());
  }

  const total = state.tasks.length;
  const doneCount = state.tasks.filter((t) => t.status === 'done').length;
  const inProgressCount = state.tasks.filter((t) => t.status === 'in_progress').length;
  const overdueCount = state.tasks.filter((t) => t.status === 'overdue').length;
  const notStartedCount = state.tasks.filter((t) => t.status === 'not_started').length;
  const criticalCount = state.tasks.filter((t) => t.criticality === 'red').length;

  const donePct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const progPct = total > 0 ? Math.round((inProgressCount / total) * 100) : 0;
  const overPct = total > 0 ? Math.round((overdueCount / total) * 100) : 0;
  const critPct = total > 0 ? Math.round((criticalCount / total) * 100) : 0;

  document.getElementById('kpi-total').textContent = total;
  document.getElementById('kpi-done').textContent = doneCount;
  document.getElementById('kpi-done-percent').textContent = `${donePct}${t('kpiPercentOfTotal')}`;
  document.getElementById('kpi-in-progress').textContent = inProgressCount;
  document.getElementById('kpi-overdue').textContent = overdueCount;
  document.getElementById('kpi-critical').textContent = criticalCount;

  // Обновление бейджей процентов и мини-шкал внутри карточек KPI
  const setElText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const setElWidth = (id, pctVal) => {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.min(100, Math.max(0, pctVal))}%`;
  };

  setElText('kpi-done-badge', `${donePct}%`);
  setElText('kpi-progress-badge', `${progPct}%`);
  setElText('kpi-overdue-badge', `${overPct}%`);
  setElText('kpi-critical-badge', `${critPct}%`);

  setElWidth('kpi-bar-done', donePct);
  setElWidth('kpi-bar-progress', progPct);
  setElWidth('kpi-bar-overdue', overPct);
  setElWidth('kpi-bar-critical', critPct);

  const statusLabels = I18N[state.lang].statuses;
  const deptNames = I18N[state.lang].departments;
  const critLabels = I18N[state.lang].criticalities;
  const deptKeys = Object.keys(deptNames);

  // === БЛОК 1: Индекс реализации (Прогресс выполнения и План / Факт по подразделениям) ===
  const activeCoveragePct = total > 0 ? Math.round(((doneCount + inProgressCount) / total) * 100) : 0;
  const notStartedPct = total > 0 ? Math.round((notStartedCount / total) * 100) : 0;
  setElText('overall-score-pill', `${donePct}% DONE`);
  setElText('active-coverage-val', `${activeCoveragePct}% (${doneCount + inProgressCount}/${total})`);
  setElWidth('stacked-done-bar', donePct);
  setElWidth('stacked-progress-bar', progPct);
  setElWidth('stacked-pending-bar', notStartedPct);
  setElWidth('stacked-overdue-bar', overPct);
  setElText('legend-done-cnt', doneCount);
  setElText('legend-prog-cnt', inProgressCount);
  setElText('legend-wait-cnt', notStartedCount);
  setElText('legend-overdue-cnt', overdueCount);

  const pfListEl = document.getElementById('plan-fact-list');
  if (pfListEl) {
    pfListEl.innerHTML = deptKeys
      .map((k) => {
        const dTasks = state.tasks.filter((task) => task.department === k);
        const dPlan = dTasks.length;
        const dFact = dTasks.filter((task) => task.status === 'done').length;
        const dActive = dTasks.filter((task) => task.status === 'in_progress').length;
        const dNotStarted = dTasks.filter((task) => task.status === 'not_started').length;
        const dOverdue = dTasks.filter((task) => task.status === 'overdue').length;
        const dFactPct = dPlan > 0 ? Math.round((dFact / dPlan) * 100) : 0;
        const dActivePct = dPlan > 0 ? Math.round((dActive / dPlan) * 100) : 0;
        const dNotStartedPct = dPlan > 0 ? Math.round((dNotStarted / dPlan) * 100) : 0;
        const dOverduePct = dPlan > 0 ? Math.round((dOverdue / dPlan) * 100) : 0;

        return `
          <div class="pf-row">
            <div class="pf-top">
              <span class="pf-dept">${deptNames[k]}</span>
              <span class="pf-numbers">
                ${t('chartDoneSeries')}: <strong>${dFact}</strong> ·
                ${t('chartPendingSeries')}: <b style="color:#c084fc;">${dActive}</b> ·
                ${t('chartNotStartedSeries')}: <b style="color:#94a3b8;">${dNotStarted}</b> ·
                ${t('chartOverdueSeries')}: <b style="color:#fb7185;">${dOverdue}</b>
              </span>
            </div>
            <div class="pf-bar-bg">
              <div class="pf-bar-done" style="width: ${dFactPct}%"></div>
              <div class="pf-bar-active" style="width: ${dActivePct}%"></div>
              <div class="pf-bar-pending" style="width: ${dNotStartedPct}%"></div>
              <div class="pf-bar-overdue" style="width: ${dOverduePct}%"></div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // === БЛОК 2: Контроль сроков и SLA ===
  const upcomingTasks = state.tasks
    .filter((task) => task.status !== 'done')
    .sort((a, b) => String(a.due_date || '9999').localeCompare(String(b.due_date || '9999')));

  const dlMetricsEl = document.getElementById('deadline-metrics-grid');
  if (dlMetricsEl) {
    dlMetricsEl.innerHTML = `
      <div class="dl-box">
        <span class="dl-val" style="color:#34d399;">${doneCount}</span>
        <span class="dl-lbl">${t('dlDoneOnTime')}</span>
      </div>
      <div class="dl-box">
        <span class="dl-val" style="color:#38bdf8;">${inProgressCount}</span>
        <span class="dl-lbl">${t('dlInWork')}</span>
      </div>
      <div class="dl-box">
        <span class="dl-val" style="color:#fbbf24;">${upcomingTasks.length}</span>
        <span class="dl-lbl">${t('dlUpcoming')}</span>
      </div>
      <div class="dl-box">
        <span class="dl-val" style="color:#fb7185;">${overdueCount}</span>
        <span class="dl-lbl">${t('dlOverdue')}</span>
      </div>
    `;
  }

  const watchlistEl = document.getElementById('deadline-watchlist');
  if (watchlistEl) {
    watchlistEl.innerHTML = upcomingTasks
      .slice(0, 5)
      .map((task) => {
        const loc = getLocalizedTaskFields(task);
        const cls =
          task.status === 'overdue'
            ? 'watch-overdue'
            : task.criticality === 'red' || task.status === 'in_progress'
            ? 'watch-urgent'
            : '';
        return `
          <div class="watch-item ${cls}">
            <div class="watch-title">
              <strong>[${deptNames[task.department]}]</strong> ${escapeHtml(loc.title)}
            </div>
            <span class="watch-date">${escapeHtml(loc.due)}</span>
          </div>
        `;
      })
      .join('');
  }

  // === ГРАФИК CHART.JS: РАЗРЕЗ ПОДРАЗДЕЛЕНИЙ (Выполнено, В работе, Не начато, Просрочено) ===
  const isAdminTheme = isCurrentUserAdmin();
  const barInProgressColor = isAdminTheme ? '#9333ea' : '#2563eb';

  const deptDone = deptKeys.map(
    (k) => state.tasks.filter((t) => t.department === k && t.status === 'done').length
  );
  const deptInProgress = deptKeys.map(
    (k) => state.tasks.filter((t) => t.department === k && t.status === 'in_progress').length
  );
  const deptNotStarted = deptKeys.map(
    (k) => state.tasks.filter((t) => t.department === k && t.status === 'not_started').length
  );
  const deptOverdue = deptKeys.map(
    (k) => state.tasks.filter((t) => t.department === k && t.status === 'overdue').length
  );

  const deptCanvas = document.getElementById('chart-department');
  if (deptCanvas) {
    const deptCtx = deptCanvas.getContext('2d');
    if (state.charts.department) state.charts.department.destroy();
    state.charts.department = new Chart(deptCtx, {
      type: 'bar',
      data: {
        labels: deptKeys.map((k) => deptNames[k]),
        datasets: [
          {
            label: t('chartDoneSeries'),
            data: deptDone,
            backgroundColor: '#10b981',
            borderRadius: 6
          },
          {
            label: t('chartPendingSeries'),
            data: deptInProgress,
            backgroundColor: barInProgressColor,
            borderRadius: 6
          },
          {
            label: t('chartNotStartedSeries'),
            data: deptNotStarted,
            backgroundColor: '#64748b',
            borderRadius: 6
          },
          {
            label: t('chartOverdueSeries'),
            data: deptOverdue,
            backgroundColor: '#f43f5e',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(36, 50, 79, 0.35)' } },
          y: { stacked: true, beginAtZero: true, ticks: { color: '#94a3b8', stepSize: 1 }, grid: { color: 'rgba(36, 50, 79, 0.35)' } }
        },
        plugins: {
          legend: { position: 'bottom', labels: { color: '#cbd5e1', padding: 14, usePointStyle: true } }
        }
      }
    });
  }

  // Отрисовка отдельного дашборда по задачам AI департамента (без включения их в Финблок)
  renderAiDashboard();
}

// Отдельный дашборд по задачам AI департамента (учитываются только задачи, где Статус AI департамента !== 'not_required')
function renderAiDashboard() {
  const aiLastUpdatedEl = document.getElementById('ai-last-updated-time');
  if (aiLastUpdatedEl) {
    aiLastUpdatedEl.textContent = formatTashkentDateTime(state.lastModifiedAt || new Date().toISOString());
  }

  const aiTasks = state.tasks.filter((task) => resolveTaskAiStage(task) !== 'not_required');
  const total = aiTasks.length;
  const doneCount = aiTasks.filter((task) => resolveTaskAiStage(task) === 'done').length;
  const inProgressCount = aiTasks.filter((task) => resolveTaskAiStage(task) === 'in_progress').length;
  const notStartedCount = aiTasks.filter((task) => resolveTaskAiStage(task) === 'not_started').length;
  const overdueCount = aiTasks.filter((task) => resolveTaskAiStage(task) === 'overdue').length;
  const criticalCount = aiTasks.filter((task) => task.criticality === 'red').length;

  const donePct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const progPct = total > 0 ? Math.round((inProgressCount / total) * 100) : 0;
  const notStartedPct = total > 0 ? Math.round((notStartedCount / total) * 100) : 0;
  const overPct = total > 0 ? Math.round((overdueCount / total) * 100) : 0;
  const critPct = total > 0 ? Math.round((criticalCount / total) * 100) : 0;
  const activeCoveragePct = total > 0 ? Math.round(((doneCount + inProgressCount) / total) * 100) : 0;

  const setElText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const setElWidth = (id, pctVal) => {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.min(100, Math.max(0, pctVal))}%`;
  };

  setElText('ai-kpi-total', total);
  setElText('ai-overall-score-pill', `${donePct}% DONE`);
  setElText('ai-kpi-done', doneCount);
  setElText('ai-kpi-done-badge', `${donePct}%`);
  setElText('ai-kpi-done-percent', `${donePct}${t('kpiPercentOfTotal')}`);
  setElText('ai-kpi-in-progress', inProgressCount);
  setElText('ai-kpi-progress-badge', `${progPct}%`);
  setElText('ai-kpi-critical', criticalCount);
  setElText('ai-kpi-overdue', overdueCount);

  setElWidth('ai-kpi-bar-done', donePct);
  setElWidth('ai-kpi-bar-progress', progPct);
  setElWidth('ai-kpi-bar-critical', critPct);

  setElText('ai-active-coverage-val', `${activeCoveragePct}% (${doneCount + inProgressCount}/${total})`);
  setElWidth('ai-stacked-done-bar', donePct);
  setElWidth('ai-stacked-progress-bar', progPct);
  setElWidth('ai-stacked-pending-bar', notStartedPct);
  setElWidth('ai-stacked-overdue-bar', overPct);

  setElText('ai-legend-done-cnt', doneCount);
  setElText('ai-legend-prog-cnt', inProgressCount);
  setElText('ai-legend-wait-cnt', notStartedCount);
  setElText('ai-legend-overdue-cnt', overdueCount);

  const deptNames = I18N[state.lang].departments;
  const deptKeys = Object.keys(deptNames);

  const aiPfListEl = document.getElementById('ai-plan-fact-list');
  if (aiPfListEl) {
    aiPfListEl.innerHTML = deptKeys
      .map((k) => {
        const dTasks = aiTasks.filter((task) => task.department === k);
        const dPlan = dTasks.length;
        const dFact = dTasks.filter((task) => resolveTaskAiStage(task) === 'done').length;
        const dActive = dTasks.filter((task) => resolveTaskAiStage(task) === 'in_progress').length;
        const dNotStarted = dTasks.filter((task) => resolveTaskAiStage(task) === 'not_started').length;
        const dOverdue = dTasks.filter((task) => resolveTaskAiStage(task) === 'overdue').length;

        const dFactPct = dPlan > 0 ? Math.round((dFact / dPlan) * 100) : 0;
        const dActivePct = dPlan > 0 ? Math.round((dActive / dPlan) * 100) : 0;
        const dNotStartedPct = dPlan > 0 ? Math.round((dNotStarted / dPlan) * 100) : 0;
        const dOverduePct = dPlan > 0 ? Math.round((dOverdue / dPlan) * 100) : 0;

        return `
          <div class="pf-row">
            <div class="pf-top">
              <span class="pf-dept">${deptNames[k]}</span>
              <span class="pf-numbers">
                ${t('chartDoneSeries')}: <strong>${dFact}</strong> ·
                ${t('chartPendingSeries')}: <b style="color:#c084fc;">${dActive}</b> ·
                ${t('chartNotStartedSeries')}: <b style="color:#94a3b8;">${dNotStarted}</b> ·
                ${t('chartOverdueSeries')}: <b style="color:#fb7185;">${dOverdue}</b>
              </span>
            </div>
            <div class="pf-bar-bg">
              <div class="pf-bar-done" style="width: ${dFactPct}%"></div>
              <div class="pf-bar-active" style="width: ${dActivePct}%"></div>
              <div class="pf-bar-pending" style="width: ${dNotStartedPct}%"></div>
              <div class="pf-bar-overdue" style="width: ${dOverduePct}%"></div>
            </div>
          </div>
        `;
      })
      .join('');
  }

  const isAdminTheme = isCurrentUserAdmin();
  const barInProgressColor = isAdminTheme ? '#9333ea' : '#2563eb';

  const aiDeptDone = deptKeys.map(
    (k) => aiTasks.filter((task) => task.department === k && resolveTaskAiStage(task) === 'done').length
  );
  const aiDeptInProgress = deptKeys.map(
    (k) => aiTasks.filter((task) => task.department === k && resolveTaskAiStage(task) === 'in_progress').length
  );
  const aiDeptNotStarted = deptKeys.map(
    (k) => aiTasks.filter((task) => task.department === k && resolveTaskAiStage(task) === 'not_started').length
  );
  const aiDeptOverdue = deptKeys.map(
    (k) => aiTasks.filter((task) => task.department === k && resolveTaskAiStage(task) === 'overdue').length
  );

  const aiDeptCanvas = document.getElementById('chart-ai-department');
  if (aiDeptCanvas) {
    const aiDeptCtx = aiDeptCanvas.getContext('2d');
    if (state.charts.aiDepartment) state.charts.aiDepartment.destroy();
    state.charts.aiDepartment = new Chart(aiDeptCtx, {
      type: 'bar',
      data: {
        labels: deptKeys.map((k) => deptNames[k]),
        datasets: [
          {
            label: t('chartDoneSeries'),
            data: aiDeptDone,
            backgroundColor: '#10b981',
            borderRadius: 6
          },
          {
            label: t('chartPendingSeries'),
            data: aiDeptInProgress,
            backgroundColor: barInProgressColor,
            borderRadius: 6
          },
          {
            label: t('chartNotStartedSeries'),
            data: aiDeptNotStarted,
            backgroundColor: '#64748b',
            borderRadius: 6
          },
          {
            label: t('chartOverdueSeries'),
            data: aiDeptOverdue,
            backgroundColor: '#f43f5e',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(36, 50, 79, 0.35)' } },
          y: { stacked: true, beginAtZero: true, ticks: { color: '#94a3b8', stepSize: 1 }, grid: { color: 'rgba(36, 50, 79, 0.35)' } }
        },
        plugins: {
          legend: { position: 'bottom', labels: { color: '#cbd5e1', padding: 14, usePointStyle: true } }
        }
      }
    });
  }
}

// Отрисовка основной таблицы задач с учётом фильтров и выбранного языка
function renderTasksTable() {
  const search = document.getElementById('filter-search').value.trim().toLowerCase();
  const dept = document.getElementById('filter-department').value;
  const status = document.getElementById('filter-status').value;
  const aiStageEl = document.getElementById('filter-ai-stage');
  const aiStageFilter = aiStageEl ? aiStageEl.value : 'ALL';
  const crit = document.getElementById('filter-criticality').value;

  const isAdmin = isCurrentUserAdmin();
  document.getElementById('th-actions').classList.toggle('hidden', !isAdmin);
  document.getElementById('add-task-btn').classList.toggle('hidden', !isAdmin);
  const saveTasksBtn = document.getElementById('admin-save-tasks-btn');
  if (saveTasksBtn) saveTasksBtn.classList.toggle('hidden', !isAdmin);

  const deptNames = I18N[state.lang].departments;
  const statusLabels = I18N[state.lang].statuses;

  const filtered = state.tasks.filter((task) => {
    if (dept !== 'ALL' && task.department !== dept) return false;
    if (status !== 'ALL' && task.status !== status) return false;
    if (aiStageFilter !== 'ALL' && resolveTaskAiStage(task) !== aiStageFilter) return false;
    if (crit !== 'ALL' && task.criticality !== crit) return false;
    if (search) {
      const loc = getLocalizedTaskFields(task);
      const haystack = `${task.title} ${task.note || ''} ${task.fact_info || ''} ${loc.title} ${loc.note} ${loc.fact}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  const doneInFiltered = filtered.filter((task) => task.status === 'done').length;
  const pctInFiltered = filtered.length > 0 ? Math.round((doneInFiltered / filtered.length) * 100) : 0;

  document.getElementById('tasks-counter').textContent = `${t('foundTasksPrefix')}: ${filtered.length} (${t('deptCompletedSummary')} ${doneInFiltered} / ${filtered.length})`;
  const progBarEl = document.getElementById('filtered-dept-progress');
  const progPctEl = document.getElementById('filtered-dept-pct');
  if (progBarEl) progBarEl.style.width = `${pctInFiltered}%`;
  if (progPctEl) progPctEl.textContent = `${pctInFiltered}%`;

  const tbody = document.getElementById('tasks-tbody');
  tbody.innerHTML = filtered
    .map((task) => {
      const loc = getLocalizedTaskFields(task);

      return `
        <tr>
          <td><strong>${task.task_number}</strong></td>
          <td>${renderCriticalityCell(task)}</td>
          <td><span class="dept-pill">${deptNames[task.department] || task.department}</span></td>
          <td>${escapeHtml(loc.title)}</td>
          <td>${escapeHtml(loc.due)}</td>
          <td>${escapeHtml(loc.fact)}</td>
          <td>${renderStatusCell(task)}</td>
          <td>${renderAiPipelineCell(task)}</td>
          <td>${escapeHtml(loc.note)}</td>
          ${
            isAdmin
              ? `<td>
                  <div class="row-actions">
                    <button type="button" class="action-btn" data-edit-id="${task.id}">${t('btnEdit')}</button>
                    <button type="button" class="action-btn delete" data-delete-id="${task.id}">${t('btnDelete')}</button>
                  </div>
                </td>`
              : ''
          }
        </tr>
      `;
    })
    .join('');
}

// Отрисовка вкладки «Админка» (быстрая раскраска критичности и управление ролями пользователей)
function renderAdminTab() {
  const isAdmin = isCurrentUserAdmin();
  document.getElementById('admin-readonly-notice').classList.toggle('hidden', isAdmin);
  document.getElementById('admin-panel-content').classList.toggle('hidden', !isAdmin);

  if (!isAdmin) return;

  const deptNames = I18N[state.lang].departments;
  const quickList = document.getElementById('admin-quick-criticality-list');
  quickList.innerHTML = state.tasks
    .map((task) => {
      const loc = getLocalizedTaskFields(task);
      return `
        <div class="quick-crit-item">
          <div>
            <span class="dept-pill">${deptNames[task.department]}</span>
            <strong style="margin-left:6px;">#${task.task_number}</strong>
            <span style="margin-left:6px;">${escapeHtml(loc.title)}</span>
          </div>
          <div class="quick-crit-buttons">
            <button type="button" class="crit-btn ${task.criticality === 'red' ? 'active' : ''}" data-quick-crit="red" data-id="${task.id}">🔴</button>
            <button type="button" class="crit-btn ${task.criticality === 'yellow' ? 'active' : ''}" data-quick-crit="yellow" data-id="${task.id}">🟡</button>
            <button type="button" class="crit-btn ${task.criticality === 'green' ? 'active' : ''}" data-quick-crit="green" data-id="${task.id}">🟢</button>
          </div>
        </div>
      `;
    })
    .join('');

  const usersTbody = document.getElementById('users-tbody');
  usersTbody.innerHTML = state.users
    .map((u) => {
      const isMainAdmin = String(u.email).toLowerCase() === 'tsoyelena1980@gmail.com';
      const lastLoginFormatted = formatTashkentDateTime(u.last_login_at || u.created_at);
      return `
        <tr>
          <td>${u.id}</td>
          <td>${escapeHtml(u.name)}</td>
          <td>${escapeHtml(u.email)}</td>
          <td><span class="role-pill ${isMainAdmin ? 'role-admin' : 'role-user'}">${isMainAdmin ? 'admin' : 'user'}</span></td>
          <td>${escapeHtml(lastLoginFormatted)}</td>
          <td>${isMainAdmin ? t('accessFullCrud') : t('accessReadOnly')}</td>
        </tr>
      `;
    })
    .join('');

  // Отрисовка журнала истории входов по Ташкентскому времени (Asia/Tashkent, UTC+5)
  const historyTbody = document.getElementById('login-history-tbody');
  if (historyTbody) {
    if (!state.loginHistory || state.loginHistory.length === 0) {
      historyTbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#94a3b8;">${t('historyEmpty')}</td></tr>`;
    } else {
      historyTbody.innerHTML = state.loginHistory
        .map((item, index) => {
          const isMainAdmin = String(item.email).toLowerCase() === 'tsoyelena1980@gmail.com';
          const eventBadge =
            item.event_type === 'register'
              ? `<span class="status-badge status-in_progress">${t('eventRegister')}</span>`
              : `<span class="status-badge status-done">${t('eventLogin')}</span>`;
          return `
            <tr>
              <td>${index + 1}</td>
              <td><strong>${escapeHtml(formatTashkentDateTime(item.logged_at))}</strong></td>
              <td>${escapeHtml(item.name)}</td>
              <td>${escapeHtml(item.email)}</td>
              <td><span class="role-pill ${isMainAdmin ? 'role-admin' : 'role-user'}">${isMainAdmin ? 'admin' : 'user'}</span></td>
              <td>${eventBadge}</td>
            </tr>
          `;
        })
        .join('');
    }
  }
}

// Безопасное экранирование HTML
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Загрузка всех данных после авторизации
async function loadAllData() {
  const tasksData = await apiRequest('/api/tasks');
  state.tasks = tasksData.tasks || [];
  if (tasksData.lastModifiedAt) {
    state.lastModifiedAt = tasksData.lastModifiedAt;
  }

  if (isCurrentUserAdmin()) {
    try {
      const usersData = await apiRequest('/api/users');
      state.users = usersData.users || [];
      state.loginHistory = usersData.loginHistory || [];
    } catch (_) {
      state.users = [];
      state.loginHistory = [];
    }
  }

  renderDashboard();
  renderTasksTable();
  renderAdminTab();
}

// SVG-иконки для индикатора роли в верхней панели (щит для администратора, силуэт для пользователя)
const ROLE_SHIELD_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
const ROLE_USER_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

// Обновление шапки пользователя, индикатора роли и автоматическое переключение темы по роли
function updateAuthUI() {
  const authScreen = document.getElementById('auth-screen');
  const appShell = document.getElementById('app-shell');

  if (!state.token || !state.user) {
    document.body.classList.remove('admin-theme', 'user-theme');
    localStorage.removeItem('sqb_ai_role_theme');
    authScreen.classList.remove('hidden');
    appShell.classList.add('hidden');
    return;
  }

  authScreen.classList.add('hidden');
  appShell.classList.remove('hidden');

  const isAdmin = isCurrentUserAdmin();

  // Автоматическое переключение цветовой темы по авторизованной роли
  document.body.classList.toggle('admin-theme', isAdmin);
  document.body.classList.toggle('user-theme', !isAdmin);
  localStorage.setItem('sqb_ai_role_theme', isAdmin ? 'admin' : 'user');

  // Заполнение блока индикатора роли в верхней панели данными из системы авторизации
  const badgeBox = document.getElementById('user-role-indicator');
  const iconEl = document.getElementById('current-user-icon');
  const nameEl = document.getElementById('current-user-name');
  const roleEl = document.getElementById('current-user-role');
  const subEl = document.getElementById('current-user-sub');
  const adminNavTab = document.getElementById('admin-nav-tab');

  if (nameEl) {
    nameEl.textContent = state.user.name;
  }

  if (adminNavTab) {
    adminNavTab.classList.toggle('hidden', !isAdmin);
  }
  const adminSaveTopBtn = document.getElementById('admin-save-top-btn');
  if (adminSaveTopBtn) {
    adminSaveTopBtn.classList.toggle('hidden', !isAdmin);
  }
  const adminSaveTasksBtn = document.getElementById('admin-save-tasks-btn');
  if (adminSaveTasksBtn) {
    adminSaveTasksBtn.classList.toggle('hidden', !isAdmin);
  }

  if (isAdmin) {
    if (badgeBox) {
      badgeBox.classList.add('badge-admin');
      badgeBox.classList.remove('badge-user');
    }
    if (iconEl) iconEl.innerHTML = ROLE_SHIELD_SVG;
    if (roleEl) {
      roleEl.textContent = t('roleAdminBadge');
      roleEl.className = 'role-pill role-admin';
    }
    if (subEl) {
      subEl.textContent = t('roleAdminSub');
      subEl.classList.remove('hidden');
    }
  } else {
    if (badgeBox) {
      badgeBox.classList.add('badge-user');
      badgeBox.classList.remove('badge-admin');
    }
    if (iconEl) iconEl.innerHTML = ROLE_USER_SVG;
    if (roleEl) {
      roleEl.textContent = t('roleUserBadge');
      roleEl.className = 'role-pill role-user';
    }
    if (subEl) {
      subEl.classList.add('hidden');
    }
    // Если была открыта вкладка «Админка», переключаем обычного пользователя на «Дашборд»
    const adminPane = document.getElementById('tab-admin');
    if (adminPane && adminPane.classList.contains('active')) {
      switchTab('dashboard');
    }
  }
}

// Открытие модального окна для создания или редактирования задачи
function openTaskModal(task = null) {
  const modal = document.getElementById('task-modal');
  document.getElementById('modal-title').textContent = task
    ? `${t('modalEditTask')}${task.task_number}`
    : t('modalNewTask');

  document.getElementById('task-id').value = task ? task.id : '';
  document.getElementById('task-department').value = task ? task.department : 'AI_FM';
  document.getElementById('task-number').value = task ? task.task_number : '';
  document.getElementById('task-title-input').value = task ? task.title : '';
  document.getElementById('task-due-date').value = task && task.due_date ? task.due_date : '';
  document.getElementById('task-due-text').value = task && task.due_text ? task.due_text : '';
  document.getElementById('task-status').value = task ? task.status : 'not_started';
  document.getElementById('task-ai-stage').value = task ? resolveTaskAiStage(task) : 'awaiting_docs';
  document.getElementById('task-criticality').value = task ? task.criticality : 'yellow';
  document.getElementById('task-fact').value = task && task.fact_info ? task.fact_info : '';
  document.getElementById('task-note').value = task && task.note ? task.note : '';

  modal.classList.remove('hidden');
}

function closeTaskModal() {
  document.getElementById('task-modal').classList.add('hidden');
}

// Инициализация обработчиков событий
document.addEventListener('DOMContentLoaded', async () => {
  // Обработчики переключателя языков (RU / EN / UZ)
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Применяем сохранённый язык при старте
  setLanguage(state.lang);

  // Переключение вкладок Вход / Регистрация
  document.querySelectorAll('.auth-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.authMode = btn.dataset.authMode;
      document.querySelectorAll('.auth-tab').forEach((b) => b.classList.toggle('active', b === btn));
      document
        .getElementById('register-name-group')
        .classList.toggle('hidden', state.authMode !== 'register');
      document.getElementById('auth-submit-btn').textContent =
        state.authMode === 'register' ? t('btnRegisterSubmit') : t('btnLoginSubmit');
    });
  });

  // Отправка формы авторизации
  document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('auth-error');
    errEl.classList.add('hidden');

    const payload = {
      action: state.authMode,
      name: document.getElementById('auth-name').value,
      email: document.getElementById('auth-email').value,
      password: document.getElementById('auth-password').value
    };

    try {
      const data = await apiRequest('/api/auth', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      state.token = data.token;
      state.user = data.user;
      localStorage.setItem('sqb_ai_jwt', data.token);
      updateAuthUI();
      await loadAllData();
      showToast(`${t('toastWelcome')}, ${data.user.name}!`);
    } catch (err) {
      errEl.textContent = err.message;
      errEl.classList.remove('hidden');
    }
  });

  // Выход из системы
  document.getElementById('logout-btn').addEventListener('click', () => {
    state.token = null;
    state.user = null;
    localStorage.removeItem('sqb_ai_jwt');
    updateAuthUI();
  });

  // Обновление данных с сервера (по кнопке в шапке и по кнопке даты обновления на дашборде)
  document.getElementById('refresh-data-btn').addEventListener('click', async () => {
    await loadAllData();
    showToast(t('toastSynced'));
  });

  const lastUpdatedBtn = document.getElementById('last-updated-btn');
  if (lastUpdatedBtn) {
    lastUpdatedBtn.addEventListener('click', async () => {
      await loadAllData();
      showToast(t('toastSynced'));
    });
  }

  const aiLastUpdatedBtn = document.getElementById('ai-last-updated-btn');
  if (aiLastUpdatedBtn) {
    aiLastUpdatedBtn.addEventListener('click', async () => {
      await loadAllData();
      showToast(t('toastSynced'));
    });
  }

  // Навигация по вкладкам
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Фильтры задач и подразделений (включая фильтр по статусу AI департамента)
  ['filter-search', 'filter-department', 'filter-status', 'filter-ai-stage', 'filter-criticality'].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', renderTasksTable);
    el.addEventListener('change', renderTasksTable);
  });

  // Кнопки «💾 Сохранить изменения» для администратора (синхронизируют данные у всех пользователей на любых устройствах)
  ['admin-save-top-btn', 'admin-save-tasks-btn', 'admin-save-panel-btn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', saveAllAdminChanges);
    }
  });

  // Кнопка создания задачи (доступна только администратору)
  document.getElementById('add-task-btn').addEventListener('click', () => {
    if (!isCurrentUserAdmin()) return;
    openTaskModal(null);
  });
  document.getElementById('modal-close-btn').addEventListener('click', closeTaskModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeTaskModal);

  // Сохранение задачи (POST / PUT — только для администратора)
  document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!isCurrentUserAdmin()) return;
    const id = document.getElementById('task-id').value;
    const body = {
      id: id ? Number(id) : undefined,
      department: document.getElementById('task-department').value,
      task_number: document.getElementById('task-number').value,
      title: document.getElementById('task-title-input').value,
      due_date: document.getElementById('task-due-date').value || null,
      due_text: document.getElementById('task-due-text').value || null,
      status: document.getElementById('task-status').value,
      ai_stage: document.getElementById('task-ai-stage').value,
      criticality: document.getElementById('task-criticality').value,
      fact_info: document.getElementById('task-fact').value || null,
      note: document.getElementById('task-note').value || null
    };

    try {
      await apiRequest('/api/tasks', {
        method: id ? 'PUT' : 'POST',
        body: JSON.stringify(body)
      });
      closeTaskModal();
      await loadAllData();
      showToast(id ? t('toastTaskUpdated') : t('toastTaskCreated'));
    } catch (err) {
      showToast(err.message);
    }
  });

  // Делегирование событий в таблице задач и подразделений (смена критичности, статуса подразделения и статуса AI департамента ТОЛЬКО администратором)
  async function handleInlineAdminChange(e) {
    if (!isCurrentUserAdmin()) return;
    const critSelect = e.target.closest('[data-crit-task-id]');
    if (critSelect) {
      const id = Number(critSelect.dataset.critTaskId);
      try {
        await apiRequest('/api/tasks', {
          method: 'PATCH',
          body: JSON.stringify({ id, criticality: critSelect.value })
        });
        await loadAllData();
        showToast(t('toastCritUpdated'));
      } catch (err) {
        showToast(err.message);
      }
      return;
    }

    const statusSelect = e.target.closest('[data-status-task-id]');
    if (statusSelect) {
      const id = Number(statusSelect.dataset.statusTaskId);
      try {
        await apiRequest('/api/tasks', {
          method: 'PATCH',
          body: JSON.stringify({ id, status: statusSelect.value })
        });
        await loadAllData();
        showToast(t('toastTaskUpdated'));
      } catch (err) {
        showToast(err.message);
      }
      return;
    }

    const aiStageSelect = e.target.closest('[data-ai-stage-task-id]');
    if (aiStageSelect) {
      const id = Number(aiStageSelect.dataset.aiStageTaskId);
      const nextStage = aiStageSelect.value;
      try {
        await apiRequest('/api/tasks', {
          method: 'PATCH',
          body: JSON.stringify({ id, ai_stage: nextStage })
        });
        await loadAllData();
        showToast(t('toastTaskUpdated'));
      } catch (err) {
        showToast(err.message);
      }
    }
  }

  document.getElementById('tasks-tbody').addEventListener('change', handleInlineAdminChange);

  document.getElementById('tasks-tbody').addEventListener('click', async (e) => {
    if (!isCurrentUserAdmin()) return;
    const editBtn = e.target.closest('[data-edit-id]');
    if (editBtn) {
      const task = state.tasks.find((t) => t.id === Number(editBtn.dataset.editId));
      if (task) openTaskModal(task);
      return;
    }

    const delBtn = e.target.closest('[data-delete-id]');
    if (delBtn) {
      const id = Number(delBtn.dataset.deleteId);
      if (!confirm(t('confirmDelete'))) return;
      try {
        await apiRequest(`/api/tasks?id=${id}`, { method: 'DELETE' });
        await loadAllData();
        showToast(t('toastTaskDeleted'));
      } catch (err) {
        showToast(err.message);
      }
    }
  });

  // Делегирование быстрой смены критичности во вкладке «Админка»
  document.getElementById('admin-quick-criticality-list').addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-quick-crit]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const criticality = btn.dataset.quickCrit;

    try {
      await apiRequest('/api/tasks', {
        method: 'PATCH',
        body: JSON.stringify({ id, criticality })
      });
      await loadAllData();
      showToast(t('toastCritUpdated'));
    } catch (err) {
      showToast(err.message);
    }
  });

  // Проверка сохранённой сессии при загрузке страницы и мгновенное восстановление темы роли
  if (state.token) {
    const savedTheme = localStorage.getItem('sqb_ai_role_theme');
    if (savedTheme === 'admin') {
      document.body.classList.add('admin-theme');
    } else if (savedTheme === 'user') {
      document.body.classList.add('user-theme');
    }
    try {
      const me = await apiRequest('/api/auth');
      state.user = me.user;
      updateAuthUI();
      await loadAllData();
    } catch (_) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('sqb_ai_jwt');
      localStorage.removeItem('sqb_ai_role_theme');
      updateAuthUI();
    }
  } else {
    updateAuthUI();
  }

  // Фоновая автоматическая синхронизация на всех устройствах (телефон, планшет, ноутбук):
  // как только администратор нажимает «💾 Сохранить изменения», данные автоматически обновляются у всех открытых пользователей
  const syncFromCloudIfChanged = async () => {
    if (!state.token || !state.user) return;
    if (isCurrentUserAdmin() && state.hasUnsavedChanges) return;
    const prevStamp = state.lastModifiedAt;
    const prevTasksRaw = localStorage.getItem('sqb_local_tasks') || '';
    const res = await pullCloudState();
    const nextTasksRaw = localStorage.getItem('sqb_local_tasks') || '';
    if (res.updated || state.lastModifiedAt !== prevStamp || nextTasksRaw !== prevTasksRaw) {
      if (nextTasksRaw) {
        try {
          state.tasks = JSON.parse(nextTasksRaw);
        } catch (_) {}
      }
      renderDashboard();
      renderTasksTable();
      renderAdminTab();
    }
  };

  setInterval(syncFromCloudIfChanged, 6000);
  window.addEventListener('focus', syncFromCloudIfChanged);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncFromCloudIfChanged();
    }
  });
});
