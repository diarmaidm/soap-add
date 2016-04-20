// function getB() {
function get_b() {
  var b = 5;
  // console.log('+ + + + + + in real getB function. b ===', b);
  return b;
}

// module.exports = getB;
// module.exports = get_b;
module.exports = {get_b: get_b};
