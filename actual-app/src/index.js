import React from 'react';
import {render} from 'react-dom';
import {get} from 'axios';

//this is OUR axios call to the client's app backend
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
              {routePaths.map(path => <h1>{path.verb.toUpperCase()}: {path.path}</h1>)}
          </div>,
          document.getElementById('app')
        );
    }); 

