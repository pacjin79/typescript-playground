import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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

export default Application;