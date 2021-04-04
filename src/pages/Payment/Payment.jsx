/* eslint-disable max-len */
import React from 'react';
import './Payment.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { Pay } from '../../components/Pay/Pay';
import { payFormOptions } from '../../utils/infoData';
import { CourseForm } from '../../components/CourseForm/CourseForm';

export const Payment = () => {
    return (
        <div className={'Page'}>
            <BlockTitle children={`Оплата за курс: ${payFormOptions[0].title}`} className={'Page__block'} />

            <article className={'Page__block Payment_block'}>
                <section className={'Payment_block__form'}>
                    <Pay
                        amount={payFormOptions[0].amount}
                        desc={payFormOptions[0].desс}
                        title={payFormOptions[0].title}
                    />
                </section>
            </article>

            <Devider className={'Page__devider'} />
        </div>
    );
};
