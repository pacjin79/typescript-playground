import * as React from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {ProductByIdSelector} from '../selectors/Selectors';
import _ = require("lodash");

class SelectorPage extends React.Component<{ product: {id:string}}, void> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>SelectorPage</h1>
                <span>{this.props.product.id}</span>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const product = ProductByIdSelector(state, { productId: "p1" })
    return { product: product };
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectorPage);

export default container;

