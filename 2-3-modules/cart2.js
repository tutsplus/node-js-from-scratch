function Cart () {
  this.items = [];
}

Cart.prototype.addItem = function (name, price) {
  this.items.push({
    name: name,
    price: price
  });
};

Cart.prototype.total = function () {
  return this.items.reduce(function (a, b) {
    return a + b.price; 
  }, 0);
};

module.exports = Cart;

// To use in a Node REPL: 
//
// > Cart = require('./cart2');
// > cart = new Cart();
// > cart.addItem('name1', 10);
// > cart.addItem('name2', 10);
// > cart.total()
// 20
