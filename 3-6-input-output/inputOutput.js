
// To run this code, pipe some data to the file like this: 
// > echo "some content" | node inputOutput.js
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('chunk:' + chunk.toString());
});

process.stdin.on('end', function () {
  process.stdout.write('end');
});

// Uncomment this code to test a transform stream, like this:
// >  echo "some content" | node inputOutput.js
// var trans = require('stream').Transform();
// trans._transform = function (chunk, enc, done) {
//   this.push(chunk.toString().split('').map(function (char) {
//     return String.fromCharCode(char.charCodeAt(0) + 1);
//   }).join(''));
// done();
// };
// process.stdin.pipe(trans).pipe(process.stdout);
