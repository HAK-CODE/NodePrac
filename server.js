var http = require('http');

var handlereq = function (req, res) {
    res.writeHeader(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({a:1, b:2}));
};

var server = http.createServer(handlereq);

server.listen(3000, 'localhost');






/*
http.createServer(function (req, res) {
    res.writeHeader(200, {'Content-Type':'text/plain'});
    res.end("LULLU");
}).listen(3000, 'localhost');
*/