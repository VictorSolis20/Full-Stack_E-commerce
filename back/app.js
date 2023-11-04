'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;

var cliente_route = require('./routes/cliente');
var admin_route = require('./routes/admin');
var producto_route = require('./routes/producto');

mongoose.connect('mongodb://127.0.0.1:27017/tienda', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(port, function () {
            console.log('Servidor corriendo en el puerto ' + port);
        });
    })
    .catch((err) => {
        console.error(err);
    });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', cliente_route);
app.use('/api', admin_route);
app.use('/api', producto_route);

module.exports = app;
