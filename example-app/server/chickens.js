module.exports = require('express').Router()
    .get('/', (req, res) => {
        res.send(['Marge', 'Madge', 'Midge']);
    })

    .get('/Madge', (req, res) => {
        res.send('Madge');
    })

    .get('/Midge', (req, res) => {
        res.send('Midge');
    })