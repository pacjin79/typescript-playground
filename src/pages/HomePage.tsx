import * as React from 'react';
import {Link} from 'react-router';
import {
    Motion,
    TransitionMotion,
    StaggeredMotion,
    spring,
    presets
} from 'react-motion';
import {
    Col,
    Panel,
    Button
} from 'react-bootstrap';

class HomePage extends React.Component<{}, void> {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1>home</h1>
                <Col xs={12}>
                    <Button>Save</Button>
                </Col>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export  default HomePage;