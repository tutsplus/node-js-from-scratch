var http = require('http');

var server = http.createServer(function (request, response) {
  response.write('<h1> Hello Node </h1>');
  response.write('<p>Method: ' + request.method + '<p>');
  response.write('<p>URL: ' + request.url + '<p>');
  response.end();
});
server.listen(3000);

// Uncomment this code to pipe a file stream to the response.

// var fs = require('fs');
// var server2 = http.createServer();
// server2.on('request', function (req, res) {
//   fs.createReadStream('server.js').pipe(res);
// });
// server2.listen(3000);
