import React from 'react';
import { Route } from 'react-router-dom';

export const routes = [
    {
        path: '/main',
        text: 'Главная',
        component: <h2>Главная</h2>,
    },
    {
        path: '/education',
        text: 'Образование',
        component: <h2>Образование</h2>,
    },
    {
        path: '/services',
        text: 'Услуги',
        component: <h2>Услуги</h2>,
    },
    {
        path: '/about',
        text: 'О нас',
        component: <h2>О нас</h2>,
    },
    {
        path: '/news',
        text: 'Новости',
        component: <h2>Новости</h2>,
    },
    {
        path: '/contacts',
        text: 'Контакты',
        component: <h2>Контакты</h2>,
    },
];

export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};
