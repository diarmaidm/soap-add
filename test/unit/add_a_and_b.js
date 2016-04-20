var geta = require('./get_a');
var get_b = require('./get_b');

function addAandB() {
  // console.log('.. .. In the real addAandB function at start .. .. ');
  var a = geta.get_a();
  // var a = get_a();
  var b = get_b.get_b();
  // var b = 10;
  var c = a + b;

  // console.log('.. .. In the real addAandB function before return statement .. .. ');
  return c;
}

// export object
// module.exports = { addAandB: addAandB };
// export the function.
module.exports = addAandB;
