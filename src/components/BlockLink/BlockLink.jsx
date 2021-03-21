import React from 'react';
import './BlockLink.css';
import { Link } from '../Link/Link'

export const BlockLink = ({ ...props }) => {
    return (
        <div className={'BlockLink ' + props.className}>
            <Link children={props.children} path={props.path} />
        </div>
    );
};
