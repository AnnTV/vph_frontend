import React, { useState, useContext } from 'react';

import { NavLink } from '../Link/Link';
import { routes } from '../../utils/routes';
import { slide as Menu } from 'react-burger-menu';
import { ALink } from '../Link/Link';
import { links } from '../../utils/links';

import { InstagramIcon, WhatsAppIcon, FacebookIcon } from '../Icon';

import './Navbar.css';

// make a new context
const MenuContext = React.createContext();

// create the provider
const MenuProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false);

    return (
        <MenuContext.Provider
            value={{
                isMenuOpen: menuOpenState,
                toggleMenu: () => setMenuOpenState(!menuOpenState),
                stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

export const Navbar = ({ ...props }) => {
    return (
        <>
            <nav className={'Navbar ' + props.className}>
                {routes.slice(0, 4).map((item, idx) => (
                    <NavLink
                        key={idx}
                        path={item.path}
                        children={item.text}
                        className={'Navbar_link'}
                        activeClassName="active"
                    />
                ))}
            </nav>
            <MenuProvider>
                <BurgerMenu />
            </MenuProvider>
        </>
    );
};

export const BurgerMenu = () => {
    const ctx = useContext(MenuContext);
    return (
        <Menu
            width={280}
            right
            noOverlay
            disableCloseOnEsc
            className={'BurgerMenu'}
            outerContainerId={'outer-container'}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
        >
            {routes.slice(0, 5).map((item, idx) => (
                <NavLink
                    path={item.path}
                    children={item.text}
                    className={'BurgerMenu_link'}
                    activeClassName="active"
                    onClick={ctx.toggleMenu}
                    key={idx}
                />
            ))}
            <div className={'BurgerMenu_icons'}>
                <ALink path={links.instagram} children={<InstagramIcon width={24} height={24} />} />
                <ALink path={links.facebook} children={<FacebookIcon width={24} height={24} />} />
                <ALink path={links.watsapp} children={<WhatsAppIcon width={24} height={24} />} />
            </div>
        </Menu>
    );
};
