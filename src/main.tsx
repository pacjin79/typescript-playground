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
import SelectorPage from './pages/SelectorPage';
import {syncHistoryWithStore} from 'react-router-redux';

const store = ApplicationConfig.configReduxDev({
    pages: {
    },
    products: {
        p1: {
            id: "p1",
            name: "product1",
            description: "Product 1 descr"
        }
    }
});
const history = syncHistoryWithStore(hashHistory, store);
const routes = <Router history={history}>
    <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="/selectors" component={SelectorPage} />
        <Route path="/about" component={About}/>
    </Route>
</Router>;

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