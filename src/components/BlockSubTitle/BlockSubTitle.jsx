import React from 'react';
import './BlockSubTitle.css';

export const BlockSubTitle = ({ ...props }) => {
    return (
        <div
            className={'BlockSubTitle ' + props.className + (props.level ? ` BlockSubTitle_level_${props.level}` : '')}
            id={props.id}
        >
            {props.children}
        </div>
    );
};
