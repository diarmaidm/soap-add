function get_a() {
  var a = 4;
  console.log('. . . . . . in real get_a function. a ===', a);
  return a;
}

// module.exports = get_a;
module.exports = {get_a: get_a};
