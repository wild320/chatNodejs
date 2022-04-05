const express = require('express');
const bodyParser = require('body-parser');
const response = require('./networks/response')
const router = require('./networks/routes')


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);


app.listen(3000);
console.log('Escuchando on http://localhost:3000')