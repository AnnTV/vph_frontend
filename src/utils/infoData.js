/* eslint-disable max-len */
/***************************** Главная страница *****************************/
export const labelTexts = [
    'ЗАЧЕМ',
    'УЧИТЬСЯ У НАС'
];

export const sloganText = 'В итоге вы приобретете не отвлеченные знания, а освоите мировые практики последних лет, необходимые хорошему психологу в работе. ';

export const urlsLinks = [
    {
        path: '/education#long_courses',
        children: 'Долгосрочные программы'
    },
    {
        path: '/education#short_courses',
        children: 'Краткосрочные курсы'
    },
    {
        path: '/tacos',
        children: 'Лекции и вебинары '
    },
];

export const cardsData = [
    {
        title: 'Осваивать новые практики',
        text: 'Благодаря многолетнему опыту преподавателей и участию в практических занятиях вы отточите своё мастерство и улучшите психологическое зрение',
    },
    {
        title: 'Приобщитесь к мировому опыту экспертов',
        text: 'Как и все наши студенты, вы получите практический опыт, который подтвержден последними мировыми исследования в психологии ',
    },
    {
        title: 'Узнавать последние тенденции',
        text: 'Вы будете учиться по авторским программам, которые постоянно обновляются с учетом новых реалий мира и изменяющихся запросов человека',
    },
];

export const accordionData = [
    {
        id: 0,
        heading: 'Гештальт-терапия',
        content: [
            'Универсальный метод работы с любыми запросами клиентов, эффективен как для индивидуальных, так и для групповых форматов работы.',
            'Курс 1-ой ступени включает теорию и методы гештальт-терапии, навыки гештальт-диагностики, принципы работы в обучающих и терапевтических группах. ',
            'Курс 2-ой ступени дает практический опыт и формирует терапевтический стиль.'
        ],
        steps: [
            {
                id: '0',
                text: '1-я ступень',
            },
            {
                id: '1',
                text: '2-я ступень',
            },
            {
                id: '2',
                text: 'супервизия',
            }
        ]
    },
    {
        id: 1,
        heading: 'Экзистенциальный анализ',
        content: [
            'Экзистенциальный анализ и логотерапия — направление современной психотерапии, популярной в европейских странах, в Великобритании, а также на американском континенте. ',
            'Методы ЭА активно применяют в современной психологии, психотерапии, менеджменте, теории переговоров и медиации конфликтов. ',
            'Обучение проводится в партнерстве с GLE-international — международным обществом экзистенциального анализа и логотерапии.'
        ],
        steps: [
            {
                id: '0',
                text: 'базовый курс',
            },
            {
                id: '1',
                text: 'клинический курс',
            },
            {
                id: '2',
                text: 'супервизия (эа)',
            },
            {
                id: '3',
                text: 'интервизия (эа)',
            }
        ]
    },
    {
        id: 2,
        heading: 'Психологическое консультирование',
        content: [
            'Практический курс. Программа сфокусирована на формировании системных и фундаментальных практических знаний о профессии психолога-консультанта',
            'Подробно разбирается каждый этап психологической работы. Значительное время уделено развитию практических навыков специалиста.',
            'По окончании курса можно сразу начинать практику'
        ],
        steps: [
            {
                id: '0',
                text: 'базовый курс',
            },
            {
                id: '1',
                text: 'супервизия',
            },
        ]
    }
];

/** ---------------------------------------------------------------------- **/

/***************************** Страница О нас *****************************/
export const cardsTeamData = [
    {
        name: 'Ирина Исаева',
        avatar: 'irina_isaeva.jpg',
        about: [
            'Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой, 2-ой и 3 ей ступени, супервизор.',
            'Практикующий психолог с 23-летним стажем. \n' +
            'Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года. 11-летний стаж управленческой деятельности. \n' +
            '20-летний опыт работы в сфере образования.',
            'Психолог-консультант Совета при Президенте РФ. Выпустила более 100 групп в гештальт-подходе 1-ой, 2-ой, 3-ей ступени.'
        ]
    },
    {
        name: 'Татьяна Руданец',
        avatar: 'tat_rud.jpg',
        about: [
            'Психолог-практик с 11-летним стажем, мультипрофильный психотерапевт.',
            'Экзистенциальный аналитик (GLE International, Австрия), гештальт-терапевт, системный семейный терапевт. Ведущая терапевтических групп и групп самопознания.',
            'Член ассоциации экзистенциально-аналитических психологов и психотерапевтов. Эксперт по вопросам межличностных отношений, травм и кризисов, самореализации и самооценки.'
        ]
    },
    {
        name: 'Мардоян Светлана',
        avatar: 'mar_sv.jpeg',
        about: [

        ]
    },
    {
        name: 'Евгения Кольцова',
        avatar: 'kol_ev.jpg',
        about: [
            'Сертифицированный экзистенциальный психотерапевт (GLE International, Австрия).',
            ' Психолог-практик с 11-летним стажем. Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, \n' +
            'ко-тренер образовательных программ GLE-International, \n' +
            'ведущая групп самопознания, автор практических лекционных курсов, психологических программ для подростков и взрослых.\n'
        ]
    },
    {
        name: 'Елена Станковская',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-консультант (GLE International, Австрия), транзактный аналитик.',
            'Кандидат психологических наук, кандидат на соискание звания транзактного аналитика в области психотерапии, доцент и преподаватель НИУ ВШЭ на факультете Психологии.',
            'Более 12 лет ведет индивидуальную и групповую работу с клиентами, более 10 лет преподает психологическое консультирование. Автор книги «Транзактный анализ, 7 лекций для проекта «Магистерия» и ряда научных и научно-практических публикаций.'
        ]
    },
    /* {
        name: 'Татьяна Шохман ',
        avatar: 'elena_stats.jpg',
        about: [
        ]
    }, */
    {
        name: 'Анастасия Туркина',
        avatar: '',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог.',
            'Окончила МГУ, кафедру нейро- и патопсихологии; Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, ежегодный участник международных конгрессов в Германии и Австрии. ',
            'Переводчик, редактор книг и статей.'
        ]
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
    },
    {
        name: 'Татьяна Старшинова',
        avatar: 'tat_star.jpg',
        about: [
        ]
    }, */
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
    }
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
        path: '/education/short_course/3'
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
        path: '/education/short_course/2'
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
        path: '/education/long_course/0#step_0'
    },
    {
        id: 3,
        type: 'Долгосрочная программа',
        title: 'Гештальт-терапия 2-я ступень',
        start: '05.02.2022',
        duration: '21 двухдневный модуль',
        author: 'Ирина Исаева',
        document: 'Сертификат гештальт-терапии 2-ой ступени\n' +
            'Диплом о переподготовке\n',
        cost: '10 000 рублей за модуль',
        path: '/education/long_course/0#step_1'
    },
]
