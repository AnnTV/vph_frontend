/* eslint-disable max-len */
import React from 'react';

import { Link } from '../../components/Link/Link';
import Slider from 'react-slick';
import { Card } from '../../components/Card/Card';
import './Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MainPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={'Page'}>
            <article className={'Page__block Main_first-block'}>
                <div className={'Main_first-block__text-info'}>
                    <section className={'Main_first-block__label'}>
                        <span>Обучаем</span>
                        <span>практике</span>
                    </section>
                    <section className={'Main_first-block__slogan'}>
                        Учебные программы спроектированы с учетом запросов слушателей и требований рынка. Вы учитесь
                        тому, что актуально сейчас.
                    </section>
                </div>
                <section className={'Main_first-block__urls'}>
                    <ul>
                        <li>
                            <Link to="/tacos">Психологические науки</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Управление продуктами</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Современные технологии</Link>
                        </li>
                    </ul>
                </section>
            </article>
            <article className={'Page__block Main_second-block'}>
                <Slider {...settings} className={'Main_second-block__slider'}>
                    <Card
                        title={'Ориентация на практику'}
                        text={
                            'Мы выбрали исключительно ' +
                            'прикладные направления для обучения: ' +
                            'психологические науки, педагогические науки, ' +
                            'создание  и управление продуктами. Мастерство в них ' +
                            'нарабатывается через постоянную практику. Поэтому ' +
                            'обучение должно давать слушателям помимо знаний качественный ' +
                            'практический опыт.'
                        }
                    />
                    <Card
                        title={'Привлечение экспертов'}
                        text={
                            'Эксперты, которых мы привлекаем для создания наших образовательных продуктов — гарантия, что получаемый нашими слушателями опыт актуален сегодня. Просто привлечь эксперта — только половина дела. Эксперту важно дать инструменты для передачи своего опыта. В этом помогает современная методология и образовательные технологии.'
                        }
                    />
                    <Card
                        title={'Постоянное развитие'}
                        text={
                            'Мы пришли в наши профессии ради постоянного развития. Экспертиза в них — постоянный вызов и высокая планка качества. Мы учим, как оставаться экспертом на протяжении всего периода карьеры. Наши программы постоянно обновляются с учетом новых реалий нашего мира и изменяющихся запросов. Мы изменяемся и растем вместе.'
                        }
                    />
                </Slider>
            </article>
        </div>
    );
};

/*
<div className={'Main_first-block__text-info'}>
                    <section className={'Main_first-block__label'}>Обучаем практике</section>
                    <section className={'Main_first-block__slogan'}>xxx</section>
                </div>
                <section className={'Main_first-block__urls'}>xxx</section> 
*/
