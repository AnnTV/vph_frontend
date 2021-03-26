import React from 'react';

import { NavLink } from '../Link/Link';
import { routes } from '../../utils/routes';
import { slide as Menu } from 'react-burger-menu';
import { ALink } from '../Link/Link';
import { links } from '../../utils/links';

import { InstagramIcon, WhatsAppIcon, FacebookIcon } from '../Icon';

import './Navbar.css';

export const Navbar = ({ ...props }) => {
    return (
        <>
            <nav className={'Navbar ' + props.className}>
                {routes.slice(0, 3).map((item, idx) => (
                    <NavLink path={item.path} children={item.text} className={'Navbar_link'} activeClassName="active" />
                ))}
            </nav>
            <Menu
                width={280}
                right
                noOverlay
                disableCloseOnEsc
                className={'BurgerMenu'}
                outerContainerId={'outer-container'}
            >
                {routes.slice(0, 4).map((item, idx) => (
                    <NavLink
                        path={item.path}
                        children={item.text}
                        className={'BurgerMenu_link'}
                        activeClassName="active"
                    />
                ))}
                <div className={'BurgerMenu_icons'}>
                    <ALink path={links.instagram} children={<InstagramIcon width={24} height={24} />} />
                    <ALink path={links.facebook} children={<FacebookIcon width={24} height={24} />} />
                    <ALink path={links.watsapp} children={<WhatsAppIcon width={24} height={24} />} />
                </div>
            </Menu>
        </>
    );
};
