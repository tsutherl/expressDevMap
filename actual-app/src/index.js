import React from 'react';
import {render} from 'react-dom';
import {get} from 'axios';
import Tree from './Tree.jsx'

//this is OUR axios call to our GET /routes that is sending back information about our client's express routes

//here we are retrieving their routes and rendering them in 
//a tree via react JSX

//build out react-redux!!!
//learn D3...
//how to deal with the example app that has multiple routers --> are they nested? how do we access them? 
    

get('/backend-tree/routes')
    .then(res => res.data)
    .then(routePaths => {
        render(
          <div>
              <Tree/>
          </div>,
          document.getElementById('app')
        );
        // console.log(routePaths)
    }); 

