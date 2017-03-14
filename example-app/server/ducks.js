module.exports = require('express').Router()
    .get('/', (req, res) => {
        res.send(['Don', 'Dan', 'Dina', 'Denise', 'Della'])
    })

    .get('/Dina', (req, res) => {
        res.send('Dina');
    })

    .get('/Della', (req, res) => {
        res.send('Della');
    })