/* eslint-disable max-len */
import React from 'react';
import {
    Accordion as SuperAccordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { Devider } from '../../components/Devider/Devider';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';

import './About.css';
import { KeyIcon } from '../../components/Icon/KeyIcon';
import { ALink } from '../../components/Link/Link';
import Slider from 'react-slick';
import { caruselTeam } from '../../utils/utilData';
import { Card } from '../../components/Card/Card';
import { TeamCard } from '../../components/TeamCard/TeamCard';
import { cardsTeamData } from '../../utils/infoData';

export const AboutPage = () => {
    return (
        <div className={'Page'}>
            <span
                className={'Page__block About__main-label'}
            >
                Высшая психологическая школа учит профессии по-новому!
            </span>

            <div className={'Page__block About__main-info'}>
                <div>
                    <p>
                        Наша миссия - Обучение практике.
                    </p>
                    <p>
                        Работа практическом консультировании в 1й день после получения диплома.
                    </p>
                </div>
                <div>
                    <span>Что мы делаем?</span>
                    <ul>
                        <li>Делимся свежим взглядом на обучение практической психологии</li>
                        <li>Гарантируем, что наши студенты смогут начать свою практику в 1й день после получения диплома.</li>
                        <li>Обучаем психологов РФ (русско-говорящего сообщества) специфики практической работы в современных эффективных подходах с возможностью применить опыт в различных жизненных ситуациях.</li>
                    </ul>
                </div>
            </div>

            <div
                className={'Page__block About__main-slogan'}
            >
                <span>Кратко:</span>Обучение практике консультирования для психологов
            </div>

            <BlockTitle children={'Наше Видиние'} className={'Page__block'}/>

            <div className={'Page__block About__our-view'}>
                <p>
                    Наша задача дать им именно то, за чем они пришли — лучшие практики для работы в профессии. Вместе с нашими студентами мы ищем способы достичь мастерства через эксперименты с открытыми глазами и опорой на экспертный опыт.
                </p>
                <p>
                    Психолог не тот, кто только слушает клиента и решает его проблему, а тот, кто видит СУЩНОСТНОЕ в человеке.
                </p>
                <p>
                    Мы даем возможность приобрести опыт в работе и получить обратную связь для каждого студента. Чем выше качество опыта, тем выше мастерство.
                </p>
            </div>

            <BlockTitle children={'Наш подход к образованию  -  три ключа (от начинающего до эксперта): \n'} className={'Page__block'}/>

            <div className={'Page__block About_accordion-block'}>
                <SuperAccordion
                    className={'About_accordion'}
                    allowZeroExpanded
                    preExpanded={['uuid_0']}
                >
                    <AccordionItem uuid={`uuid_0`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Ключ первый
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p>Наши <strong>эксперты-практики</strong> постоянно совершенствуются в профессии, и готовы помогать студентам сократить путь к мастерству, и помочь избежать ошибок новичка или во время их проанализировать.</p>
                                    <p>Все наши программы проходят верификацию у экспертов, постоянно работающих в профессии. Так сопровождение специалистом происходит на всех этапах обучения.</p>
                                    <p> Десятилетний опыт и знания современных исследований в психологии дает нам основание делится со студентами только лучшим! Это методы, которые точно работают, при каких ситуациях они работают, что необходимо чаще, что реже, что эффективно, что откровенно вредно и опасно. При подготовке программ и курсов мы исследуем актуальность практических знаний у психологов на сегодняшний день. Узнаем какие запросы часто встречаются на Супервизии у студентов. Ориентируемся в тонкостях практической психологии, в узких областях клиентских запросов, специфике работы в различных жизненных ситуациях клиента. </p>
                                    <p>В дружественной обстановке подсвечиваем проблемные места и слепые зоны при обучении работы с клиентами на программах. Проработка этих вопросов помогает разработать содержание программы.</p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid={`uuid_1`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Ключ второй
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p>Мы в обучении практики используем <strong>Кейс-метод</strong>.</p>
                                    <p>
                                       <i>Кейс-метод</i> - то Метод конкретных ситуаций (англ. Case method, кейс-метод, метод кейсов, метод ситуационного анализа) — техника обучения, использующая описание реальных экономических, социальных и бизнес-ситуаций. Обучающиеся должны исследовать ситуацию, разобраться в сути проблем, предложить возможные решения и выбрать лучшее из них. Кейсы основываются на реальном фактическом материале или же приближены к реальной ситуации.
                                        <ALink path={'https://ru.wikipedia.org/wiki/Метод_кейсов'} children={'Подробнее...'} />
                                    </p>
                                    <p>
                                        Для практика - психолога, обучающегося на любой специализации важно получить больше реального опыта. В этом помогает кейс-метод. В безопасной дружественной обстановке этот метод развивает терапевтическое зрение, системное мышление и помогает применить на практике усвоенные ранее знания. Психотерапевтическая компетентность нарабатывается при:
                                        <ul>
                                            <li>верно подобранном кейсе под конкретный запрос</li>
                                            <li>анализе на каждом этапе разбора ситуаций в кейсе</li>
                                            <li>отработки необходимых психотерапевтических навыков для прохождения вариантов развития ситуации в кейсе</li>
                                            <li>ассимиляция полученного опыта, соотнесение со своим, поиск точек своего собственного развития, запроса на Супервизию и личную психотерапию</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid={`uuid_2`}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Ключ третий
                                <KeyIcon width={22} height={12} className={'About_accordion__icon'}/>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={'About_accordion__panel'}>
                                <div className={'About_accordion__text'}>
                                    <p><strong>Этика в Психологии</strong></p>
                                    <p>Наша профессия требует внимательное и аккуратное соблюдение Этического кодекса. Мы на всех программах детально прорабатываем все аспекты ЭК.</p>
                                    <p>Конфиденциальность – обязанность каждого консультанта использовать информацию о клиенте только в профессиональных целях и никогда с другими намерениями.</p>
                                    <p>Наш подход — максимально персонализирован — учитывает и позволяет результативно задействовать индивидуальные особенности наших слушателей.
                                    Наши выпускники — это специалисты с дипломом государственного образца, вовлеченные в профессиональное сообщество и стремящиеся как оставаться экспертом на протяжении всего периода карьеры.</p>
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
                            <TeamCard name={item.name} avatar={item.avatar} about={item.about} />
                        ))
                    }
                </Slider>
            </div>

            <div
                className={'Page__block About__main-slogan'}
            >
                <span>Мы команда</span>
                <p>Нас объединяет постоянное стремление к знаниям и практикам эффективным сегодня </p>
                <p>Мы изучаем то, что работает в психологической практике</p>
            </div>


            <Devider className={'Page__devider'}/>
        </div>
    );
};
