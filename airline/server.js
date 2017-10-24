var http = require('http');
var db = require('./db');
// Flights are data small db
var flights = require('./data/index');
var app = require('./app')(flights);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});