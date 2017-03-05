const express = require('express');

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
        let routerLists = []
        //gets digs into any express routers used (right now only one level deep)--> might want to turn into recursive function
        app._router.stack.forEach(middleware => {
            if(middleware.handle.stack) {
                routerList = routerList.concat(middleware.handle.stack)
            }
        })
        const fullList = app._router.stack.concat(routerList)
        //here we're hooking into the app object and filtering through all the routes for the ones that the dev explicitly added to their app 
        //--> this excludes routes/middleware that automatically come with an express app instance, or uninteresting ones like static middleware
        const actualRoutes = fullList.filter(
          middleware => !!middleware.route
        );
        res.send(actualRoutes.map(middleware => middleware.route.path));
    });

    //hit this route --> which shows the react tree????

    app.use('/backend-tree', router);



};