import React from 'react';

import './Logo.css';

export const Logo = ({ ...props }) => {
    return (
        <img
            src={process.env.PUBLIC_URL + 'images/logo.png'}
            className={'Logo ' + props.className}
        />);
};
