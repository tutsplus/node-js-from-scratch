var util = require('util');

var log = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log('This is a message'); // To see this, run NODE_DEBUG=fulcrum node util.js
log2('This is a second message'); // To see this, run NODE_DEBUG=foobar node util.js
// To see them both, run NODE_DEBUG=fulcrum,foobar node util.js

var person = {
  name: 'Andrew',
  interests: ['javascript', 'books'],
};

console.log(util.format('%s : %j', person, person));
console.log(util.inspect(util, { colors: true }));

function User () {
}

User.prototype.loggedIn = function () {
  return true;
};

function Admin () {
}

util.inherits(Admin, User);

admin = new Admin();

console.log(admin.loggedIn());
