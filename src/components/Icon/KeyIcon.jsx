/* eslint-disable max-len */
import React from 'react';

import './Icon.css';

export const KeyIcon = ({ width, height, className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={'Icon ' + className}
            viewBox={`0 0 44 24`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M23.3 8C21.66 3.34 17.22 0 12 0C5.38 0 0 5.38 0 12C0 18.62 5.38 24 12 24C17.22 24 21.66 20.66 23.3 16H32V24H40V16H44V8H23.3ZM12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16Z" fill="black"/>
        </svg>
    );
};
