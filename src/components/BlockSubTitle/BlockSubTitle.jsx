import React from 'react';
import './BlockSubTitle.css';

export const BlockSubTitle = ({ ...props }) => {
    return (
        <div className={'BlockSubTitle ' + props.className} id={props.id}>
            {props.children}
        </div>
    );
};
