var get_c = require('./get_c');
var get_d = require('./get_d');

var addCandD = function (extra) {
// function addCandD (extra) {
  var c = get_c.get_c(); // returns hardcoded 17
  var d = get_d.get_d(); // returns hardcoded 21
  // console.log('......in ... the ... real ... add ... c ... and ... d, c is', c, 'd is', d, 'extra is', extra);
  // use 0 if extra is undefined
  var sum = c + d + (extra || 0);

  return sum;
};

module.exports = {addCandD: addCandD};
// module.exports = addCandD;
