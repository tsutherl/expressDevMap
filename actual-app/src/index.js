import React from 'react';
import {render} from 'react-dom';
import {get} from 'axios';
import AppContainer from './AppContainer.jsx'
import { Provider } from 'react-redux'
import store, {loadRoutes} from './store'
import {Router, Route, Link, hashHistory} from 'react-router';


//this is OUR axios call to our GET /routes that is sending back information about our client's express routes

//here we are retrieving their routes and rendering them in 
//a tree via react JSX

//build out react-redux!!!
//learn D3...
//how to deal with the example app that has multiple routers --> are they nested? how do we access them? 
    

// get('/backend-tree/routes')
//     .then(res => res.data)
//     .then(routePaths => {
//         let myState = store.getState();      
//         // console.log(routePaths)
//     }); 



const data =
{
  "name": "Top Level",
  "value": 10,
  "type": "black",
  "level": "red",
  "children": [
    {
      "name": "Level 2: A",
      "value": 15,
      "type": "grey",
      "level": "red",
      "children": [
        {
          "name": "Son of A",
          "value": 5,
          "type": "steelblue",
          "level": "orange"
        },
        {
          "name": "Daughter of A",
          "value": 8,
          "type": "steelblue",
          "level": "red"
        }
      ]
    },
    {
      "name": "Level 2: B",
      "value": 10,
      "type": "grey",
      "level": "green"
    }
  ]
};


const getRoutes = () => store.dispatch(loadRoutes(data));


render(
<Provider store={store}>
    <Router history={hashHistory} >
        <Route path="/" component={AppContainer} onEnter={getRoutes}/>
    </Router>    
  </Provider>,
  document.getElementById('app')
);

