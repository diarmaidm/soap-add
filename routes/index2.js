var express = require('express');
var router = express.Router();
var CandD = require('./add_c_and_d');

router.get('/', function(req, res, next) {
  console.log('......in index2 get');
  res.render('index2', { title: 'new soap add application' });
});

router.post('/', function (req, res, next) {
  console.log('......in index2 post');

  var temp = 0;
  console.log('......in index2 post - before var sum ');
//   var sum = CandD(temp);
 var sum = CandD.addCandD(temp);
//   var sum = CandD.addCandD();
  console.log('......in index2 post - after var sum ', sum);

  res.end(sum.toString());
});

module.exports = router;
