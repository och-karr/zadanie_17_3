var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs'); //wbudowany w node - nie trzeba instalować


//stworzenie aplikacji Express:
var app = express();
var stringifyFile = data;
app.use(bodyParser.json()); //pozwoli wykorzystać middleware body-parser

app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
});

app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});

app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /getNote');
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        // stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    stringifyFile = stringifyFile + req.params.note;
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated');
    });
});

app.listen(3000);