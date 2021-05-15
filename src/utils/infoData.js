/* eslint-disable max-len */
/***************************** Главная страница *****************************/
export const labelTexts = ['ОБУЧАЕМ', 'ПРАКТИКЕ'];

export const sloganText =
    'В итоге вы освоите мировые практики последних лет, необходимые для качественной и эффективной работы психологом.';

export const urlsLinks = [
    {
        path: '/education#long_courses',
        children: 'Долгосрочные программы',
    },
    {
        path: '/education#short_courses',
        children: 'Краткосрочные курсы',
    },
    {
        path: '/tacos',
        children: 'Лекции и вебинары ',
    },
];

export const cardsData = [
    {
        title: 'Осваивать новые практики',
        text:
            'Благодаря многолетнему опыту преподавателей и участию в практических занятиях вы отточите своё мастерство и улучшите психологическое зрение',
    },
    {
        title: 'Приобщаться к мировому опыту экспертов',
        text:
            'Как и все наши студенты, вы получите практический опыт, который подтвержден последними мировыми исследования в психологии ',
    },
    {
        title: 'Узнавать последние тенденции',
        text:
            'Вы будете учиться по авторским программам, которые постоянно обновляются с учетом новых реалий мира и изменяющихся запросов человека',
    },
];

export const accordionData = [
    {
        id: 0,
        heading: 'Гештальт-терапия',
        content: [
            'Универсальный метод работы с любыми запросами клиентов, эффективен как для индивидуальных, так и для групповых форматов работы.',
            'Курс 1-ой ступени включает теорию и методы гештальт-терапии, навыки гештальт-диагностики, принципы работы в обучающих и терапевтических группах. ',
            'Курс 2-ой ступени дает практический опыт и формирует терапевтический стиль.',
        ],
        steps: [
            {
                path: '/long_course/0#step_0',
                text: '1-я ступень',
            },
            {
                path: '/long_course/0#step_1',
                text: '2-я ступень',
            },
            {
                path: '/supervision#s_0',
                text: 'супервизия',
            },
        ],
    },
    {
        id: 1,
        heading: 'Экзистенциальный анализ',
        content: [
            'Экзистенциальный анализ и логотерапия — направление современной психотерапии, популярной в европейских странах, в Великобритании, а также на американском континенте. ',
            'Методы ЭА активно применяют в современной психологии, психотерапии, менеджменте, теории переговоров и медиации конфликтов. ',
            'Обучение проводится в партнерстве с GLE-international — международным обществом экзистенциального анализа и логотерапии.',
        ],
        steps: [
            {
                path: '/long_course/1#step_0',
                text: 'базовый курс',
            },
            {
                path: '/long_course/1#step_1',
                text: 'клинический курс',
            },
            {
                path: '/supervision#s_2',
                text: 'супервизия (эа)',
            },
            {
                path: '/supervision#s_1',
                text: 'интервизия (эа)',
            },
        ],
    },
    {
        id: 2,
        heading: 'Психологическое консультирование',
        content: [
            'Практический курс. Программа сфокусирована на формировании системных и фундаментальных практических знаний о профессии психолога-консультанта',
            'Подробно разбирается каждый этап психологической работы. Значительное время уделено развитию практических навыков специалиста.',
            'По окончании курса можно сразу начинать практику',
        ],
        steps: [
            {
                path: '/long_course/2#step_0',
                text: 'базовый курс',
            },
            {
                path: '/long_course/2#step_1',
                text: 'супервизия',
            },
        ],
    },
];

/** ---------------------------------------------------------------------- **/

export const accordionSpec = [
    {
        id: 0,
        heading: 'Группы самопознания',
        content: [],
        steps: [],
    },
    {
        id: 1,
        heading: 'Терапевтические группы',
        content: [],
        steps: [],
    },
    {
        id: 2,
        heading: 'Консультирование',
        content: [],
        steps: [],
    },
];

