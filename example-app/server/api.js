module.exports = require('express').Router()
    .use('/puppies', require('./puppies'))
    .use('/birds', require('./birds'))