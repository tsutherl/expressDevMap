'use strict';

import axios from 'axios';

import {createStore, applyMiddleware, combineReducers} from 'redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


// import reducers from other files
import { modalReducer } from './modalReducer';
import { routeReducer } from './routeReducer';
import { selectedReducer } from './selectedReducer';

// combine reducers into a rootReducer
const rootReducer = combineReducers({
    route: routeReducer,
    modal: modalReducer,
    selected: selectedReducer
});


// construct our store with rootReducer and middleware
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
    )
)

export default store;

 
