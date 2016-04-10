var express = require('express');
var router = express.Router();
// var add_numbers = require('./add_numbers');
var addCandD = require('./add_c_and_d');

router.get('/', function(req, res, next) {
  res.render('index2', { title: 'new soap add application' });
});

router.post('/', function (req, res, next) {
  console.log('......in index2 post');
  // call add_numbers to get sum of 2 numbers
  // var sum = 10;
  var sum = addCandD.addCandD();
  // var sum = add_numbers(req.body.a, req.body.b);

  res.end(sum.toString());
});

module.exports = router;

