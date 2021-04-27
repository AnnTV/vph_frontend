/* eslint-disable max-len */
import React from 'react';
import { Devider } from '../../components/Devider/Devider';
import './LognCourses.css';
import { useParams } from 'react-router';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { CourseForm } from '../../components/CourseForm/CourseForm';
import { DiplomaIcon } from '../../components/Icon/DiplomaIcon';
import { MoneyIcon } from '../../components/Icon/MoneyIcon';
import { CalendarIcon } from '../../components/Icon/CalendarIcon';
import { TimeIcon } from '../../components/Icon/TimeIcon';
import { NavHashLink } from '../../components/Link/Link';
import { AttentionIcon } from '../../components/Icon/AttentionIcon';
import { AuthorIcon } from '../../components/Icon/AuthorIcon';
import { StudyIcon } from '../../components/Icon/StudyIcon';
import { courseOptions } from '../../utils/infoData';

export const LongCourses = () => {
    let { id } = useParams();

    const getCourse = (id) => {
        return courseOptions.slice(0, 9)[id].value;
    };

    return (
        <div className={'Page'}>
            <LongCourse id={id} />

            <BlockTitle id={'form'} children={'Записаться на курс'} className={'Page__block'} />
            <article className={'Page__block Course_contact-block'}>
                <section className={'Course_contact-block__form'}>
                    <CourseForm course={getCourse(id)} />
                </section>
            </article>
            <Devider className={'Page__devider'} />
        </div>
    );
};

