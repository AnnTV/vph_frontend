import React from 'react';

import { NavLink } from '../Link/Link';
import { routes } from '../../utils/routes';

import './Navbar.css';

export const Navbar = ({ ...props }) => {
    return (
        <nav className={'Navbar ' + props.className}>
            {routes.slice(0, 5).map((item, idx) => (
                <NavLink
                    path={item.path}
                    children={item.text}
                    className={'Navbar_link'}
                    activeClassName="active"
                />
            ))}
        </nav>
    );
};
