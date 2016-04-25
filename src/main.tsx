///<reference path="../typings/main.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Router, Route,
    hashHistory, Link,
    IndexRoute
} from 'react-router';
import Application from './Application';
import About from './pages/AboutPage';
import Home from './pages/HomePage';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Application}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("bootstrapContainer")
);