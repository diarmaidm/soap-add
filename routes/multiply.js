var express = require('express');
var router = express.Router();
var multiply = require('../model/multiply');

router.get('/', function(req, res, next) {
  res.render('multiply', { title: 'Welcome to multiply' });
});

router.post('/', function(req, res, next) {
  var firstNumber = req.body.firstNumber;
  var secondNumber = req.body.secondNumber;
  var result = multiply(firstNumber, secondNumber); // This is not defined...
  res.render('multiply', { title: 'Welcome to multiply', firstNumber: firstNumber, secondNumber: secondNumber, result: result });
});

module.exports = router;