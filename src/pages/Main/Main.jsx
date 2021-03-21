/* eslint-disable max-len */
import React from 'react';

import { Link } from '../../components/Link/Link';
import Slider from 'react-slick';
import { Card } from '../../components/Card/Card';
import { Accordion } from '../../components/Accordion/Accordion';

import './Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { BlockLink } from '../../components/BlockLink/BlockLink';
import { Devider } from '../../components/Devider/Devider';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { caruselSettings } from '../../utils/utilData';
import { labelTexts, sloganText, urlsLinks, cardsData, accordionData } from '../../utils/infoData';

export const MainPage = () => {
    return (
        <div className={'Page'}>
            <article className={'Page__block Main_first-block'}>
                <div className={'Main_first-block__text-info'}>
                    <section className={'Main_first-block__label'}>
                        {
                            labelTexts.map((item, idx) => (
                                <span key={idx}>{item}</span>
                            ))
                        }
                    </section>
                    <section className={'Main_first-block__slogan'}>
                        {sloganText}
                    </section>
                </div>
                <section className={'Main_first-block__urls'}>
                    <ul>
                        {
                            urlsLinks.map((item, idx) => (
                                <li key={idx}>
                                    <Link to={item.path}>{item.children}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </article>

            <article className={'Page__block Main_second-block'}>
                <Slider {...caruselSettings} className={'Main_second-block__slider'}>
                    {
                        cardsData.map((item, idx) => (
                            <Card
                                title={item.title}
                                text={item.text}
                                ket={idx}
                            />
                        ))
                    }
                </Slider>
            </article>

            <BlockLink children={'Более подробно о нашем подходе'} path={''} className={'Page__block'} />

            <BlockTitle children={'Направления обучения'} className={'Page__block'}/>

            <article className={'Page__block Main_accordion-block'}>
                <Accordion items={accordionData} />
            </article>

            <BlockLink children={'Подробнее о направлении и обучении'} path={''} className={'Page__block'} />

            <BlockTitle children={'Оставайтесь на связи'} className={'Page__block'}/>

            <article className={'Page__block Main_contact-block'} >
                <section className={'Main_contact-block__text'}>
                    <p>
                        Мы собрали команду единомышленников и работаем как одна методическая группа для разработки программ.
                    </p>
                    <p>
                        Если вы разделяете наши ценности, приглашаем к сотрудничеству на постоянной или проектной основе, напишите нам.
                    </p>
                </section>

                <section className={'Main_contact-block__form'}>
                    <ContactForm />
                </section>

            </article>

            <Devider className={'Page__devider'}/>
        </div>
    );
};
