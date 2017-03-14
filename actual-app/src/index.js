import React from 'react';
import {render} from 'react-dom';
import AppContainer from './AppContainer.jsx'
import { Provider } from 'react-redux'
import store, {loadRoutes} from './store'
import {Router, Route, Link, hashHistory} from 'react-router';

import axios from 'axios'


//this is OUR axios call to our GET /routes that is sending back information about our client's express routes

//here we are retrieving their routes and rendering them in 
//a tree via react JSX

//build out react-redux!!!
//learn D3...
//how to deal with the example app that has multiple routers --> are they nested? how do we access them? 

const getRoutes = () => {
    axios('/backend-tree/routes')
    .then((routes) => {
        console.log('OBJ', routes.data)
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


