/* eslint-disable max-len */
import React from 'react';
import { Devider } from '../../components/Devider/Devider';
import './ShortCourses.css';
import { useParams } from 'react-router';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { BlockSubTitle } from '../../components/BlockSubTitle/BlockSubTitle';
import { CourseForm } from '../../components/CourseForm/CourseForm';
import { courseOptions, TYPE_SHORT } from '../../utils/infoData';

export const ShortCourses = () => {
    let { id } = useParams();

    const getCourse = (id) => {
        const sortCource = courseOptions
        .filter(i => i.type === TYPE_SHORT)
        .find(i => i.id === id);
        return sortCource ? sortCource.value : '';
    };

    return (
        <div className={'Page'}>
            <ShortCourse id={id}/>

            <BlockTitle children={'Записаться на курс'} className={'Page__block'}/>
            <article className={'Page__block Course_contact-block'}>
                <section className={'Course_contact-block__form'}>
                    <CourseForm course={getCourse(id)}/>
                </section>
            </article>
            <Devider className={'Page__devider'}/>
        </div>
    );
};

const ShortCourse = ({ ...props }) => {
    switch (props.id) {
        case '0':
            return (
                <>
                    <BlockTitle children={'Зависимость и созависимость'} className={'Page__block'}/>
                    <BlockSubTitle children={'Октябрь — Декабрь (2020-2021)'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов
                                гуманистической психотерапии, выпускников курса гештальт-терапии 2-ой ступени, а также
                                всех интересующихся темами зависимости и созависимости.
                            </p>
                            <p>
                                Помимо лекарственной зависимости, наркомании и других химических форм зависимости
                                сегодня под зависимостью понимают также поведенческие формы: интернет-зависимость,
                                игроманию, шопоголию, переедание, сексуальные формы зависимости и многие другие.{' '}
                            </p>
                            <p>
                                Под созавимостью часто понимают эмоциональную зависимость от другого человека. Программа
                                дает подробный разбор основных форм завимости и созависимости, с которыми часто
                                обращаются к психотерапевту.
                            </p>
                        </div>
                    </div>

                    <BlockSubTitle
                        children={'Диплом о повышении квалификации  144 часа   9 двухдневных модулей'}
                        className={'Page__block'}
                        level={1}
                    />

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span className={'ShortCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>теория и практика работы с темой зависимости и созависимости</li>
                                <li>
                                    взаимодействие психотерапевта и медицинских специалистов, специалистов
                                    реабилитационных центров
                                </li>
                                <li>
                                    осознавание и работы с собственными паттернами зависимого и созависимого
                                    поведения; восстановления телесных ощущений, состояний, чувств, эмоций; опыт
                                    использования их в работе с клиентом
                                </li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Психотерапевтический опыт</span>
                            <ul>
                                <li>супервизия на протяжении всего обучения</li>
                                <li>личный терапевтический опыт работы с разными видами зависимости и созависимости</li>
                                <li>проработка трудных кейсов зависимости и созависимости</li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Тренинговые занятия модуля</span>
                            <ul>
                                <li>индивидуальные сессии участников группы</li>
                                <li>обсуждения затруднений в психотерапевтической работе каждой темы через кейс-метод
                                </li>
                                <li>
                                    терапевтические упражнения для развития навыков работы с запросом клиента и развитие
                                    собственного психотерапевтического инструментария
                                </li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'ShortCourse__block-info__cost'}>9 000 рублей</span>
                            </div>
                            <span className={'ShortCourse__block-info__ps'}>
                                *Сертификация включает обучение на 9 модулях и сертификационный экзамен
                            </span>
                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/irina_isaeva.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Ирина Исаева, терапевт</span>
                            <Devider width={240}/>

                            <p>
                                Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор,
                                23-летний стаж психологической практики. 11-лет управленческого стажа. 20-летний опыт
                                работы в сфере образования.
                            </p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант
                                Совета при Президенте РФ.
                            </p>
                        </div>
                    </div>
                </>
            );
        case '1':
            return (
                <>
                    <BlockTitle
                        children={'Психологическая работа с психосоматическими запросами'}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'Ноябрь — Октябрь (2020-2021)'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Программа рассчитана на медицинских специалистов и психологов-практиков с базовой
                                подготовкой в одном из методов гуманистической психотерапии.
                            </p>
                            <p>
                                Психосоматические (соматоморфные по МКБ-10) расстройства составляют по некоторым оценкам
                                около 1/5 всех запросов. Биопсихосоциальная модель предполагает мультидисциплинарное
                                сопровождение командой специалистов, в которую включен психолог.
                            </p>
                            <p>
                                Медучреждение, куда с жалобами обращается пациент, не всегда может ему это обеспечить. И
                                тогда пациенты обращаются к частно-практикующим специалистам.
                            </p>
                        </div>
                    </div>

                    <BlockSubTitle
                        children={'Диплом о повышении квалификации 144 часа   9 двухдневных модулей'}
                        className={'Page__block'}
                        level={1}
                    />

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span className={'ShortCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>теория и практика работы с психосоматическими запросами</li>
                                <li>взаимодействие психотерапевта и медицинских специалистов</li>
                                <li>
                                    осознавание и обработки собственных паттернов зависимого и созависимого
                                    поведения; опыт восстановления телесных ощущений, состояний, чувств, эмоций, навык
                                    использования их в работе с клиентом
                                </li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Психотерапевтический опыт</span>
                            <ul>
                                <li>супервизия на протяжении всего обучения</li>
                                <li>личный терапевтический опыт работы с разными видами психосоматических запросов</li>
                                <li>проработка трудных кейсов психосоматических запросов через кейс-метод</li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Тренинговые занятия модуля</span>
                            <ul>
                                <li>индивидуальные сессии участников группы</li>
                                <li>обсуждения затруднений в психотерапевтической работе каждой темы через кейс-метод
                                </li>
                                <li>
                                    терапевтические упражнения для развития навыков работы с запросом клиента и развитие
                                    собственного психотерапевтического инструментария
                                </li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'ShortCourse__block-info__cost'}>10 000 рублей</span>
                            </div>
                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/irina_isaeva.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Ирина Исаева</span>
                            <Devider width={240}/>

                            <p>
                                Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор,
                                23-летний стаж психологической практики. 11-лет управленческого стажа. 20-летний опыт
                                работы в сфере образования.
                            </p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>
                                Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант
                                Совета при Президенте РФ.
                            </p>
                        </div>
                    </div>
                </>
            );
        case '2':
            return (
                <>
                    <BlockTitle
                        children={'Феноменология: искусство интересоваться клиентами'}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'10 Апреля 12:00 — 19:00 онлайн'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Вебинар ориентирован на психологов, уже начавших практику и желающих привнести в неё еще
                                больше культуры уважения к клиенту и точности в работе. В результате вы получите навыки
                                заинтересованного исследования внутреннего мира ваших клиентов, что сделает ваши
                                интервенции эффективными.
                            </p>
                            <p>
                                Феноменологический проект в психотерапии — это попытка слышать и понимать клиента в его
                                внутренней правде. «Распаковывать» субъективные переживания, делать их подробными и
                                видимыми — в первую очередь, для самого человека.{' '}
                            </p>
                            <p>
                                По сути, это искусство интересоваться внутренним миром клиента так, чтобы он в большей
                                степени становился собой.
                            </p>
                        </div>
                    </div>

                    <div className={'Page__block'}>
                        <BlockSubTitle children={'6 часов  Теория и отработка навыков'} level={1}/>
                        <BlockSubTitle children={'Опция: разбор кейсов участников'} level={1}/>
                    </div>

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span className={'ShortCourse__block-info__title'}>Преимущества для работы с клиентом</span>
                            <ul>
                                <li>феноменологическое исследование развивает способность клиента к самонаблюдению,</li>
                                <li>повышает самоценность,</li>
                                <li>
                                    помогает увлечься тем, что происходит у него внутри – собственными мыслями,
                                    чувствами, ощущениями, решениями,
                                </li>
                                <li>развивает способность понимать себя и других.</li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Преимущества для специалиста</span>
                            <p>
                                феноменология даёт возможность отставлять на время теории и по-настоящему слышать своих
                                клиентов. Благодаря этому в работе появляется точность, вдохновляющая новизна и глубина
                                контакта.
                            </p>
                            <span className={'ShortCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>
                                    вы познакомитесь с пониманием феноменологии в экзистенциальном анализе А. Лэнгле и
                                    интегративной психотерапии Р. Эрскина,
                                </li>
                                <li>
                                    узнаете, что представляет собой «феноменологическая установка», и как она может
                                    обогатить вашу работу с клиентами,
                                </li>
                                <li>поймёте преимущества и ограничения этого способа работы с клиентами.</li>
                            </ul>
                            <p>
                                В рамках мастер-класса предусмотрена демонстрация феноменологического исследования
                                ведущей и отработка практических навыков участниками.
                            </p>
                            <span className={'ShortCourse__block-info__title'}>Дополнительная опция</span>
                            <p>
                                Возможность обсудить свои случаи из практики и задать конкретные вопросы по кейсам в
                                формате малой группы (до 10 человек). В течение 3-х дополнительных часов участники
                                предоставляют свои случаи и конкретные вопросы, ведущая прокомментирует кейсы и даст
                                развивающую обратную связь.
                            </p>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость участия:</span>
                                <span className={'ShortCourse__block-info__cost'}>5 000 рублей</span>
                            </div>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Дополнительная опция:</span>
                                <span className={'ShortCourse__block-info__cost'}>3 500 рублей</span>
                            </div>
                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/elena_stats.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Елена Станковская</span>
                            <Devider width={240}/>

                            <p>Психолог-консультант</p>
                            <p>(GLE International, Австрия), транзактный аналитик</p>
                            <p>
                                Кандидат психологических наук, кандидат на соискание звания транзактного аналитика в
                                области психотерапии, доцент НИУ ВШЭ. Более 12 лет ведет индивидуальную и групповую
                                работу с клиентами, более 10 лет преподает психологическое консультирование.
                            </p>
                            <p>
                                Автор книги «Транзактный анализ. 7 лекций для проекта Магистерия» и ряда научных и
                                научно-практических публикаций.
                            </p>
                        </div>
                    </div>
                </>
            );
        case '3':
            return (
                <>
                    <BlockTitle children={'Хорошие контракты'} className={'Page__block'}/>
                    <BlockSubTitle children={'03 Апреля 12:00 — 19:00 онлайн'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов
                                гуманистической психотерапии.
                            </p>
                            <p>
                                Мастер-класс построен таким образом, чтобы предоставить вам инструменты вне зависимости
                                от подхода, в котором вы работаете.
                            </p>
                            <p>
                                С 1960-ых годов психологи стали заключать контракты – открыто договариваться с клиентами
                                о целях совместной работы. Ряд исследований показывают важность контракта для успешной
                                психологической работы.{' '}
                            </p>
                            <p>
                                {' '}
                                Отсутствие согласия между психологом и клиентом о целях сотрудничества – одна из
                                основных причин преждевременного прекращения встреч с клиентами. Поэтому, если мы хотим
                                работать эффективно, нам нужно уметь заключать хорошие контракты.{' '}
                            </p>
                        </div>
                    </div>

                    <div className={'Page__block'}>
                        <BlockSubTitle children={'6 часов  Теория и отработка навыков'} level={1}/>
                        <BlockSubTitle children={'Опция: разбор кейсов участников'} level={1}/>
                    </div>

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span className={'ShortCourse__block-info__title'}>Для кого</span>
                            <p>
                                Овладение процедурой заключения контрактов — важная опора для начала практики. Для более
                                опытных коллег может быть полезно обсуждение тонкостей заключения соглашений на разных
                                этапах работы с клиентами.{' '}
                            </p>
                            <span className={'ShortCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>Что представляет собой контракт в психотерапии и консультировании.</li>
                                <li>Какие преимущества дает контракт клиенту и специалисту.</li>
                                <li>
                                    Уровни хорошего контракта по Э. Берну: административный, профессиональный,
                                    психологический.
                                </li>
                                <li>
                                    Виды контрактов и в чём их отличия. Как анализировать контракты при помощи удобной
                                    схемы «Контрактной матрицы» (Ш. Силлс).
                                </li>
                                <li>
                                    Как заключать хорошие контракты. В чем разница в соглашениях с клиентами на разных
                                    этапах работы.
                                </li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Практический опыт</span>
                            <p>
                                В основе мастер-класса – теории и практики современного транзактного анализа. Занятие
                                предполагает отработку навыков через специально подобранные упражнения и обсуждение
                                опыта участников.
                            </p>
                            <span className={'ShortCourse__block-info__title'}>Дополнительная опция</span>
                            <p>
                                Возможность обсудить свои случаи из практики и задать конкретные вопросы по кейсам в
                                формате малой группы (до 10 человек). В течение 3-х дополнительных часов участники
                                предоставляют свои случаи и конкретные вопросы, ведущая прокомментирует кейсы и даст
                                развивающую обратную связь.
                            </p>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость участия:</span>
                                <span className={'ShortCourse__block-info__cost'}>5 000 рублей</span>
                            </div>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Дополнительная опция:</span>
                                <span className={'ShortCourse__block-info__cost'}>3 500 рублей</span>
                            </div>
                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/elena_stats.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Елена Станковская</span>
                            <Devider width={240}/>

                            <p>Психолог-консультант</p>
                            <p>(GLE International, Австрия), транзактный аналитик</p>
                            <p>
                                Кандидат психологических наук, кандидат на соискание звания транзактного аналитика в
                                области психотерапии, доцент НИУ ВШЭ. Более 12 лет ведет индивидуальную и групповую
                                работу с клиентами, более 10 лет преподает психологическое консультирование.
                            </p>
                            <p>
                                Автор книги «Транзактный анализ. 7 лекций для проекта Магистерия» и ряда научных и
                                научно-практических публикаций.
                            </p>
                        </div>
                    </div>
                </>
            );
        case '4':
            return (
                <>
                    <BlockTitle children={'Специализация по работе с бесплодием'} className={'Page__block'}/>
                    <BlockSubTitle children={'Запуск программы 11-12 сентября 2021 года'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Программа предусматривает теоретическую и практическую подготовку специалистов,
                                работающих с бесплодием.
                            </p>
                            <p>
                                Программа рассчитана на специалистов, имеющих навыки индивидуальной работы с клиентом и
                                специалистов, заинтересованных в работе с психологическим бесплодием.
                                Участники получают теоретические знания о бесплодии, практические навыки и опыт работы с
                                психосоматическим симптомом, а так же с психосоматическими расстройствами.
                            </p>
                            <p>
                                Программа включает в себя 9 циклов занятий по 2 дня. Большую часть времени занимают
                                тренинговые занятия (индивидуальные сессии, обсуждение работы, терапевтические
                                упражнения, групповая работа, дискуссии).
                            </p>
                        </div>
                    </div>

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span
                                className={'ShortCourse__block-info__title'}>Психосоматический симптом. Понятие.</span>
                            <ul>
                                <li>Психологическое (идиопатическое) бесплодие. Понятие.</li>
                                <li>Бесплодие неясного генеза. Физиологические факторы.</li>
                                <li>Анализ анамнеза. Медицинский аспект бесплодия.</li>
                                <li>Психологический аспект бесплодия.</li>
                                <li>Симптомы психологического бесплодия.</li>
                                <li>Взаимодействие специалистов акушера-гинеколога, генетика, медицинского психолога или
                                    психотерапевта.
                                </li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Условия для успешного зачатия.</span>
                            <ul>
                                <li>Внешние условия.</li>
                                <li>Стабильность среды.</li>
                                <li>Территориальная безопасность.</li>
                                <li>Социум.</li>
                                <li>Финансовая безопасность.</li>
                                <li>Внутренние условия.</li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Ожидания беременности.</span>
                            <ul>
                                <li>Ведущая мотивация рождения ребенка.</li>
                                <li>Конструктивные мотивы<em>,</em>&nbsp;</li>
                                <li>Деструктивные мотивы.</li>
                                <li>Манипулятивные мотивы&nbsp;беременности.</li>
                                <li>Вторичные выгоды бесплодия.</li>
                            </ul>
                            <span className={'ShortCourse__block-info__title'}>Мужское бесплодие.</span>
                            <span
                                className={'ShortCourse__block-info__title'}>Основы психологической работы при бесплодии</span>
                            <ul>
                                <li>Исследование и анализ возможных индивидуальных причин, взаимодействие в каждой
                                    паре.&nbsp;</li>
                                <li>Работа с депрессией.</li>
                                <li>Работа со страхами, аффектами.</li>
                                <li>Работа со стрессом. Эмоциональный, физический стресс.</li>
                                <li>Работа с кризисом.</li>
                                <li>Работа с детскими травмами.</li>
                                <li>Работа с парой, супружеская терапия.</li>
                                <li>Работа с семейной историей&nbsp;и взаимоотношениями в родительской семье.</li>
                                <li>Работа с родовыми посланиями, семейными историями.</li>
                                <li>Работа с сепарацией.</li>
                            </ul>

                            <span className={'ShortCourse__block-info__title'}>Работа с бесплодием<strong> в гештальтподходе.</strong></span>
                            <ul>
                                <li>Бесплодие как прерывание цикла контакта в отношениях с собой и с другими.</li>
                                <li>Роль защитных механизмов в формировании бесплодия.</li>
                                <li>Дефлексия. Бесплодие как уход от ведущей потребности.</li>
                                <li>Нарушение основных функций в структуре Self, ведущих к поддерживанию симптома
                                    бесплодия.
                                </li>
                            </ul>

                            <p className={'ShortCourse__block-info__title'}>Работа с бесплодием<strong> в экзистенциальном подходе</strong>.</p>

                            <p className={'ShortCourse__block-info__title'}>Работа с бесплодием<strong> в трансактом анализе</strong>.</p>

                            <p className={'ShortCourse__block-info__title'}>Работа в процессуальной терапии.</p>

                            <p className={'ShortCourse__block-info__title'}>Работа акушера-гинеколога с бесплодием</p>

                            <p className={'ShortCourse__block-info__title'}>Работа генетика с бесплодием</p>

                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/irina_isaeva.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Ирина Исаева, терапевт</span>
                            <Devider width={240}/>

                            <p>
                                Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор,
                                23-летний стаж психологической практики. 11-лет управленческого стажа. 20-летний опыт
                                работы в сфере образования.
                            </p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант
                                Совета при Президенте РФ.
                            </p>
                        </div>
                    </div>
                </>
            );
        case '5':
            return (
                <>
                    <BlockTitle children={'Психотерапевтический тренинг «Деньги. Денежки. Деньжищи…»'} className={'Page__block'}/>
                    <BlockSubTitle children={'10-11 июля 2021 года, 31 июля - 1 августа 2021 с 11.00 до 19.00'} className={'Page__block'}/>

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>
                                Считается, что любовь к деньгам — корень всех бед.<br/>
                                То же можно сказать и про отсутствие денег.<br/>
                                Батлер С.<br/>
                            </p>
                            <p>
                                Деньги — вещь очень важная. Особенно когда их нет.<br/>
                                Ремарк Э. М.<br/>
                            </p>
                        </div>
                    </div>
                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span
                                className={'ShortCourse__block-info__title'}>Этот тренинг для Вас, если:</span>
                            <ul>
                                <li>Вам не нужны деньги, Вы выше этого;</li>
                                <li>Вы следуете посланию – лучше быть бедным и здоровым, чем богатым и больным;</li>
                                <li>Вам надо много денег, но Вы не знаете, где и как их взять;</li>
                                <li>У Вас много денег, но Вы чувствуете себя бедным;</li>
                                <li>Вам стыдно быть богатым;</li>
                                <li>Деньги и Вы - вещи несовместимые, Вы даже не умеете их считать, не помните, сколько у вас сегодня денег и не можете быстро ответить, сколько денег в месяц вам необходимо;
                                </li>
                                <li>В Ваших руках деньги, как вода;</li>
                                <li>Вы много работаете, но мало зарабатываете;</li>
                                <li>Вы замечаете закономерность – если Вы начинаете больше зарабатывать, у партнера уменьшается доход и наоборот;</li>
<li>Вы изучили много литературы по повышению дохода, посетили финансовые тренинги, и уже сами стали в этом экспертом, но денежный поток остался на прежнем уровне или нестабильный.</li>
                            </ul>
                            <span
                                className={'ShortCourse__block-info__title'}>На тренинге вы также можете исследовать:</span>
                            <ul>
                                <li>Какое финансовое послание Вы получили от своего рода?</li>
                                <li>Как это послание реализуется сейчас в Ваших отношениях с деньгами?</li>
                                <li>Кто в этом виноват?</li>
                                <li>Что с этим делать?</li>
                                <li>Зачем Вам оставаться бедным?</li>
                                <li>Как Ваш характер влияет на Вашу доходность?</li>
                            </ul>
                            <p>Все упражнения нацелены на самоисследование, осознавание и получение нового финансового опыта.</p>

                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость участия:</span>
                                <span className={'ShortCourse__block-info__cost'}>10 000 руб. за 2 дня</span>
                            </div>

                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'ShortCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/irina_isaeva.jpg")` }}
                            />
                            <span className={'ShortCourse__block-info__name'}>Ирина Исаева, терапевт</span>
                            <Devider width={240}/>

                            <p>
                                Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор,
                                23-летний стаж психологической практики. 11-лет управленческого стажа. 20-летний опыт
                                работы в сфере образования.
                            </p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант
                                Совета при Президенте РФ.
                            </p>
                        </div>
                    </div>
                </>
            );

        default:
            return (
                <>
                    <BlockTitle children={`Курс под номером ${props.id} не найден`} className={'Page__block'}/>
                </>
            );
    }
};
