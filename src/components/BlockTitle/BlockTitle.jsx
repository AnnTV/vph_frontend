import React from 'react';
import './BlockTitle.css';

export const BlockTitle = ({ ...props }) => {
    return (
        <div className={'BlockTitle ' + props.className} id={props.id}>
            {props.children}
        </div>
    );
};
