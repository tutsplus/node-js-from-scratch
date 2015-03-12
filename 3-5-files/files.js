var fs = require('fs');

fs.readFile('files.js', function (err, data) {
  console.log(data.toString());
});

fs.writeFile('text.txt', 'this is the content', function (err) { 
  if (err) throw err;

  console.log(fs.readFileSync('text.txt').toString());
});

// Uncomment these lines to pipe a file stream to standard out
// var readStream = fs.createReadStream('files.js');
// readStream.pipe(process.stdout);

// Uncomment these lines to pipe our Fib stream to a file.
// var writeStream = fs.createWriteStream('fib.txt');
// var fib = require('./fib');
// fib.pipe(writeStream);
