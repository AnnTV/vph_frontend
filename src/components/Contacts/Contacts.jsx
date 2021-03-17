import React from 'react';

import { InstagramIcon } from '../Icon';
import { ButtonLink } from '../Button/Button';
import { Link } from '../Link/Link';
import { links } from '../../utils/links';

import './Contacts.css';

export const Contacts = ({ ...props }) => {
    return (
        <div className={'Contacts ' + props.className}>
            <div className={'Contacts_icons'}>
                <Link path={links.instagram} children={<InstagramIcon width={24} height={24} />} />
                <InstagramIcon width={24} height={24} />
                <InstagramIcon width={24} height={24} />
            </div>
            <ButtonLink path={'/contacts'} children={'Контакты'} className={'Contacts_btn'} />
        </div>
    );
};
