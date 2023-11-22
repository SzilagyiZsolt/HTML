const express = require('express');
const app = express();
const cors= require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const mysql = require('mysql');
const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tagdij'
})
db.connect((err) =>{
    if (err) {
        throw err;
    }
    console.log('Connected');
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/Bela', (req, res) => {
    res.send('Ez Béla lapja itt most');
});

app.get('/Bela/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Ez Béla lapja itt most! id:${id}`);
});

app.get('/Bela/:id/:nev', (req, res) => {
    let id = req.params.id;
    let nev = req.params.nev;
    res.send(`Ez Béla lapja itt most! id:${id}, nev:${nev}`);
})

app.post('/Bela', (req, res) => {
    let id = req.body.id;
    let nev = req.body.nev;
    res.send(`Ez Béla lapja itt most! ${nev}${id} POST`);
})

app.get('/tagok', (req,res) => {
    let sqlcommand = 'SELECT * FROM `ugyfel`';
    db.query(sqlcommand, (err, rows) =>{
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.get('/tagok/:id', (req,res) => {
    let sqlcommand = `SELECT * FROM ugyfel WHERE azon=${req.params.id}`;
    db.query(sqlcommand, (err, rows) =>{
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
