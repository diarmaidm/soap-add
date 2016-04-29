var express = require('express');
var router = express.Router();
var soap = require('soap');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'soap add application' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  req.session.num1 = 'test1';
  req.session.num2 = 'test2';
  req.session.num3 = 'test3';
  req.session.num4 = 'test4';

  var a = req.body.a, b = req.body.b;
  var url = 'http://free-web-services.com/add.wsdl';
  var args = "<tns:addRequest><a>" + a + "</a><b>" + b + "</b></tns:addRequest>";

  var start = +new Date();
  soap.createClient(url, function(err, client) {
    client.add(args, function(err, result) {
      var finish = +new Date();
      var duration = finish - start;

      res.render('index', { a: a, b: b, result: result.sum, duration: duration});
    });
  });
});

module.exports = router;