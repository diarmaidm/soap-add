var express = require('express');
var router = express.Router();
var CandD = require('./add_c_and_d');

router.get('/', function(req, res, next) {
  res.render('index2', { title: 'new soap add application' });
});

router.post('/', function (req, res, next) {
  var temp = 0;
  var sum = CandD.addCandD(temp);

  res.end(sum.toString());
});

module.exports = router;