const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./networks/routes')

db('mongodb+srv://db_wild320:elKzgmJ40Zv7siJ6@cluster0.xiwnw.mongodb.net/test');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);


app.listen(3000);
console.log('Escuchando on http://localhost:3000')