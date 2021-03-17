import React from 'react';

import { InstagramIcon, WhatsAppIcon, FacebookIcon } from '../Icon';
import { ButtonLink } from '../Button/Button';
import { ALink } from '../Link/Link';
import { links } from '../../utils/links';

import './Contacts.css';

export const Contacts = ({ ...props }) => {
    return (
        <div className={'Contacts ' + props.className}>
            <div className={'Contacts_icons'}>
                <ALink path={links.instagram} children={<InstagramIcon width={24} height={24} />} />
                <ALink path={links.facebook} children={<FacebookIcon width={24} height={24} />} />
                <ALink path={links.watsapp} children={<WhatsAppIcon width={24} height={24} />} />
            </div>
            <ButtonLink path={'/contacts'} children={'Контакты'} className={'Contacts_btn'} />
        </div>
    );
};
