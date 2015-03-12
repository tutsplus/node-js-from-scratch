var modA = require('./scope-a');

//console.log(one);       // ReferenceError: one is not defined
//console.log(two());     // ReferenceError: two is not defined

console.log(three);
console.log(four());

console.log(modA.five);
console.log(modA.six());
