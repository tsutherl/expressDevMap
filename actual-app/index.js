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
        let routerList = []
        //here we're hooking into the app object and filtering through all the routes for the ones that the dev explicitly added to their app 
        //--> this excludes routes/middleware that automatically come with an express app instance, or uninteresting ones like static middleware
        //gets digs into any express routers used (right now only one level deep)--> might want to turn into recursive function
        let firstRoutes = app._router.stack.filter(middleware => {
            if (middleware.path === '/backend-tree') return false //exclude routes added in this file
            if(middleware.name === 'router') {// find the routers
                routerList.push(middleware)
                return false
            } 
            return !!middleware.route //see if the remaining have routes
        })

        //gets any paths in the initial level of the app
        const firstPaths = firstRoutes.map(middleware => middleware.route.path)

        //get prefixes for the routers from their outer regexp key (try and find a better way to do this, maybe)
        const prefixes = routerList.map(middleware => {
            console.log(middleware.regexp)
            if (middleware.regexp.fast_slash) {
                return ''
            }
            return middleware.regexp.toString().slice(3,-13)
        })

        const routerPaths = []
        routerList.forEach((middleware, idx)=>{
            middleware.handle.stack.forEach(innerware => {
                routerPaths.push(prefixes[idx] + innerware.route.path)
            })
        })

        //join the paths into one array
        const allPaths = firstPaths.concat(routerPaths)

        res.send(allPaths);
    });

    //hit this route --> which shows the react tree????

    app.use('/backend-tree', router);

};