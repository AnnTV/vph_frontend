import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { routes, RouteWithSubRoutes } from './utils/routes';
import { apiUsers } from './utils/api';
import './App.css';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import ScrollToTop from './utils/ScrollToTop';

import 'react-notifications/dist/react-notifications.css';

class App extends Component {
    /*state = { users: [] };

    componentDidMount() {
        apiUsers.getAll().then((res) => {
            this.setState({ users: res });
        });
    }

    _parseUsers = (users) => {
        return users.map((user) => {
            // Parse task information
            return user;
        });
    }; */

    render() {
        return (
            <Router className="App" id="outer-container">
                <Header />
                <ScrollToTop>
                    <Switch id={'page-id'}>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                        <Redirect from="/" to="/main" />
                    </Switch>
                </ScrollToTop>
                <Footer />
                <NotificationContainer />
            </Router>
        );
    }
}

export default App;
