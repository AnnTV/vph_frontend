/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router';
import './Payment.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { Pay } from '../../components/Pay/Pay';
import { payFormOptions } from '../../utils/infoData';
import { CourseForm } from '../../components/CourseForm/CourseForm';
// import { courseOptions } from '../../utils/infoData';

export const Payment = () => {
    // AnnTV
    let { id } = useParams();

    return (
        <div className={'Page'}>
            <BlockTitle children={`Оплата за курс: ${payFormOptions[id].title}`} className={'Page__block'} />

            <article className={'Page__block Payment_block'}>
                <section className={'Payment_block__form'}>
                    <Pay {...payFormOptions[id]} />
                </section>
            </article>

            <Devider className={'Page__devider'} />
        </div>
    );
};
