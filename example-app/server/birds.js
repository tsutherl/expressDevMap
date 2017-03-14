module.exports = require('express').Router()

    .use('/chickens', require('./chickens'))
    .use('/ducks', require('./ducks'))
    
    .get('/', (req, res) => {
        res.send(['chickens', 'geese', 'ducks']);
    })
