///<reference path="../typings/main.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Router, Route,
    hashHistory, Link,
    IndexRoute
} from 'react-router';
import {
    Provider
} from 'react-redux';
import DevTools from '../config/redux/DevTools';
import {ApplicationConfig} from '../config';
import Application from './Application';
import About from './pages/AboutPage';
import Home from './pages/HomePage';

const routes = <Router history={hashHistory}>
    <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
</Router>;

const store = ApplicationConfig.configReduxDev({ pages: {} });
const root = <Provider store={store}>
    <div>
        {routes}
        <DevTools />        
    </div>
</Provider>;

ReactDOM.render(
    root,
    document.getElementById("bootstrapContainer")
);