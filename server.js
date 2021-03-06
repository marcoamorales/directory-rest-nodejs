var express = require('express'),
    wines = require('./routes/employee'),
    config = require('./config');

var app = express();

app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);
app.get('/', function(req, res){
    res.send('This is a test page');
});

console.log("Port server: " + config.port);
app.listen(config.port);
console.log('Listening on port '+ config.mongo_port + '...');
