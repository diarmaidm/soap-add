var express = require('express');
var router = express.Router();
var addNumbers = require('./add_numbers');

router.get('/', function(req, res, next) {
  res.render('index2', { title: 'new soap add application' });
});

router.post('/', function (req, res, next) {
  // call addNumbers to get sum of 2 numbers
  var sum = addNumbers(req.body.a, req.body.b);
  res.end(sum.toString());
});

module.exports = router;

