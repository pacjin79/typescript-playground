import {createSelector} from 'reselect';
import _ = require('lodash');

export const PagesSelector = (state:IAppState) => state.pages; 
export const ProductsSelector = (state:IAppState) => state.products;
export const ProductIdSelector = (_, props) => props.productId;

export const ProductByIdSelector = createSelector(
    ProductsSelector,
    ProductIdSelector,
    (products, productId) => {
        return _.find(products, (p) => p.id === productId);
    }
);