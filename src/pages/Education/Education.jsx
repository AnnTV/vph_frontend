/* eslint-disable max-len */
import React from 'react';
import { Devider } from '../../components/Devider/Devider';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { BlockSubTitle } from '../../components/BlockSubTitle/BlockSubTitle';
import { Accordion } from '../../components/Accordion/Accordion';
import { accordionData, shortCourses } from '../../utils/infoData';

import './Education.css';
import { ShortCourseCard } from '../../components/ShortCourseCard/ShortCourseCard';

export const EducationPage = () => {
    return (
        <div className={'Page'}>
            <BlockTitle
                id={'long_courses'}
                children={'Направления обучения'}
                className={'Page__block'}
            />
            <BlockSubTitle children={'Долгосрочные программы — путь от специалиста к эксперту'} className={'Page__block'} />

            <div className={'Page__block Education_accordion-block'}>
                <Accordion items={accordionData} className={'Education_accordion'} />
            </div>

            <BlockSubTitle
                id={'short_courses'}
                children={'Краткосрочные курсы — способ расширить экспертизу'}
                className={'Page__block'}
            />

            <div className={'Page__block Education__short_courses'}>
                <ul className={'Education__short_courses_ul'}>
                    {
                        shortCourses.map(item => (
                            <li key={item.id}>
                                <ShortCourseCard title={item.title} id={item.id} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Devider className={'Page__devider'}/>
        </div>
    );
};