const LongCourse = ({ ...props }) => {
    console.log(props.id);
    switch (props.id) {
        case '0':
            return (
                <>
                    <BlockTitle children={'Гештальт-терапия'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'} id={'step_0'}>
                                Практический курс гештальт-терапии 1 ступени
                            </span>
                            <p>
                                Метод гештальт-терапии одним из первых успешно зарекомендовал себя в России. Его
                                применение универсально: для индивидуальной, групповой, супружеской и парной
                                психотерапии, в образовательных учреждениях и бизнес-организациях.
                                <br />
                                Обучение на программе включает базовую теорию и методы гештальт-терапии, навыки
                                гештальт-диагностики, принципы работы в обучающих и терапевтических группах.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Что будем изучать:</span>
                            <ul>
                                <li>базовую теорию и методы гештальт-терапии</li>
                                <li>навыки гештальт-диагностики</li>
                                <li>принципы работы в обучающих и терапевтических группах</li>
                                <li>способы преодоления собственных затруднений и проблем</li>
                            </ul>
                            <p>
                                Помимо теории вы приобретете: опыт работы с различными запросами – собственными и других
                                участников группы, а также опыт проведения психологического консультирования в рамках
                                гештальт-подхода 1-ой ступени
                            </p>
                            <span className={'LongCourse__block-info__title'}>Где вы сможете это применять:</span>
                            <ul>
                                <li>в индивидуальной работе с клиентами</li>
                                <li>в супружеской психотерапии, когда обращается пара</li>
                                <li>в семейной психотерапии, когда обращаются несколько членов семьи</li>
                                <li>в групповой психотерапии, в том числе в работе с группами развития</li>
                                <li>
                                    в образовательных учреждениях и больничных организациях для проведения
                                    психологического консультирования или диагностики
                                </li>
                                <li>
                                    в бизнес-организациях, индустриальном и коммерческом секторе для улучшения
                                    коммуникации между людьми, укрепления связей внутри команды, предотвращения
                                    конфликтов с помощью медиации, развития инициативности и продуктивности сотрудников
                                </li>
                            </ul>

                            <div className={'LongCourse__block-info__summary'}>
                                <div className={'Page__block__text__info'}>
                                    <TimeIcon width={24} height={24} />
                                    <strong>100</strong>
                                    <span>часов практики в очном формате</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <CalendarIcon width={24} height={24} />
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
                                <div className={'Page__block__text__info'}>
                                    <AttentionIcon width={24} height={24} />
                                    <strong>Открыт набор группы:</strong>
                                    <NavHashLink
                                        path={`/education/long_course/${props.id}#form`}
                                        children={'Записаться'}
                                    />
                                </div>
                            </div>

                            <Devider width={240} />

                            <span className={'LongCourse__block-info__title'} id={'step_1'}>
                                Практический курс гештальт-терапии 2 ступени
                            </span>
                            <p>
                                Курс направлен на практическое освоение принципов и техник гештальт-терапии, разбор
                                кейсов, понимание вариативности клиентского запроса и боли. Слушатели приобретают
                                практический опыт, формируют свой терапевтический стиль.
                                <br />
                                Подробно разбирают запросы, связанные с травматизацией, психосоматикой, работой с семьей
                                и пр. Супервизионные часы способствуют формированию устойчивых навыков психотерапевта.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Что и как будем изучать:</span>

                            <p>
                                Модули включают теоретический блок и практические упражнения с их подробным разбором.
                                Участники применяют практические навыки в групповом процессе.
                            </p>
                            <p>
                                Ведущий работает с групповой динамикой и индивидуальным развитием каждого участника
                                группы. Участники приобретают знания и практические навыки психотерапевта, формируют
                                собственный психотерапевтический стиль.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Психотерапевтический опыт</span>
                            <ul>
                                <li>Супервизия участников на протяжении всего обучения</li>
                                <li>личный терапевтический опыт при работах с темами 2-ой ступени</li>
                                <li>
                                    проработка трудных случаев при помощи кейс-метода (сложные случаи становятся
                                    понятными через обсуждение)
                                </li>
                            </ul>

                            <span className={'LongCourse__block-info__title'}>Тренинговые занятия модуля</span>
                            <ul>
                                <li>индивидуальные сессии участников группы</li>
                                <li>
                                    обсуждения затруднений психотерапевтической работы каждой темы 2-ой ступени через
                                    кейс-метод
                                </li>
                                <li>
                                    терапевтические упражнения для развития навыков и формирования собственного
                                    терапевтического стиля
                                </li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>

                            <div className={'LongCourse__block-info__summary'}>
                                <div className={'Page__block__text__info'}>
                                    <TimeIcon width={24} height={24} />
                                    <strong>340</strong>
                                    <span>часов практики в очном формате</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <CalendarIcon width={24} height={24} />
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
                                <div className={'Page__block__text__info'}>
                                    <AttentionIcon width={24} height={24} />
                                    <strong>Открыт набор группы:</strong>
                                    <NavHashLink
                                        path={`/education/long_course/${props.id}#form`}
                                        children={'Записаться'}
                                    />
                                </div>
                            </div>

                            <span className={'LongCourse__block-info__main'}>
                                Сертификация 2-ой ступени включает обучение на 20 модулях и экзамен.
                            </span>
                        </div>

                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>
                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/irina_isaeva.jpg")` }}
                            />
                            <span className={'LongCourse__block-info__name'}>Ирина Исаева</span>
                            <Devider width={240} />

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
        case '1':
            return (
                <>
                    <BlockTitle children={'Экзистенциальный анализ'} className={'Page__block'} />

                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'}>Как прийти к осмысленной жизни</span>
                            <p>
                                Этими вопросами занималась экзистенциальная философия и психология. Экзистенциальный
                                анализ и логотерапия – направление психотерапии, предложившее комплексный метод
                                психологической работы на основе этих идей.
                            </p>
                            <p>
                                Международное общество экзистенциального анализа и логотерапии (GLE-International) ведет
                                деятельность в странах ЕС, Швейцарии, Израиле, Великобритании, России, Аргентине и
                                Канаде в области психологии, психотерапии, медицины, педагогики, психологии образования,
                                менеджмента, переговоров и медиации.
                            </p>

                            <br id={'step_0'} />
                            <br id={'step_1'} />
                            <span className={'LongCourse__block-info__title'}>Базовый и клинический курс</span>
                            <p>
                                Программа предназначена для людей с высшим психологическим образованием, студентов
                                старших курсов, обучающихся по направлению "Психология", а также представителям смежных
                                специальностей (педагогика, медицина и др.).
                            </p>
                            <p>
                                По итогам обучения выдаётся диплом о переподготовке государственного образца по
                                специальности "Психолог-консультант в экзистенциально-аналитическом направлении", а
                                также международный сертификат GLE International (при выполнении всех требований).
                            </p>

                            <span className={'LongCourse__block-info__title'}>Знания и навыки:</span>
                            <ul>
                                <li>философско-антропологические основы экзистенциального анализа;</li>
                                <li>понятие «экзистенция» и концепция фундаментальных мотиваций;</li>
                                <li>феноменологический метод;</li>
                                <li>основные стратегии работы;</li>
                                <li>терапевтические отношения и специфические техники;</li>
                                <li>
                                    экзистенциально-аналитическая диагностика и особенности консультирования при
                                    различной психопатологии.
                                </li>
                            </ul>

                            <span className={'LongCourse__block-info__title'}>Результат:</span>
                            <ul>
                                <li>развитие личности участника образовательной программы;</li>
                                <li>индивидуальное самопознание с одним из тренеров ассоциации;</li>
                                <li>
                                    самопознание в группе: освоение основных экзистенциальных тем, с которыми работает
                                    экзистенциальный анализ через персональный опыт участников;
                                </li>
                                <li>
                                    практика при супервизорском сопровождении: анализ практических случаев участников
                                    образовательного проекта.
                                </li>
                            </ul>

                            <div className={'LongCourse__block-info__summary'}>
                                <div className={'Page__block__text__info'}>
                                    <AuthorIcon width={24} height={24} />
                                    <strong>Условия приема:</strong>
                                    <span>индивидуальное собеседование с ведущими программы.</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <CalendarIcon width={24} height={24} />
                                    <strong>Режим занятий:</strong>
                                    <span>6 трёхдневок в год (пятница, суббота, воскресенье), с 10.00-19.00</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <StudyIcon width={24} height={24} />
                                    <strong>Форма обучения:</strong>
                                    <span>очно-дистанционная</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <CalendarIcon width={24} height={24} />
                                    <strong>Длительность программы:</strong>
                                    <span>3 года</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <MoneyIcon width={24} height={24} />
                                    <strong>Стоимость:</strong>
                                    <span>150 евро за трехдневный семинар</span>
                                </div>
                                <div className={'Page__block__text__info'}>
                                    <AttentionIcon width={24} height={24} />
                                    <strong>Старт программы: осень 2021г.</strong>
                                    <NavHashLink
                                        path={`/education/long_course/${props.id}#form`}
                                        children={'Оставить заявку'}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Программу проводит</span>

                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/mar_sv.jpeg")` }}
                            />
                            <span className={'LongCourse__block-info__name'}>Светлана Мардоян</span>
                            <Devider width={240} />

                            <p>
                                Окончила Ереванский медицинский институт, ординатуру по психотерапии в РМАПО.
                                Психотерапевт, экзистенциальный аналитик (диплом психотерапевта GLE-International).
                            </p>
                            <p>
                                Член совета тренеров Ассоциации экзистенциально-аналитических психологов и
                                психотерапевтов, тренер, супервизор долгосрочной образовательной программы по
                                экзистенциальному анализу и логотерапии GLE-International.
                            </p>

                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/hol_vita2.jpg")` }}
                            />
                            <span className={'LongCourse__block-info__name'}>Вита Холмогорова</span>
                            <Devider width={240} />

                            <p>
                                Окончила МГППУ, факультет Психологическое консультирование и психотерапия, РГМУ,
                                факультет клинической психологии, кандидат психологических наук. Экзистенциальный
                                аналитик (диплом психотерапевта GLE-international), психофизиолог, коуч. Опыт
                                психологического консультирования с 1996 года.
                            </p>

                            <div
                                className={'LongCourse__block-info__author-img'}
                                style={{ backgroundImage: `url("../../images/team/kol_ev2.jpg")` }}
                            />
                            <span className={'LongCourse__block-info__name'}>Евгения Кольцова</span>
                            <Devider width={240} />

                            <p>
                                Окончила МГУ им. М.В. Ломоносова, факультет психологии, кафедра психологии личности;
                                РГМУ факультет клинической психологии; аспирантура ИП РАН.
                            </p>
                            <p>
                                Экзистенциальный аналитик (диплом психотерапвета GLE-international), Член совета
                                тренеров Ассоциации экзистенциально-аналитических психологов и психотерапевтов. Опыт
                                психологического консультирования более 10 лет, ведущая групп самопознания, автор
                                практических семинаров и курсов по психологии.
                            </p>

                            <span className={'LongCourse__block-info__name'}>Лэнгле Альфрид Антон</span>
                            <Devider width={240} />

                            <p>
                                Ph.D., M.D., Dr. h.c., профессор, почетный президент Международного общества
                                экзистенциального анализа и логотерапии (GLE-International), автор
                                экзистенциально-аналитического подхода.
                            </p>
                        </div>
                    </div>
                </>
            );

        case '2':
            return (
                <>
                    <BlockTitle children={'Психологическое консультирование'} className={'Page__block'} id={'step_0'} />

                    <div className={'Page__block LongCourse__block-info'}>
                        <div className={'LongCourse__block-info__course'}>
                            <span className={'LongCourse__block-info__title'}>О программе</span>
                            <p>
                                Мы предлагаем панорамный взгляд на курс практической психологии: только актуальные
                                знания, практические навыки работы с любым запросом, проработка личных содержаний – всё
                                в одной программе. Такой подход помогает слушателю приобрести опыт, для которого
                                потребовалось бы несколько лет самостоятельных усилий.
                            </p>
                            <p>
                                Выпускникам академических вузов бывает трудно начать работу с клиентами. В течение
                                нескольких лет они проходят курсы повышения квалификации, супервизии, чтобы выстроить
                                понятную образовательную программу и найти себя как профессионал. Наша программа
                                создана, чтобы сократить этот путь.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Для кого</span>

                            <ul>
                                <li>
                                    Для всех желающих связать свою профессиональную деятельность с психотерапией и
                                    психологическим консультированием, особенно для выпускников академических вузов;
                                </li>
                                <li>
                                    Для тех, кто выбирают психологию «для себя», чтобы обрести гармонию с собой,
                                    партнером, членами семьи, в коммерческой организации;
                                </li>
                                <li>
                                    Для начинающих специалистов, которые хотят познакомиться с профессией и заложить
                                    основу будущей карьеры;
                                </li>
                                <li>
                                    Для действующих консультантов, которые хотят развивать карьеру, систематизировать и
                                    получить новые знания и навыки;
                                </li>
                                <li>
                                    Для специалистов смежных направлений (врачам, логопедам, физическим терапевтам,
                                    педагогам, социальным педагогам, бизнес-тренерам, коучам и др.).{' '}
                                </li>
                            </ul>

                            <p>
                                К обучению допускаются студенты выпускного курса психологических факультетов. По
                                окончании программы студенты могут продолжить углубленное обучение на других программах:
                                Гештальт 1 и 2 ступени, Экзистенциальный анализ и других.
                            </p>

                            <span className={'LongCourse__block-info__title'}>Содержание</span>
                            <p>
                                Программа сфокусирована на формировании системных и фундаментальных практических знаний
                                в профессии психолога-консультанта. Подробно разбирается каждый этап психологической
                                работы. Значительное время уделено развитию практических навыков специалиста.
                            </p>
                            <p>
                                Программа сгруппирована по 24 модулям — двухдневным и однодневным по 8 часов в день.
                                Модули образуют тематические блоки. Обучение проходит по выходным. Программа
                                откалибрована, чтобы при обучении три выходных в месяц были свободными.
                            </p>

                            <span className={'LongCourse__block-info__title'}>
                                Блок 1. Введение в психологическое консультирование
                            </span>
                            <ol>
                                <li>Базовые навыки консультанта</li>
                                <li>Активное слушание</li>
                                <li>Эмпатия</li>
                                <li>Подлинность, честность, искренность</li>
                                <li>Непосредственность</li>
                                <li>Знание и принятие себя</li>
                                <li>Конкретность, способность быть определенным, точным, аутентичность</li>
                                <li>Этические навыки (кредо, стиль поведения)</li>
                                <li>Следование этапам процесса консультирования</li>
                                <li>Коммуникативные навыки психолога-консультанта</li>
                            </ol>

                            <span className={'LongCourse__block-info__title'}>
                                Блок 2. Работа с чувствами, телесными ощущениями, мыслями консультанта и клиента.
                                Обработка внутренних содержаний
                            </span>
                            <ol>
                                <li>
                                    Обработка базовых запросов: чувства вины, стыда, агрессии, страхов, тревоги,
                                    радости, счастья (способности испытывать и проживать), отвращения, обиды, грусти,
                                    печали
                                </li>
                                <li>Работа с чувствами в отношениях: абьюз, травма, зависимость и созависимость</li>
                                <li>
                                    Работа с телесными состояниями: телесными ощущениями и через образы
                                    (гештальт-подход)
                                </li>
                                <li>Работа с когнитивными искажениями</li>
                                <li>Работа с установками</li>
                            </ol>

                            <span className={'LongCourse__block-info__title'}>
                                Блок 3. Структура психологической работы
                            </span>
                            <ol>
                                <li>Различия консультирования/терапии</li>
                                <li>Этапы консультирования</li>
                                <li>Этические принципы в психологическом консультировании</li>
                                <li>Виды и выбор психологических интервенций</li>
                            </ol>

                            <span className={'LongCourse__block-info__title'}>
                                Блок 4. Профессиональная позиция психолога-консультанта
                            </span>
                            <ol>
                                <li>
                                    Следование этическим принципам психологического консультирования Ожидания
                                    консультанта от своей работы и предполагаемых результатах
                                </li>
                                <li>Работа с внутренними конфликтами</li>
                                <li>Работа с ресурсами консультанта</li>
                                <li>
                                    Сохранение баланса сил, поиск ресурсов и обработка разочарования в профессии или в
                                    своих навыках{' '}
                                </li>
                                <li>Супервизионные отношения</li>
                                <li>Обработка внутренних конфликтов</li>
                                <li>Формирование индивидуального стиля консультанта</li>
                                <li>Профессиональные границы психолога-консультанта</li>
                                <li>Понимание целей и задач консультирования, психотерапии, самопознания</li>
                                <li>
                                    Восприятие критики (клиенты, коллеги, супервизор, собственный терапевт, окружение)
                                </li>
                                <li>
                                    Формирование профессиональных отношений. Начало, заключение контракта, формирование
                                    стабильных долгосрочных отношений, завершение отношений консультант-клиент
                                </li>
                                <li>Стабильная мотивация консультанта</li>
                                <li>Работа над профессиональными трудностями в формате обучения, супервизии</li>
                                <li>
                                    Формирование постобучающей линии развития (супервизорские и интервизорские группы,
                                    поддержание навыков, дополнительное обучение)
                                </li>
                                <li>Перспективы дальнейшего обучения и развития</li>
                            </ol>

                            <span className={'LongCourse__block-info__title'}>
                                Блок 5. Техники психологического консультирования в разных подходах
                            </span>
                            <ol>
                                <li>Применение феноменологического метода</li>
                                <li>Техники гештальт-подхода</li>
                                <li>Техники транзактного анализа</li>
                                <li>Техники экзистенциального анализа и логотерапии</li>
                                <li>Развитие психотерапевтической памяти, мышления и интуиции</li>
                            </ol>
                        </div>

                        <div className={'LongCourse__block-info__author'}>
                            <span className={'LongCourse__block-info__title'}>Преподаватели</span>

                            <p>
                                Для разработки программы мы привлекли специалистов, постоянно занятых в сфере
                                консультирования не менее 10 лет.
                            </p>
                            <p>
                                Модуль сгруппирован под каждого преподавателя исходя из его опыта. Формат обучения
                                спроектирован, чтобы преподаватели делились своими передовыми знаниями и навыками.
                                Полный список преподавателей на данный момент уточняется.
                            </p>
                        </div>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <BlockTitle children={`Длинный курс под номером ${props.id} не найден`} className={'Page__block'} />
                </>
            );
    }
};

/*
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
* */
