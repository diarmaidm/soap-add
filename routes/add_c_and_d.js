var get_c = require('./get_c');
var get_d = require('./get_d');

var addCandD = function (extra) {
  var c = get_c.get_c();
  var d = get_d.get_d();

  // use 0 if extra is undefined
  var sum = c + d + (extra || 0);

  return sum;
};

module.exports = {addCandD: addCandD};