/***************************** Страница О нас *****************************/
export const cardsTeamData = [
    {
        name: 'Ирина Исаева',
        avatar: 'irina_isaeva.jpg',
        about: [
            'Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой, 2-ой и 3 ей ступеней, супервизор.',
            'Практикующий психолог с 23-летним стажем. \n' +
            'Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года. 11-летний стаж управленческой деятельности. \n' +
            '20-летний опыт работы в сфере образования.',
            'Психолог-консультант Совета при Президенте РФ. Выпустила более 100 групп в гештальт-подходе 1-ой, 2-ой, 3-ей ступени.',

            // `Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой, 2 и 3-ой ступени, супервизор, 23-летний стаж психологической практики. Опыт работы психологом в образовании и соц
            // стуктурах. 11-лет управленческого стажа. 20-летний опыт работы в сфере образования.`,
            // `Тренер образовательных программ по гештальт-терапии 1-ой, 2-ой и 3-ей ступеней с 2007 года.`,
            // `Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант Совета при Президенте РФ`,
        ],
    },
    {
        name: 'Елена Матвийчук',
        avatar: 'matveichyk.jpg',
        about: [
            'Индивидуальная и групповая работа в гештальт подходе с 2005 г.',
            'Дополнительное образование:',
            `Программа МИГИП-ГАТЛА 2006-2009 гг`,
            'Программа Французкого института гештальта (Жан -Мари Робин) для гештальт терапевтов и супервизоров 2006 -2010 гг',
            `Семинары Питера Филиппсона ( гештальт центр Манчестера) 2016 -2020 гг`,
            `В настоящее время обучение в международной Российско-Итальянской программе (Маргерита Спаньола Лобб) Психопатология и развитие в парадигме гештальт-терапии: клиника поля"`,
        ],
    },
    {
        name: 'Татьяна Руданец',
        avatar: 'tat_rud.jpg',
        about: [
            'Психолог-практик с 11-летним стажем, мультипрофильный психотерапевт.',
            'Экзистенциальный аналитик (GLE International, Австрия), гештальт-терапевт, системный семейный терапевт. Ведущая терапевтических групп и групп самопознания.',
            'Член ассоциации экзистенциально-аналитических психологов и психотерапевтов. Эксперт по вопросам межличностных отношений, травм и кризисов, самореализации и самооценки.',
        ],
    },
    {
        name: 'Светлана Мардоян',
        avatar: 'mar_sv.jpeg',
        about: [
            'Тренер образовательных программ GLE-International. Окончила Ереванский Медицинский Институт, ординатуру по психотерапии в РМАПО.',
            'Психотерапевт, экзистенциальный аналитик (диплом психотерапевта GLE-International).',
            'Член совета тренеров Ассоциации экзистенциально-аналитических психологов и психотерапевтов, тренер, \n' +
            'супервизор долгосрочной образовательной программы по экзистенциальному анализу и логотерапии GLE-International.',
        ],
    },
    {
        name: 'Евгения Кольцова',
        avatar: 'kol_ev2.jpg',
        about: [
            'Сертифицированный экзистенциальный психотерапевт (GLE International, Австрия).',
            ' Психолог-практик с 11-летним стажем. Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, \n' +
            'ко-тренер образовательных программ GLE-International, \n' +
            'ведущая групп самопознания, автор практических лекционных курсов, психологических программ для подростков и взрослых.\n',
        ],
    },
    {
        name: 'Елена Станковская',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-консультант (GLE International, Австрия), транзактный аналитик.',
            'Кандидат психологических наук, кандидат на соискание звания транзактного аналитика в области психотерапии, доцент и преподаватель НИУ ВШЭ на факультете Психологии.',
            'Более 12 лет ведет индивидуальную и групповую работу с клиентами, более 10 лет преподает психологическое консультирование. Автор книги «Транзактный анализ, 7 лекций для проекта «Магистерия» и ряда научных и научно-практических публикаций.',
        ],
    },
    /* {
        name: 'Татьяна Шохман ',
        avatar: 'elena_stats.jpg',
        about: [
        ]
    }, */
    {
        name: 'Анастасия Туркина',
        avatar: 'anastasia_turkina.jpg',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог.',
            'Окончила МГУ, кафедру нейро- и патопсихологии; Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, ежегодный участник международных конгрессов в Германии и Австрии. ',
            'Переводчик, редактор книг и статей.',
        ],
    },
    /*{
        name: 'Анастасия Туркина',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог.',
            'Окончила МГУ, кафедру нейро- и патопсихологии; Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, ежегодный участник международных конгрессов в Германии и Австрии. ',
            'Переводчик, редактор книг и статей.'
        ]
    }, */
    /*{
        name: 'Элона Лавренова',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог',
        ]
    },*/
    {
        name: 'Татьяна Старшинова',
        avatar: 'tat_star.jpg',
        about: [
            'Психолог-практик с 10-летним стажем, гештальт-терапевт, супервизор.',
            'Работает с трудностями, связанными с построением отношений (детско-родительских, партнерских), с самоотношением (ранящая самокритика, потеря себя, своих желаний) и самореализацией. Помогает разобраться со сложными переживаниями: вина, стыд, злость, ревность, зависть, тревога, а так же переживаниями, связанными с расставанием и утратой.\n',
        ],
    },
    /* {
        name: 'Татьяна Шохман ',
        avatar: 'elena_stats.jpg',
        about: [
        ]
    }, */
];

