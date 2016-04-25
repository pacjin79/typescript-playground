///<reference path="../typings/main.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Router, Route,
    hashHistory, Link,
    IndexRoute
} from 'react-router';

class Application extends React.Component<{}, void> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class About extends React.Component<{}, void> {
    constructor(){
        super();
    }

    render(){
        return (
            <h1>About</h1>
        );
    }
}

class Home extends React.Component<{}, void> {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>home</h1>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Application}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("bootstrapContainer")
);