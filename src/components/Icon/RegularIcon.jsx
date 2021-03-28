/* eslint-disable max-len */
import React from 'react';

import './Icon.css';

export const RegularIcon = ({ width, height, className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={'Icon ' + className}
            viewBox={`0 0 512 512`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g xmlns="http://www.w3.org/2000/svg"><path d="m437.034 75.008c-101.954-101.954-266.412-99.03-365.02 3.02v-22c0-8.82-7.18-16-16-16h-32c-8.82 0-16 7.18-16 16v120c0 8.82 7.18 16 16 16h112c8.82 0 16-7.18 16-16v-32c0-8.82-7.18-16-16-16h-23.12c36.41-40.87 87.71-64 143.12-64 105.87 0 192 86.13 192 192s-86.13 192-192 192-192-86.13-192-192c0-17.64-14.35-32-32-32s-32 14.36-32 32c0 68.38 26.63 132.67 74.98 181.02 100.045 100.045 261.986 100.054 362.04 0 100.045-100.046 100.053-261.987 0-362.04z"/></g>
        </svg>
    );
};
