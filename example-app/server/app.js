const express = require('express');
const app = express();
const {resolve} = require('path');
const bodyParser = require('body-parser');
module.exports = app;


// app.use(resolve(express.static(__dirname, '..', '/public')));
// app.use(resolve(express.static(__dirname, '..', '/node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(resolve(__dirname, '..', 'public')));
app.use(express.static(resolve(__dirname, '..', 'node_modules')));

app.get('/', (req, res) => {
   res.sendFile(resolve(__dirname, '..', 'public', 'index.html'));
});

app.use('/api', require('./api'))


