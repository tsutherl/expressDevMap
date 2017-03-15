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


//helper function to get info when at terminal node
const getNodeInfo = (middleware) => ({
        path: middleware.route.path,
        verb: Object.keys(middleware.route.methods)[0]//will there ever be more than one key?
})

//TODO: recursive function that can be called in /routes - (maybe to be moved into a utils file for more organized code?)


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
    //    res.send(app._router.stack)
        // console.log('PARSE ROUTES::: ', parseRoutes(app._router.stack))
        res.send(parseRoutes(app._router.stack));

    });

    //hit this route --> which shows the react tree????

    app.use('/backend-tree', router);

};