/* eslint-disable max-len */
import React from 'react';
import { Devider } from '../../components/Devider/Devider';
import './LognCourses.css';
import { useParams } from 'react-router';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { BlockSubTitle } from '../../components/BlockSubTitle/BlockSubTitle';
import { CourseForm } from '../../components/CourseForm/CourseForm';
import { DiplomaIcon } from '../../components/Icon/DiplomaIcon';
import { MoneyIcon } from '../../components/Icon/MoneyIcon';
import { CalendarIcon } from '../../components/Icon/CalendarIcon';
import { TimeIcon } from '../../components/Icon/TimeIcon';
import { NavHashLink } from '../../components/Link/Link';

export const LongCourses = () => {
    let { id } = useParams();

    const getCourse = () => {
        switch (id) {
            case '0':
                return 'Гештальт-терапия';
            case '1':
                return 'Экзистенциальный анализ';
            case '2':
                return 'Психологическое консультирование';
        }
    };

    return (
        <div className={'Page'}>
            <LongCourse id={id} />

            <BlockTitle
                id={'form'}
                children={'Записаться на курс'}
                className={'Page__block'}
            />
            <article className={'Page__block Course_contact-block'} >
                <section className={'Course_contact-block__form'}>
                    <CourseForm course={getCourse()} />
                </section>
            </article>
            <Devider className={'Page__devider'}/>
        </div>
    );
};

