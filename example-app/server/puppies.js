module.exports = require('express').Router()

    .get('/', (req,res) => res.send(['Henry', 'Boomer', 'Nugget', 'Max']))

    .get('/Boomer', (req, res) => res.send('Boomer'))

    .get('/Nugget', (req, res) => res.send('Nugget'))

    .post('/', (req, res) => {
    	console.log(req.body);
        res.send(req.body)
    })