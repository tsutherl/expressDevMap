const express = require('express');
const app = express();
module.exports = app;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/api/puppies', (req,res) => {
      res.send(['Henry', 'Boomer', 'Nugget', 'Max']);
});

app.get('/api/puppies/Boomer', (req, res) => {
    res.send('Boomer');
})

app.get(' api/puppies/Nugget', (req, res) =>{
    res.send('Nugget')
})

app.get('/api/birds', (req, res) => {
    res.send(['chickens', 'geese', 'ducks']);
})

app.get('/api/birds/chickens', (req, res) => {
    res.send(['Marge', 'Madge', 'Midge']);
})

app.get('/api/birds/chickens/Madge', (req, res) => {
    res.send('Madge');
})

app.get('/api/birds/chickens/Midge', (req, res) => {
    res.send('Midge');
})

app.get('/api/birds/ducks', (req, res) => {
    res.send(['Don', 'Dan', 'Dina', 'Denise', 'Della'])
})

app.get('/api/birds/ducks/Dina', (req, res) => {
    res.send('Dina');
})

app.get('/api/birds/ducks/Della', (req, res) => {
    res.send('Della');
})




{
    'name': 'api'
    'children' : [
        {
            'name' : 'puppies',
            'children' : [
                {
                    'name': 'Boomer'
                },
                {
                    'name': 'Nugget'
                }
            ]
        },
        {
            'name' : 'birds',
            children: [
                {
                    'name': 'chickens',
                    children: [
                        {
                            'name' : 'Madge'
                        },
                        {
                            'name' : 'Midge'
                        }
                    ]
                },
                {
                    'name' : 'ducks',
                    'children': [
                        {
                            'name': 'Dina'
                        },
                        {

                            'name' : 'Della'
                        }
                    ]
                }
            ]
        }
    ]
}