const LongCourse = ({...props}) => {
    console.log(props.id)
    switch (props.id) {
        case '0':
            return (
                <>
                    <BlockTitle
                        children={'Гештальт-терапия'}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'1-я  ступень'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <div className={'Page__block__text__header'}>
                                <strong>Старт 3 апреля 2021 года</strong>

                                <NavHashLink
                                    path={`/education/long_course/${props.id}#form`}
                                >
                                    <i>открыт набор группы</i>
                                </NavHashLink>
                            </div>
                            <p>Универсальный метод работы с любыми запросами клиентов.</p>
                            <p>Курс включает базовую теорию и методы гештальт-терапии, навыки гештальт-диагностики, принципы работы в обучающих и терапевтических группах.</p>
                        </div>
                    </div>

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <div className={'Page__block__text__info'}>
                                <TimeIcon  width={24} height={24}/>
                                <strong>100</strong>
                                <span>часов практики в очном формате</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <CalendarIcon  width={24} height={24}/>
                                <strong>9</strong>
                                <span>двухдневных модулей, 8 часов/день</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <MoneyIcon width={24} height={24} />
                                <strong>Стоимость:</strong>
                                <span> 9 000 рублей за модуль</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <DiplomaIcon width={24} height={24} />
                                <strong>Сертификат:</strong>
                                <span>гештальт-терапии 1-ой ступени</span>
                            </div>
                        </div>
                    </div>

                    <BlockSubTitle children={'2-я  ступень'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <div className={'Page__block__text__header'}>
                                <strong>Старт 5 февраля 2022</strong>
                                <NavHashLink
                                    path={`/education/long_course/${props.id}#form`}
                                >
                                    <i>открыт набор группы</i>
                                </NavHashLink>
                                <span>после 1-ой ступени или программы "Психолог-консультант"</span>
                            </div>
                            <p>Курс направлен на практическое освоение принципов и техник гештальт-терапии, разбор кейсов, понимание вариативности клиентского запроса и боли.</p>
                            <p>Слушатели приобретают практический опыт, формируют свой терапевтический стиль. Значительное количество часов отведено супервизии.</p>
                        </div>
                    </div>

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <div className={'Page__block__text__info'}>
                                <TimeIcon  width={24} height={24}/>
                                <strong>340</strong>
                                <span>часов практики в очном формате</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <CalendarIcon  width={24} height={24}/>
                                <strong>21</strong>
                                <span>двухдневных модулей, 8 часов/день</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <MoneyIcon width={24} height={24} />
                                <strong>Стоимость:</strong>
                                <span>10 000 рублей за модуль</span>
                            </div>
                            <div className={'Page__block__text__info'}>
                                <DiplomaIcon width={24} height={24} />
                                <strong>Сертификат:</strong>
                                <span>гештальт-терапии 2-ой ступени и диплом о переподготовке</span>
                            </div>
                        </div>
                    </div>

                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'} id={'step_0'}>Практический курс гештальт-терапии 1 ступени</span>
                            <p>
                                Метод гештальт-терапии одним из первых успешно зарекомендовал себя в России. Его применение универсально: для индивидуальной, групповой, супружеской и парной психотерапии, в образовательных учреждениях и бизнес-организациях.
                                <br />
                                Обучение на программе включает базовую теорию и методы гештальт-терапии, навыки гештальт-диагностики, принципы работы в обучающих и терапевтических группах.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Что будем изучать:</span>
                            <ul>
                                <li>базовую теорию и методы гештальт-терапии</li>
                                <li>навыки гештальт-диагностики</li>
                                <li>принципы работы в обучающих и терапевтических группах</li>
                                <li>способы преодоления собственных затруднений и проблем</li>
                            </ul>
                            <p>
                                Помимо теории вы приобретете: опыт работы с различными запросами –  собственными и других участников группы, а также опыт проведения психологического консультирования в рамках гештальт-подхода 1-ой ступени
                            </p>
                            <span className={'LongCourse__block-info__title'}>Где вы сможете это применять:</span>
                            <ul>
                                <li>в индивидуальной работе с клиентами</li>
                                <li>в супружеской психотерапии, когда обращается пара</li>
                                <li>в семейной психотерапии, когда обращаются несколько членов семьи</li>
                                <li>в групповой психотерапии, в том числе в работе с группами развития</li>
                                <li>в образовательных учреждениях и больничных организациях для проведения психологического консультирования или диагностики</li>
                                <li>в бизнес-организациях, индустриальном и коммерческом секторе для улучшения коммуникации между людьми, укрепления связей внутри команды, предотвращения конфликтов с помощью медиации, развития инициативности и продуктивности сотрудников</li>
                            </ul>

                            <div>
                                <span className={'LongCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'LongCourse__block-info__cost'}>9 000 рублей</span>
                            </div>
                            <span className={'LongCourse__block-info__main'}>Для поступления необходимо отправить заявку на обучение или связаться с нами по электронной почте или телефону.
После заключения договора вы можете оплатить каждый модуль отдельно 9 000 рублей или внести всю сумму за 9 модулей.</span>

                            <Devider width={240} />

                            <span className={'LongCourse__block-info__title'} id={'step_1'}>Практический курс гештальт-терапии 2 ступени</span>
                            <p>
                                Курс направлен на практическое освоение принципов и техник гештальт-терапии, разбор кейсов, понимание вариативности клиентского запроса и боли. Слушатели приобретают практический опыт, формируют свой терапевтический стиль.
                                <br />
                                Подробно разбирают запросы, связанные с травматизацией, психосоматикой, работой с семьей и пр. Супервизионные часы способствуют формированию устойчивых навыков психотерапевта.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Что и как будем изучать:</span>

                            <p>
                                Модули включают теоретический блок и практические упражнения с их подробным разбором.
                                Участники применяют практические навыки в групповом процессе.
                            </p>
                            <p>
                                Ведущий работает с групповой динамикой и индивидуальным развитием каждого участника группы.
                                Участники приобретают знания и практические навыки психотерапевта, формируют собственный психотерапевтический стиль.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Психотерапевтический опыт</span>
                            <ul>
                                <li>Супервизия участников на протяжении всего обучения</li>
                                <li>личный терапевтический опыт при работах с темами 2-ой ступени</li>
                                <li>проработка трудных случаев при помощи кейс-метода (сложные случаи становятся понятными через обсуждение)</li>
                            </ul>

                            <span className={'LongCourse__block-info__title'}>Тренинговые занятия модуля</span>
                            <ul>
                                <li>индивидуальные сессии участников группы</li>
                                <li>обсуждения затруднений психотерапевтической работы каждой темы
                                    2-ой ступени через кейс-метод</li>
                                <li>терапевтические упражнения для развития навыков и формирования собственного терапевтического стиля
                                </li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>

                            <div>
                                <span className={'LongCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'LongCourse__block-info__cost'}>10 000 рублей</span>
                            </div>
                            <span className={'LongCourse__block-info__main'}>Сертификация 2-ой ступени включает обучение на 20 модулях и экзамен.</span>
                        </div>


                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{backgroundImage: `url("../../images/team/irina_isaeva.jpg")`}}
                            />
                            <span className={'LongCourse__block-info__name'}>Ирина Исаева</span>
                            <Devider width={240} />

                            <p>Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор, 23-летний стаж психологической практики.
                                11-лет управленческого стажа. 20-летний опыт работы в сфере образования.</p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант Совета при Президенте РФ.</p>
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
                    <BlockSubTitle children={'Ноябрь — Октябрь (2020-2021)'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>Программа рассчитана на медицинских специалистов и психологов-практиков с базовой подготовкой в одном из методов гуманистической психотерапии.</p>
                            <p>Психосоматические (соматоморфные по МКБ-10) расстройства составляют по некоторым оценкам около 1/5 всех запросов. Биопсихосоциальная модель предполагает мультидисциплинарное сопровождение командой специалистов, в которую включен психолог.</p>
                            <p>Медучреждение, куда с жалобами обращается пациент, не всегда может ему это обеспечить. И тогда пациенты обращаются к частно-практикующим специалистам.</p>
                        </div>
                    </div>

                    <BlockSubTitle children={'Диплом о повышении квалификации 144 часа   9 двухдневных модулей'} className={'Page__block'} level={1} />

                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>теория и практика работы с психосоматическими запросами</li>
                                <li>взаимодействие психотерапевта и медицинских специалистов</li>
                                <li>навыки осознавания и обработки собственных паттернов зависимого и созависимого поведения; опыт восстановления телесных ощущений, состояний, чувств, эмоций, навык использования их в работе с клиентом</li>
                            </ul>
                            <span className={'LongCourse__block-info__title'}>Психотерапевтический опыт</span>
                            <ul>
                                <li>супервизия на протяжении всего обучения</li>
                                <li>личный терапевтический опыт работы с разными видами психосоматических запросов</li>
                                <li>проработка трудных кейсов психосоматических запросов через кейс-метод</li>
                            </ul>
                            <span className={'LongCourse__block-info__title'}>Тренинговые занятия модуля</span>
                            <ul>
                                <li>индивидуальные сессии участников группы</li>
                                <li>обсуждения затруднений психотерапевтической работы каждой темы через кейс-метод</li>
                                <li>терапевтические упражнения для развития навыков работы с запросом клиента и развитие собственного психотерапевтического инструментария</li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>
                            <div>
                                <span className={'LongCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'LongCourse__block-info__cost'}>? рублей</span>
                            </div>
                        </div>
                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{backgroundImage: `url("../../images/team/irina_isaeva.jpg")`}}
                            />
                            <span className={'LongCourse__block-info__name'}>Ирина Исаева</span>
                            <Devider width={240} />

                            <p>Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор, 23-летний стаж психологической практики.
                                11-лет управленческого стажа. 20-летний опыт работы в сфере образования.</p>
                            <p>Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.</p>
                            <p>Выпустила более 100 групп по гештальт-терапии 1-ой и 2-ой ступени. Психолог-консультант Совета при Президенте РФ.</p>
                        </div>
                    </div>
                </>
            );
        case "2":
            return (
                <>
                    <BlockTitle
                        children={'Феноменология: искусство интересоваться клиентами'}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'10 Апреля 12:00 — 19:00 онлайн'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>Вебинар ориентирован на психологов, уже начавших практику и желающих привнести в неё еще больше культуры уважения к клиенту и точности в работе. В результате вы получите навыки заинтересованного исследования внутреннего мира ваших клиентов, что сделает ваши интервенции эффективными.</p>
                            <p>Феноменологический проект в психотерапии — это попытка слышать и понимать клиента в его внутренней правде. «Распаковывать» субъективные переживания, делать их подробными и видимыми — в первую очередь, для самого человека. </p>
                            <p>По сути, это искусство интересоваться внутренним миром клиента так, чтобы он в большей степени становился собой.</p>
                        </div>
                    </div>

                    <div className={'Page__block'}>
                        <BlockSubTitle children={'6 часов  Теория и отработка навыков'} level={1} />
                        <BlockSubTitle children={'Опция: разбор кейсов участников'}  level={1} />
                    </div>



                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'}>Преимущества для работы с клиентом</span>
                            <ul>
                                <li>феноменологическое исследование развивает способность клиента к самонаблюдению</li>
                                <li>повышает самоценность</li>
                                <li>помогает увлечься тем, что происходит у него внутри – собственными мыслями, чувствами, ощущениями, решениями </li>
                                <li>развивает способность понимать себя и других.</li>
                            </ul>
                            <span className={'LongCourse__block-info__title'}>Преимущества для специалиста</span>
                            <p>феноменология даёт возможность отставлять на время теории и по-настоящему слышать своих клиентов. Благодаря этому в работе появляется точность, вдохновляющая новизна и глубина контакта.</p>
                            <span className={'LongCourse__block-info__title'}>Знания и навыкит</span>
                            <ul>
                                <li>вы познакомитесь с пониманием феноменологии в экзистенциальном анализе А. Лэнгле и интегративной психотерапии Р. Эрскина </li>
                                <li>Узнаете, что представляет собой «феноменологическая установка» и как она может обогатить вашу работу с клиентами</li>
                                <li>поймёте преимущества и ограничения этого способа работы с клиентами</li>
                            </ul>
                            <p>В рамках мастер-класса предусмотрена демонстрация феноменологического исследования ведущей и отработка практических навыков участниками.</p>
                            <span className={'LongCourse__block-info__title'}>Дополнительная опция</span>
                            <p>Возможность обсудить свои случаи из практики и задать конкретные вопросы по кейсам в формате малой группы (до 10 человек). В течение 3-х дополнительных часов участники предоставляют свои случаи и конкретные вопросы, ведущая прокомментирует кейсы и даст развивающую обратную связь.</p>
                            <div>
                                <span className={'LongCourse__block-info__title'}>Стоимость участия:</span>
                                <span className={'LongCourse__block-info__cost'}>5 000 рублей</span>
                            </div>
                            <div>
                                <span className={'LongCourse__block-info__title'}>Дополнительная опция:</span>
                                <span className={'LongCourse__block-info__cost'}>3 500 рублей</span>
                            </div>
                        </div>
                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{backgroundImage: `url("../../images/team/elena_stats.jpg")`}}
                            />
                            <span className={'LongCourse__block-info__name'}>Елена Станковская</span>
                            <Devider width={240} />

                            <p>Психолог-консультант</p>
                            <p>(GLE International, Австрия), транзактный аналитик</p>
                            <p>андидат психологических наук, кандидат на соискание звания транзактного аналитика в области психотерапии, доцент НИУ ВШЭ. Более 12 лет ведет индивидуальную и групповую работу с клиентами, более 10 лет преподает психологическое консультирование.</p>
                            <p>Автор книги «Транзактный анализ. 7 лекций для проекта Магистерия» и ряда научных и научно-практических публикаций.</p>
                        </div>
                    </div>
                </>
            );
        case "3":
            return (
                <>
                    <BlockTitle
                        children={'Хорошие контракты'}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'03 Апреля 12:00 — 19:00 онлайн'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов гуманистической психотерапии.</p>
                            <p>Мастер-класс построен таким образом, чтобы предоставить вам инструменты вне зависимости от подхода, в котором вы работаете.</p>
                            <p>С 1960-ых годов психологи стали заключать контракты – открыто договариваться с клиентами о целях совместной работы. Ряд исследований показывают важность контракта для успешной психологической работы. </p>
                            <p> Отсутствие согласия между психологом и клиентом о целях сотрудничества – одна из основных причин преждевременного прекращения встреч клиентами. Поэтому, если мы хотим работать эффективно, нам нужно уметь заключать хорошие контракты. </p>
                        </div>
                    </div>

                    <div className={'Page__block'}>
                        <BlockSubTitle children={'6 часов  Теория и отработка навыков'} level={1} />
                        <BlockSubTitle children={'Опция: разбор кейсов участников'}  level={1} />
                    </div>



                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'}>Для кого</span>
                            <p>Овладение процедурой заключения контрактов — важная опора для начала практики. Для более опытных коллег может быть полезно обсуждение тонкостей заключения соглашений на разных этапах работы с клиентами. </p>
                            <span className={'LongCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>Что представляет собой контракт в психотерапии и консультировании.</li>
                                <li>Какие преимущества дает контракт клиенту и специалисту.</li>
                                <li>Уровни хорошего контракта по Э. Берну: административный, профессиональный, психологический.</li>
                                <li>Виды контрактов и в чём их отличия. Как анализировать контракты при помощи удобной схемы «Контрактной матрицы» (Ш. Силлс).</li>
                                <li>Как заключать хорошие контракты. В чем разница в соглашениях  с клиентами на разных этапах работы.</li>
                            </ul>
                            <span className={'LongCourse__block-info__title'}>Практический опыт</span>
                            <p>В основе мастер-класса – теории и практики современного транзактного анализа. Занятие предполагает отработку навыков через специально подобранные упражнения и обсуждение опыта участников.</p>
                            <span className={'LongCourse__block-info__title'}>Дополнительная опция</span>
                            <p>Возможность обсудить свои случаи из практики и задать конкретные вопросы по кейсам в формате малой группы (до 10 человек). В течение 3-х дополнительных часов участники предоставляют свои случаи и конкретные вопросы, ведущая прокомментирует кейсы и даст развивающую обратную связь.</p>
                            <div>
                                <span className={'LongCourse__block-info__title'}>Стоимость участия:</span>
                                <span className={'LongCourse__block-info__cost'}>5 000 рублей</span>
                            </div>
                            <div>
                                <span className={'LongCourse__block-info__title'}>Дополнительная опция:</span>
                                <span className={'LongCourse__block-info__cost'}>3 500 рублей</span>
                            </div>
                        </div>
                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{backgroundImage: `url("../../images/team/elena_stats.jpg")`}}
                            />
                            <span className={'LongCourse__block-info__name'}>Елена Станковская</span>
                            <Devider width={240} />

                            <p>Психолог-консультант</p>
                            <p>(GLE International, Австрия), транзактный аналитик</p>
                            <p>андидат психологических наук, кандидат на соискание звания транзактного аналитика в области психотерапии, доцент НИУ ВШЭ. Более 12 лет ведет индивидуальную и групповую работу с клиентами, более 10 лет преподает психологическое консультирование.</p>
                            <p>Автор книги «Транзактный анализ. 7 лекций для проекта Магистерия» и ряда научных и научно-практических публикаций.</p>
                        </div>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <BlockTitle
                        children={`Курс под номером ${props.id} не найден`}
                        className={'Page__block'}
                    />
                </>
            );

    }
};
