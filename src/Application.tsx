import * as React from 'react';

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