import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import Home from './pages/home';
import history from './history';

export default class MRouters extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
}
