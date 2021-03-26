import React from 'react';

import './Logo.css';

export const Logo = ({ ...props }) => {
    return (
        <img
            src={'../../images/logo.png'}
            className={'Logo ' + props.className}
        />);
};
