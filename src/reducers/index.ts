import {combineReducers, Reducer} from 'redux';
import {
    pages
} from './PageReducers';
import {
    routerReducer
} from 'react-router-redux';
export const reducers:Reducer = combineReducers({
        pages,
        routing: routerReducer
});

