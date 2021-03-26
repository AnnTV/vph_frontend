import React from 'react';
import { Devider } from '../Devider/Devider';
import './TeamCard.css';

export const TeamCard = ({ ...props }) => {
    return (
        <div className={'TeamCard ' + props.className}>
            <div className={'TeamCard__avatar'} style={{backgroundImage: `url("../../images/team/${props.avatar}")`}} />
            <div className={'TeamCard__body'}>
                <span className={'TeamCard__name'}>{props.name}</span>
                <Devider width={240} />
                <div className={'TeamCard__info'}>
                    {
                        props.about.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
