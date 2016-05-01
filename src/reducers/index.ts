import {combineReducers, Reducer} from 'redux';
import {
    pages,
    products
} from './PageReducers';
import {
    routerReducer
} from 'react-router-redux';
export const reducers:Reducer = combineReducers({
        pages,
        products,
        routing: routerReducer
});