/** ---------------------------------------------------------------------- **/

/***************************** Страница Образование *****************************/

export const shortCourses = [
    {
        id: '0',
        title: 'Зависимость и созависимость',
    },
    {
        id: '1',
        title: 'Психосоматика',
    },
    {
        id: '2',
        title: 'Феноменология',
    },
    {
        id: '3',
        title: 'Хорошие контракты',
    },
];

export const newsCards = [
    {
        id: 0,
        type: 'Краткосрочный курс',
        title: 'Хорошие контракты',
        start: '03.04.2021',
        duration: '6 часов',
        author: 'Елена Станковская',
        document: 'Диплом',
        cost: '5 000 рублей',
        path: '/education/short_course/3',
    },
    {
        id: 1,
        type: 'Краткосрочный курс',
        title: 'Феноменология: искусство интересоваться клиентами',
        start: '10.04.2021',
        duration: '6 часов',
        author: 'Елена Станковская',
        document: 'Диплом',
        cost: '5 000 рублей',
        path: '/education/short_course/2',
    },
    {
        id: 2,
        type: 'Долгосрочная программа',
        title: 'Гештальт-терапия 1-я  ступень',
        start: '03.04.2021',
        duration: '9 двухдневных модулей',
        author: 'Ирина Исаева',
        document: 'Сертификат гештальт-терапии 1-ой ступени',
        cost: '9 000 рублей за модуль',
        path: '/education/long_course/0#step_0',
    },
    {
        id: 3,
        type: 'Долгосрочная программа',
        title: 'Гештальт-терапия 2-я ступень',
        start: '05.02.2022',
        duration: '21 двухдневный модуль',
        author: 'Ирина Исаева',
        document: 'Сертификат гештальт-терапии 2-ой ступени\n' + 'Диплом о переподготовке\n',
        cost: '10 000 рублей за модуль',
        path: '/education/long_course/0#step_1',
    },
];

export const supervisionCards = [
    {
        id: 0,
        title: 'Супервизии',
        subtitle: 'мультипрофильный формат',
        author: 'Ирина Исаева',
        timetable: 'по пятницам с 13:00 до 16:00',
        regularity: 'регулярно, 2 раза в месяц',
        desc:
            'Мультипрофильный формат дает более разностороннюю обратную связь. Участники видят, как один и тот же случай может быть рассмотрен в разных подходах консультирования и психотерапии',
        cost: '2 500 рублей',
    },
    {
        id: 1,
        title: 'Интервизии',
        subtitle: 'для начинающих специалистов в экзистенциальном подходе',
        author: 'Евгения Кольцова',
        timetable: 'по понедельникам с 19:00 до 21:00',
        regularity: 'регулярно, каждую неделю',
        desc:
            'Через супервизии и интервизии можно быстро вырасти как профессионал. Программа интервизий доступна и особенно результативна для специалистов, начинающих практиков. В безопасной атмосфере коллег можно получить поддержку и обратную связь на кейс, конкретную трудность  или практику в целом',
        cost: '500 рублей (без кейса) / 1000 рублей (с собственным кейсом)',
    },
    {
        id: 2,
        title: 'Супервизия',
        subtitle: 'для начинающих и практикующх специалистов \n' + 'в экзистенциальном подходе\n',
        author: 'Светлана Мардоян',
        timetable: 'По средам с марта 2021',
        regularity: 'Раз в две недели с 17-19 часов',
        desc:
            'Супервизия в рамках подхода экзистенцально-аналитической психотерапии (GLE-International), проводит сертифицированный супервизор и тренер образовательных программ GLE.\n' +
            'Для психологов-практиков данного направления, а также для тех, кто только начинает свое обучение методу.\n',
        cost: '2 000 рублей',
    },
];

