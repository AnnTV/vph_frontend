import React from 'react';
import { Route } from 'react-router-dom';

import { MainPage } from '../pages/Main/Main';
import { EducationPage } from '../pages/Education/Education';
import { AboutPage } from '../pages/About/About';
import { ShortCourses } from '../pages/ShortCourses/ShortCourses';

export const routes = [
    {
        path: '/main',
        text: 'Главная',
        component: MainPage,
    },
    {
        path: '/education',
        text: 'Образование',
        component: EducationPage,
    },
    {
        path: '/services',
        text: 'Услуги',
        component: MainPage,
    },
    {
        path: '/about',
        text: 'О нас',
        component: AboutPage,
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
    {
        path: '/our_view',
        text: 'Наш подход',
        component: MainPage,
    },
    {
        path: '/short_course/:id',
        text: 'Образование',
        component: ShortCourses,
    },
];

export const RouteWithSubRoutes = (route) => {
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />;
};
