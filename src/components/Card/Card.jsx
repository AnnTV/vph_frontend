import React from 'react';
import { Devider } from '../Devider/Devider';
import './Card.css';

export const Card = ({ ...props }) => {
    return (
        <div className={'Card ' + props.className}>
            <span className={'Card__title'}>{props.title}</span>
            <Devider width={240} />
            <span className={'Card__text'}>{props.text}</span>
        </div>
    );
};
