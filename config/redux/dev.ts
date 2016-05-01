import {
    createStore,
    applyMiddleware,
    compose,
    Reducer
} from 'redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';
import {reducers} from '../../src/reducers';
import DevTools from './DevTools';

export namespace ReduxConfigDev {
    export function configureStore(initialState:IAppState) {
        debugger
        const store = createStore(
            reducers, 
            initialState,
            compose(applyMiddleware(
                thunk,
                createLogger()
            ), DevTools.instrument())
        );
        
        if (module.hot) {
            module.hot.accept('../../src/reducers', () => {
                const nextRootReducer:Reducer = require('../../src/reducers/index.ts')['default'];
                store.replaceReducer(nextRootReducer);
            })
        }
        return store;
    }
}

