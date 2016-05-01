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

class HomePage extends React.Component<{}, {
    collapased: boolean,
    currentHeight: number
}> {
    constructor() {
        super();
        this.state = {
            collapased: false,
            currentHeight: -1
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(e: React.SyntheticEvent) {
        e.preventDefault();
        const {currentHeight} = this.state;
        let height = currentHeight;
        if (currentHeight === -1) {
            height = document.getElementById("wrapper").offsetHeight;
            this.setState({
                collapased: !this.state.collapased,
                currentHeight: height
            });
        } else {
            this.setState({
                collapased: !this.state.collapased,
                currentHeight: this.state.currentHeight
            })
        }

    }

    render() {
        const panelHeader =
            <h3>
                <Button onClick={this.toggle}>Toggle</Button>
            </h3>;
        const {collapased, currentHeight} = this.state;
        let motionHeight: number;
        let content: React.ReactNode;
        if (currentHeight === -1) {
            content =
                <div id="wrapper" style={{ height: "auto", overflow: "hidden" }}>
                    <span>Panel Content</span>
                </div>;
        } else {
            //styleHeight = currentHeight;
            motionHeight = spring((collapased) ? 0 : currentHeight);
            content =
                <Motion defaultStyle={{ height: collapased ? currentHeight : 0 }}
                    style={{ height: motionHeight }}>
                    {({height}) =>
                        <div id="wrapper" style={{ height: height, overflow: "hidden" }}>
                            <span>Panel Content</span>
                        </div>
                    }
                </Motion>;
        }

        return (
            <div>
                <h1>home</h1>
                <Col xs={12}>
                    <Panel header={panelHeader}>
                       {content}
                    </Panel>
                    <Panel header="statistics">
                        <div>

                        </div>
                    </Panel>
                </Col>
                <Link to="/about">About</Link> |
                <Link to="/selectors">Selectors</Link>
            </div>
        );
    }
}

export default HomePage;