const http = require('http');
const server = http.createServer();
const backendTree = require('../actual-app');
const expressApp = require('./server/app');
backendTree(expressApp);

//when anyone makes an http request?
server.on('request', expressApp);

server.listen(1337, () => console.log('Server listening.'));