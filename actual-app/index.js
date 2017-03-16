const express = require('express');
const parseRoutes = require('./parse-routes');

//this is the module that our clients would be requiring in. 
//it returns a function that takes their app and applies the following new routes as middleware: 

//var backend = require('backend-tree');
//backend is a function 
//--> backend(app)
    //1: '/backend-tree/BACKEND_TREE.js
    //2: '/backend-tree/BACKEND_TREE.css
    //3: '/backend-tree/routes 


//in the docs, list all the routes that we are providing to them and 
    //what they do 

//added second optional input to make the call for the routers much simpler
const parseRoutes = (appRouterStack, path) => {

    const routesObj = {name: path || '/', children: []}

    //go through the stack
    appRouterStack.forEach(element => {
        //ignore the backend-tree paths we have added
        if (element.path !== '/backend-tree') {
            //if the element is a router recursive parse the route
            if (element.name === 'router' ) { 
                routesObj.children.push(parseRoutes(element.handle.stack, element.regexp.toString().slice(3,-13)))
            } else if (element.route) {
                //if normal route, just add it here
                routesObj.children.push({
                    name: element.route.path,
                    verb: Object.keys(element.route.methods)[0]
                })
            }
        }
    })

    return routesObj
}


module.exports = app => {

    const router = express.Router();

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/views/index.html');
    });

    router.get('/BACKEND_TREE.js', (req, res) => {
        res.sendFile(__dirname + '/assets/app.js');
    });

    router.get('/BACKEND_TREE.css', (req, res) => {
        res.sendFile(__dirname + '/assets/style.css');
    });

    router.get('/routes', (req, res) => {
        res.send(parseRoutes(app._router.stack));
    });

    //hit this route --> which shows the react tree????

    app.use('/backend-tree', router);

};