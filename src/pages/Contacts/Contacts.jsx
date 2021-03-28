/* eslint-disable max-len */
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './Contacts.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { ContactForm } from '../../components/ContactForm/ContactForm';

export const Contacts = () => {
    return (
        <div className={'Page'}>
            <BlockTitle
                children={'Высшая психологическая школа'}
                className={'Page__block Contacts__main-title'}
            />

            <div className={'Page__block Contacts__main'}>
                <div className={'Contacts__info-block'}>
                    <span className={'Contacts__block-info__title'}>Адрес</span>
                    <div>127473 Москва, Россия</div>
                    <div>ул. Селезневская, д. 11-а к.2</div>
                    <div>Офис № 521</div>
                    <br />
                    <span className={'Contacts__block-info__title'}>Контакты</span>
                    <div><strong>Email:</strong> <span>Info@psyschool.com.ru</span></div>
                    <div><strong>Тел.:</strong> <span>+7 (985)-054-4664</span></div>
                    <div><strong>Тел.:</strong> <span>+7 (995)-895-2167</span></div>
                </div>
                <YMaps className={'Contacts__map-block'}>
                    <Map className={'Contacts__map'} defaultState={{ center: [55.781261, 37.603666], zoom: 14 }} >
                        <Placemark geometry={[55.781261, 37.603666]} />
                    </Map>
                </YMaps>
            </div>

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
