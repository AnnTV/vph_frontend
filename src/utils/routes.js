import React from 'react';
import { Route } from 'react-router-dom';

import { MainPage } from '../pages/Main/Main';

export const routes = [
    {
        path: '/main',
        text: 'Главная',
        component: MainPage,
    },
    {
        path: '/education',
        text: 'Образование',
        component: MainPage,
    },
    {
        path: '/services',
        text: 'Услуги',
        component: MainPage,
    },
    {
        path: '/about',
        text: 'О нас',
        component: MainPage,
    },
    {
        path: '/news',
        text: 'Новости',
        component: MainPage,
    },
    {
        path: '/contacts',
        text: 'Контакты',
        component: MainPage,
    },
];

export const RouteWithSubRoutes = (route) => {
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />;
};
