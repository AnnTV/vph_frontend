import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { MainPage } from '../pages/Main/Main';
import { EducationPage } from '../pages/Education/Education';
import { AboutPage } from '../pages/About/About';
import { ShortCourses } from '../pages/ShortCourses/ShortCourses';
import { Contacts } from '../pages/Contacts/Contacts';
import { News } from '../pages/News/News';
import { LongCourses } from '../pages/LognCourses/LognCourses';
import { Supervision } from '../pages/Supervision/Supervision';

const BaseEducation = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <EducationPage />
            </Route>
            <Route path={`${path}/short_course/:id`}>
                <ShortCourses />
            </Route>
            <Route path={`${path}/long_course/:id`}>
                <LongCourses />
            </Route>
            <Route path={`${path}/supervision`}>
                <Supervision />
            </Route>
        </Switch>
    );
}

export const routes = [
    {
        path: '/main',
        text: 'Главная',
        component: MainPage,
    },
    {
        path: '/education',
        text: 'Образование',
        component: BaseEducation,
    },
    {
        path: '/about',
        text: 'О нас',
        component: AboutPage,
    },
    {
        path: '/news',
        text: 'Новости',
        component: News,
    },
    {
        path: '/contacts',
        text: 'Контакты',
        component: Contacts,
    },
    {
        path: '/services',
        text: 'Услуги',
        component: MainPage,
    },
    {
        path: '/our_view',
        text: 'Наш подход',
        component: MainPage,
    },
];

export const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
