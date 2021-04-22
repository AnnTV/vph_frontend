/* eslint-disable max-len */
import React from 'react';
import {
    Accordion as SuperAccordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { Devider } from '../../components/Devider/Devider';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';

import './About.css';
import { KeyIcon } from '../../components/Icon/KeyIcon';
import Slider from 'react-slick';
import { caruselTeam } from '../../utils/utilData';
import { TeamCard } from '../../components/TeamCard/TeamCard';
import { cardsTeamData } from '../../utils/infoData';

export const AboutPage = () => {
    return (
        <div className={'Page'}>
            <div className={'Page__block'}>
            <span className={'About__main-label'}>
                Высшая психологическая школа учит профессии по-новому
            </span>

            <span className={'About__main-descr'}>
                Если вы интересуетесь психологией и хотите развиваться в профессиональном сообществе, овладеть современными эффективными подходами и оставаться экспертом на протяжении всей карьеры, приходите к нам, в Высшую психологическую школу. Такой подход гарантирует, что вы «повзрослеете» в профессии: обогатитесь современными практиками и сможете консультировать с первого дня после обучения, получив диплом установленного образца.
            </span>
            </div>
            <div className={'Page__block About__main-info'}>
                <div>
                    <p>
                        Обучение психологов практике консультирования
                    </p>
                </div>
                <div>
                    <span>НАШ ПОДХОД</span>
                    <ul>
                        <li>Мы делимся свежим взглядом на обучение практической психологии</li>
                        <li>Ведём студентов к мастерству через эксперименты и с опорой на экспертный опыт</li>
                        <li>Раскрываем индивидуальные особенности наших слушателей. Даём обратную связь каждому студенту
                            и помогаем освоить лучшие практики в профессии
                        </li>
                    </ul>
                </div>
            </div>

            <div className={'Page__block About__main-slogan'}>
                Обучение психологов практике консультирования
            </div>


            <BlockTitle children={'В обучении мы используем три ключа:'} className={'Page__block'}/>

            <div className={'Page__block About_accordion-block'}>
                <SuperAccordion
                    className={'About_accordion'}
                    allowZeroExpanded
                    preExpanded={['uuid_0']}
                >
                    <AccordionItem uuid={`uuid_0`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                НАСТАВНИЧЕСТВО
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p>Наши <strong>эксперты-практики</strong> постоянно совершенствуются в профессии.
                                        Они помогают студентам сократить путь к мастерству, избежать ошибок новичка или
                                        вовремя их проанализировать.</p>
                                    <p>А наши программы курсов проходят верификацию у экспертов, постоянно работающих в
                                        профессии. Так сопровождение специалистом происходит на всех этапах
                                        обучения.</p>
                                    <p>Десятилетний опыт и знания современных исследований в психологии дают нам
                                        основание делиться со студентами только лучшим. Это проверенные методы, которые
                                        точно работают и не имеют негативных последствий.</p>
                                    <p> При подготовке программ и курсов мы изучаем актуальность практических знаний у
                                        психологов на сегодняшний день. Узнаем самые распространенные запросы на
                                        супервизии у студентов. А в процессе обучения помогаем ориентироваться в
                                        реальных клиентских запросах, подсвечиваем проблемные места и слепые зоны в
                                        работе с клиентами. Проработка этих вопросов помогает совершенствовать
                                        содержание программы.</p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid={`uuid_1`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                КЕЙС-МЕТОД
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p>Мы в обучении практики используем <strong>Кейс-метод</strong> , который помогает
                                        получить больше практического опыта студентам. В ходе него участники постигают
                                        суть реальной или приближенной к реальности ситуации, предлагают возможные
                                        решения и выбирают лучшее. Этот метод развивает терапевтическое зрение,
                                        системное мышление и помогает применить знания на практике. </p>
                                    <p>
                                        Психотерапевтическая компетентность формируется на разных этапах проработки
                                        кейса:
                                        <ul>
                                            <li>выбор кейса под конкретный запрос;</li>
                                            <li>анализ каждого этапа ситуации;</li>
                                            <li>выбор стратегии развития ситуации;</li>
                                            <li>ассимиляция полученного опыта путем соотнесения со своим.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid={`uuid_2`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ЭТИКА В ПСИХОЛОГИИ
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p>Психолог не тот, кто только слушает клиента и решает его проблему, а тот, кто
                                        видит сущностное в человеке. В своих программах мы детально прорабатываем все
                                        аспекты этического кодекса, которого требует наша профессия, и предлагаем
                                        коллегам действовать в морально-нравственной парадигме.</p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </SuperAccordion>
            </div>

            <BlockTitle children={'Команда Высшей психологической школы'} className={'Page__block'}/>


            <div className={'Page__block About_team-block'}>
                <Slider {...caruselTeam} className={'About_team-block__slider'}>
                    {
                        cardsTeamData.map((item, idx) => (
                            <TeamCard name={item.name} avatar={item.avatar} about={item.about}/>
                        ))
                    }
                </Slider>
            </div>

            <div
                className={'Page__block About__main-slogan'}
            >
                <p>Мы команда психологов-практиков, которые постоянно обновляют свои знания и пробуют современные
                    эффективные практики</p>
            </div>


            <Devider className={'Page__devider'}/>
        </div>
    );
};
