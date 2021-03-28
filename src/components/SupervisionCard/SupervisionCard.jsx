import React from 'react';
import './SupervisionCard.css';
import { NavHashLink } from '../Link/Link';
import { AuthorIcon } from '../Icon/AuthorIcon';
import { CalendarIcon } from '../Icon/CalendarIcon';
import { RegularIcon } from '../Icon/RegularIcon';
import { MoneyIcon } from '../Icon/MoneyIcon';

export const SupervisionCard = ({ ...props }) => {
    return (
        <div className={'SupervisionCard ' + props.className} id={`s_${props.children.id}`}>
            <div className={'SupervisionCard__title'}>
                <span>{props.children.title}</span>
                <span>{props.children.subtitle}</span>
            </div>
            <div className={'SupervisionCard__body'}>
                <div className={'SupervisionCard__main-info'}>

                    <div className={'SupervisionCard__main-info-details'}>
                        <p>{props.children.desc}</p>
                    </div>

                    <div className={'SupervisionCard__main-info-details'}>
                        <div>
                            <AuthorIcon width={24} height={24} />
                            <strong>Ведущий:</strong>
                        </div>

                        <span className={'SupervisionCard__text'}>
                             {props.children.author}
                        </span>
                    </div>

                    <div className={'SupervisionCard__main-info-details'}>
                        <div>
                            <CalendarIcon  width={24} height={24}/>
                            <strong>Время проведения:</strong>
                        </div>

                        <span className={'SupervisionCard__text'}>{props.children.timetable}</span>
                    </div>

                    <div className={'SupervisionCard__main-info-details'}>
                        <div>
                            <RegularIcon  width={24} height={24}/>
                            <strong>Регулярность:</strong>
                        </div>
                        <span className={'SupervisionCard__text'}>{props.children.regularity}</span>
                    </div>

                    <div className={'SupervisionCard__main-info-details'}>
                        <div>
                            <MoneyIcon width={24} height={24} />
                            <strong>Стоймость:</strong>
                        </div>
                        <span className={'SupervisionCard__text'}>{props.children.cost}</span>
                    </div>

                    <div className={'SupervisionCard__main-info-details'}>
                        <span className={'SupervisionCard__text'}>*Участие по предварительной записи</span>
                    </div>
                </div>

                <div className={'SupervisionCard__cost-and-more'}>
                    <NavHashLink
                        path={`/education/supervision#form`}
                        children={'Записаться'}
                    />
                </div>
            </div>
        </div>
    );
};
