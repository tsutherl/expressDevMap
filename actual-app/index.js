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


module.exports = app => {

    const router = express.Router();

    router.get('/', (req, res) => {
        console.log('pinring slash')
        res.sendFile(__dirname + '/views/index.html');
    });

    router.get('/BACKEND_TREE.js', (req, res) => {
        console.log('pinging')
        res.sendFile(__dirname + '/assets/app.js');
    });

    router.get('/BACKEND_TREE.css', (req, res) => {
        console.log('pinging css')
        res.sendFile(__dirname + '/assets/style.css');
    });

    router.get('/routes', (req, res) => {
        console.log('pinging routes')
        res.send(parseRoutes(app._router.stack));
    });

    //hit this route --> which shows the react tree????

    app.use('/backend-tree', router);

};