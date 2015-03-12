var http = require('http');

var server = http.createServer(function (request, response) {
  response.write('<h1> Hello Node </h1>');
  response.write('<p>Method: ' + request.method + '<p>');
  response.write('<p>URL: ' + request.url + '<p>');
  response.end();
});

// Uncomment this line to echo some information about the request
//server.listen(3000);


var fs = require('fs');
  var server2 = http.createServer();
  server2.on('request', function (req, res) {
  fs.createReadStream('server.js').pipe(res);
});

// Uncomment this line to pipe a file stream to the response.
server2.listen(3000);
