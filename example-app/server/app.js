const express = require('express');
const app = express();
module.exports = app;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.use('/api', require('./api'))
