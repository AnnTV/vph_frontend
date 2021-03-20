/* eslint-disable max-len */
import React from 'react';

import './Icon.css';

export const ArrowDownIcon = ({ width, height, className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={'Icon ' + className}
            viewBox={`0 0 48 48`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M40 24L37.18 21.18L26 32.34V8H22V32.34L10.84 21.16L8 24L24 40L40 24Z" fill="#010101"/>
        </svg>
    );
};
