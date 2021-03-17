import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './Button.css';

export const ButtonLink = ({ ...props }) => {
    return (
        <RouterLink to={props.path} className={'ButtonLink ' + props.className}>
            {props.children}
        </RouterLink>
    );
};
