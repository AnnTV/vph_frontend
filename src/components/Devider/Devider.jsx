import React from 'react';
import './Devider.css';

export const Devider = ({ ...props }) => {
    return <div className={'Devider ' + props.className} style={{ width: `${props.width}px` }}></div>;
};
