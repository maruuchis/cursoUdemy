'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar cabeceras

//rutas bases
app.get('/pruebas', (req, res) => {
        res.status(200).send({message: "Welcome to the curse."});
});

module.exports = app;