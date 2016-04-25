import * as React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component<{}, void> {
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

export  default HomePage;