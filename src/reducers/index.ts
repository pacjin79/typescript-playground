import {combineReducers, Reducer} from 'redux';
import {
    pages
} from './PageReducers';

export const reducers:Reducer = combineReducers({
        pages
});

