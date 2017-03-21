'use strict';

import axios from 'axios';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, Link, hashHistory} from 'react-router';

import AppContainer from './AppContainer.jsx'
import store from './reducers/store';

//need to refactor reducer imports
import { loadRoutes}  from './reducers/routeReducer'; 


//this is OUR axios call to our GET /routes that is sending back information about our client's express routes

//here we are retrieving their routes and rendering them in 
//a tree via react JSX

//build out react-redux!!!
//learn D3...
//how to deal with the example app that has multiple routers --> are they nested? how do we access them? 

const getRoutes = () => {
    axios('/backend-tree/routes')
    .then((routes) => {
        store.dispatch(loadRoutes(routes.data))
    })
}

render(
<Provider store={store}>
    <Router history={hashHistory} >
        <Route path="/" component={AppContainer} onEnter={getRoutes}/>
    </Router>    
  </Provider>,
  document.getElementById('app')
);


