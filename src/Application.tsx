import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftMenu from './components/LeftMenu';

class Application extends React.Component<{}, void> {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <LeftMenu />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Application;