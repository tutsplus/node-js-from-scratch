/* --- SYNCHRONOUS CODE ---
 *
 * Uncomment these lines for synchronous filtering
 *
 */

//  function oddsSync (arr) {
//   return arr.filter(function (n) { return n % 2; });
// }
// var numbers = [1,2,3,4,5,6,7,8,9];
// var oddNums = oddsSync(numbers);
// console.log(oddNums);


/* --- ASYNCRONOUS CODE ---
 *
 * Uncomment these lines for asynchronous filtering.
 *
 */

function odds(arr, callback) {
  var oddNums = arr.filter(function (n) { return n % 2; });
  var err = arr.indexOf(3) > -1 ? new Error('No 3s Allowed') : null;

  setTimeout(function () {
    callback(err, oddNums);
  }, 1000);
}

var numbers = [1,2,4,5,6,7,8,9];
odds(numbers, function (err, data) {
  if (err) throw err;
  console.log('data:', data);
});

console.log("this comes after the odds() call");