export const courseOptions = [
    { value: 'Гештальт 1-я ступень', label: 'Гештальт 1-я ступень', path: '/long_course/0#step_0' },
    { value: 'Гештальт 2-я ступень', label: 'Гештальт 2-я ступень', path: '/long_course/0#step_1' },
    { value: 'Гештальт супервизия', label: 'Гештальт супервизия', path: '/supervision#s_0' },
    {
        value: 'Экзистенциальный анализ базовый курс',
        label: 'Экзистенциальный анализ базовый курс',
        path: '/long_course/1#step_0',
    },
    {
        value: 'Экзистенциальный анализ клинический курс',
        label: 'Экзистенциальный анализ клинический курс',
        path: '/long_course/1#step_1',
    },
    {
        value: 'Экзистенциальный анализ супервизия',
        label: 'Экзистенциальный анализ супервизия',
        path: '/supervision#s_2',
    },
    {
        value: 'Экзистенциальный анализ интервизия',
        label: 'Экзистенциальный анализ интервизия',
        path: '/supervision#s_1',
    },
    {
        value: 'Психологическое консультирование базовый курс',
        label: 'Психологическое консультирование базовый курс',
        path: '/long_course/2#step_0',
    },
    {
        value: 'Психологическое консультирование супервизия',
        label: 'Психологическое консультирование супервизия',
        path: '/long_course/2#step_1',
    },

    { value: 'Зависимость и созависимость', label: 'Зависимость и созависимость' },
    {
        value: 'Психологическая работа с психосоматическими запросами',
        label: 'Психологическая работа с психосоматическими запросами',
    },
    {
        value: 'Феноменология: искусство интересоваться клиентами',
        label: 'Феноменология: искусство интересоваться клиентами',
    },
    { value: 'Хорошие контракты: участие', label: 'Хорошие контракты: участие' },
    { value: 'Хорошие контракты: дополнительная опция', label: 'Хорошие контракты' },
];

export const payFormOptions = [
    {
        id: 0,
        title: 'Зависимость и созависимость',
        amount: '9000',
        desc:
            'Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов гуманистической психотерапии, выпускников курса гештальт-терапии 2-ой ступени, а также всех интересующихся темами зависимости и созависимости.',
    },
    {
        id: 1,
        title: 'Психологическая работа с психосоматическими запросами',
        amount: '9000',
        desc:
            ' Программа рассчитана на медицинских специалистов и психологов-практиков с базовой\n' +
            '                                подготовкой в одном из методов гуманистической психотерапии.',
    },
    {
        id: 2,
        title: 'Феноменология: искусство интересоваться клиентами',
        amount: '3500',
        desc:
            'Вебинар ориентирован на психологов, уже начавших практику и желающих привнести в неё еще\n' +
            '                                больше культуры уважения к клиенту и точности в работе. В результате вы получите навыки\n' +
            '                                заинтересованного исследования внутреннего мира ваших клиентов, что сделает ваши\n' +
            '                                интервенции эффективными.',
    },
    {
        id: 3,
        title: 'Хорошие контракты: участие',
        amount: '5000',
        desc:
            'Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов\n' +
            '                                гуманистической психотерапии.',
    },
    {
        id: 4,
        title: 'Хорошие контракты: дополнительная опция',
        amount: '3500',
        desc:
            ' Возможность обсудить свои случаи из практики и задать конкретные вопросы по кейсам в\n' +
            '                                формате малой группы (до 10 человек). В течение 3-х дополнительных часов участники\n' +
            '                                предоставляют свои случаи и конкретные вопросы, ведущая прокомментирует кейсы и даст\n' +
            '                                развивающую обратную связь.',
    },
];
