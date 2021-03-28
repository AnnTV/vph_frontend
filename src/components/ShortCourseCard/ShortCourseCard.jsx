import React from 'react';
import './ShortCourseCard.css';
import { Link } from '../Link/Link';

export const ShortCourseCard = ({ ...props }) => {
    return (
        <div className={'ShortCourseCard ' + props.className}>
            <span className={'ShortCoursCard__title'}>{props.title}</span>
            <Link path={'/education/short_course/' + props.id} children={'Подробнее...'} />
        </div>
    );
};
