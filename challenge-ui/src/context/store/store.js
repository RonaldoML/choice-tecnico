
import { applyMiddleware, compose, legacy_createStore } from 'redux';
import { rootReducer } from "../reducers/rootReducers";
import { thunk } from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);