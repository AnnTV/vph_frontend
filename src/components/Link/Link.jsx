import React from 'react';
import { NavLink as RouterLink, Link as NormalLink } from 'react-router-dom';
import { HashLink as BaseHashLink } from 'react-router-hash-link';
import { NavHashLink as BaseNavHashLink } from 'react-router-hash-link';
import './Link.css';

export const NavLink = ({ ...props }) => {
    return (
        <RouterLink
            to={props.path}
            className={'Link ' + props.className}
            activeClassName="active"
            onClick={props.onClick}
        >
            {props.children}
        </RouterLink>
    );
};

export const ALink = ({ ...props }) => {
    return (
        <a
            href={props.path}
            className={'Link ' + props.className}
            target={'_blank'}
            onClick={props.onClick}
        >
            {props.children}
        </a>
    );
};

export const Link = ({ ...props }) => {
    return (
        <NormalLink
            to={props.path}
            className={'Link ' + props.className}
            onClick={props.onClick}
        >
            {props.children}
        </NormalLink>
    );
};

export const HashLink = ({ ...props }) => {
    return (
        <BaseHashLink
            smooth
            to={props.path}
            className={'Link ' + props.className}
            onClick={props.onClick}
        >
            {props.children}
        </BaseHashLink>
    );
};

export const NavHashLink = ({ ...props }) => {
    return (
        <BaseNavHashLink
            smooth
            to={props.path}
            className={'Link ' + props.className}
            activeClassName="active"
            onClick={props.onClick}
        >
            {props.children}
        </BaseNavHashLink>
    );
};
