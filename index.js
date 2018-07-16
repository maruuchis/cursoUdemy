'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8083;

mongoose.connect('mongodb://localhost:27017/cursoUdemy', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("Base de datos iniciada. Sucess.");
        app.listen(port, function() {
            console.log("Servidor escuchando en el puerto: " + port);
        });
    }

});