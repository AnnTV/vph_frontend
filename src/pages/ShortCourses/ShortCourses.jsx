/* eslint-disable max-len */
import React from 'react';
import { Devider } from '../../components/Devider/Devider';
import './ShortCourses.css';
import { useParams } from 'react-router';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { BlockSubTitle } from '../../components/BlockSubTitle/BlockSubTitle';

export const ShortCourses = () => {
    let { id } = useParams();

    return (
        <div className={'Page'}>
            <ShortCourse id={id} />
            <Devider className={'Page__devider'}/>
        </div>
    );
};

const ShortCourse = ({...props}) => {
    console.log(props.id)
   switch (props.id) {
       case '0':
            return (
                <>
                    <BlockTitle
                        children={'Зависимость и созависимость '}
                        className={'Page__block'}
                    />
                    <BlockSubTitle children={'Октябрь — Декабрь (2020-2021)'} className={'Page__block'} />

                    <div className={'Page__block ShortCourse__block'}>
                        <div className={'Page__block__text'}>
                            <p>Программа рассчитана на психологов-практиков с базовой подготовкой в одном из методов гуманистической психотерапии, выпускников курса гештальт-терапии 2-ой ступени, а также всех интересующихся темами зависимости и созависимости.</p>
                            <p>Помимо лекарственной зависимости, наркомании и других химических форм зависимости сегодня под зависимостью понимают также поведенческие формы: интернет-зависимость, игроманию, шопоголию, переедание, сексуальные формы зависимости и многие другие. </p>
                            <p>Под созавимостью часто понимают эмоциональную зависимость от другого человека. Программа дает подробный разбор основных форм завимости и созависимости, с которыми часто обращаются к психотерапевту.</p>
                        </div>
                    </div>

                    <BlockSubTitle children={'Диплом о повышении квалификации  144 часа   9 двухдневных модулей'} className={'Page__block'} level={1} />

                    <div className={'Page__block ShortCourse__block-info'}>
                        <div className={'ShortCourse__block-info__course'}>
                            <span className={'ShortCourse__block-info__title'}>Знания и навыки</span>
                            <ul>
                                <li>теория и практика работы с темой зависимости и созависимости</li>
                                <li>взаимодействие психотерапевта и медицинских специалистов, специалистов реабилитационных центров</li>
                                <li>навыки осознавания и работы с собственными паттернов зависимого и созависимого поведения; восстановления телесных ощущений, состояний, чувств, эмоций; опыт использования их в работе с клиентом</li>
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
                                <li>обсуждения затруднений психотерапевтической работы каждой темы через кейс-метод</li>
                                <li>терапевтические упражнения для развития навыков работы с запросом клиента и развитие собственного психотерапевтического инструментария</li>
                                <li>групповые формы работы</li>
                                <li>дискуссии участников</li>
                            </ul>
                            <div>
                                <span className={'ShortCourse__block-info__title'}>Стоимость модуля:</span>
                                <span className={'ShortCourse__block-info__cost'}>9 000 рублей</span>
                            </div>
                        </div>
                        <div className={'ShortCourse__block-info__author'}>
                            <span className={'ShortCourse__block-info__title'}>Программу проводит</span>
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
