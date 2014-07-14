var express = require('express'),
    wines = require('./routes/employee'),
    config = require('./config');

var app = express();

app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);

console.log("Port server: " + config.node.port);
app.listen(config.node.port);
console.log('Listening on port '+ config.mongo.port + '...');
