var items = [];

function addItem (name, price) {
  items.push({
    name: name,
    price: price
  });
}

exports.total = function () {
  return items.reduce(function (a, b) {
    return a + b.price; 
  }, 0);
};

exports.addItem = addItem;

// To use in a Node REPL: 
//
// > cart = require('./cart');
// > cart.addItem('name1', 10);
// > cart.addItem('name2', 10);
// > cart.total()
// 20
