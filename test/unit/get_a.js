function get_a() {
  var a = 4;
  // console.log('. . . . . . in real get_a function. a ===', a);
  return a;
}
// This is to test out the prestart in package.json
//  "prestart": "node ./test/unit/get_a.js",
get_a();

// module.exports = get_a;
module.exports = {get_a: get_a};
