import React from 'react';
import './Footer.css';
import { Logo } from '../Logo/Logo';

const footerData = {
    adress: [
        '127473 Москва, Россия',
        'ул. Селезневская, д. 11-а к.2',
        'Офис № 521',
    ],
    contacts: [
        'info@hpschool',
        '+7 (995) 895 21 67',
        '+7 (916) 348 23 53',
    ]
};

export const Footer = ({ ...props }) => {
    return (
        <footer className={'Footer ' + props.className}>
            <div>
                <div className={'Footer__logo-block'}>
                    <Logo />
                </div>
                <div className={'Footer__info-block'}>
                    {
                        footerData.adress.map((item, idx) => (
                            <span key={idx}>{item}</span>
                        ))
                    }
                </div>
                <div className={'Footer__info-block'}>
                    {
                        footerData.contacts.map((item, idx) => (
                            <span key={idx}>{item}</span>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};
