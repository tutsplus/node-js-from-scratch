var stream = require('stream');

var a = 0;
var b = 1;

var rs = new stream.Readable();

rs._read = function () {
  if (b < 144) {
    var c = a + b;

    a = b;
    b = c;

    rs.push('' + c);
  } else {
    rs.push(null);
  }
};

module.exports = rs;

// uncomment these lines if you want to output this file on its own.

//rs.pipe(process.stdout);
//process.stdout.on('error', process.exit);
