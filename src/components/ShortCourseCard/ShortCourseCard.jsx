import React from 'react';
import './ShortCourseCard.css';
import { Link } from '../Link/Link';

export const ShortCourseCard = ({ ...props }) => {
    //  + props.className
    return (
        <Link path={'/education/short_course/' + props.id}>
            <div className={'ShortCourseCard '}>
                <span className={'ShortCoursCard__title'}>{props.title}</span>
                Подробнее...
            </div>
        </Link>
    );
};
