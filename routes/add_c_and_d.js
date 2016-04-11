var get_c = require('./get_c');
var get_d = require('./get_d');

function addCandD () {
  console.log('......in real add c and d');
  var c = get_c.get_c(); // returns hardcoded 17
  var d = get_d.get_d(); // returns hardcoded 21
  var sum = c + d;

  return sum;
}
module.exports = {addCandD: addCandD};