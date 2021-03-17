import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './utils/routes';
import { apiUsers } from './utils/api';
import './App.css';

import { Header } from './components/Header/Header';

class App extends Component {
    state = { users: [] };

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
    };

    render() {
        return (
            <Router className="App" id="outer-container">
                <Header />
                <Switch id={'page-id'}>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Redirect from="/" to="/main" />
                </Switch>
            </Router>
        );
    }
}

export default App;

/*
<Router className="App">
                <h1>Users</h1>
                {this.state.users.map((user) => (
                    <div key={user.id}>{user.username}</div>
                ))}
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </Router>
*/
