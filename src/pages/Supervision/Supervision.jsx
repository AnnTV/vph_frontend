/* eslint-disable max-len */
import React from 'react';
import './Supervision.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { supervisionCards } from '../../utils/infoData';
import { SupervisionCard } from '../../components/SupervisionCard/SupervisionCard';
import { CourseForm } from '../../components/CourseForm/CourseForm';

export const Supervision = () => {
    return (
        <div className={'Page'}>
            <BlockTitle
                children={'Супервизии'}
                className={'Page__block'}
            />

            <div className={'Page__block News_courses'}>
                <ul className={'News_courses_ul'}>
                    {
                        supervisionCards.map(item => (
                            <li key={item.id}>
                                <SupervisionCard children={item} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <BlockTitle
                id={'form'}
                children={'Записаться на курс'}
                className={'Page__block'}
            />
            <article className={'Page__block Course_contact-block'} >
                <section className={'Course_contact-block__form'}>
                    <CourseForm />
                </section>
            </article>

            <Devider className={'Page__devider'}/>
        </div>
    );
};
