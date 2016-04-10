var A = require('./get-a');
var B = require('./get-b');


function addAandB () {
  var a = A();
  var b = B();
  var c = a + b;

  return c;
};

module.exports = addAandB;