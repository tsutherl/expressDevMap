const express = require('express');
const app = express();
const {resolve} = require('path');
module.exports = app;

// app.use(resolve(express.static(__dirname, '..', '/public')));
// app.use(resolve(express.static(__dirname, '..', '/node_modules')));

app.use(express.static(resolve(__dirname, '..', 'public')));
app.use(express.static(resolve(__dirname, '..', 'node_modules')));

app.get('/', (req, res) => {
   res.sendFile(resolve(__dirname, '..', 'public', 'index.html'));
});

app.use('/api', require('./api'))


