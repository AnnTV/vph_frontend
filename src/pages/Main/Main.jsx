import React from 'react';

import { Link } from '../../components/Link/Link';
import './Main.css';

export const MainPage = () => {
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
