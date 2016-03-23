var express = require('express');
var router = express.Router();
var soap = require('soap');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'soap add application' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  var a = req.body.a, b = req.body.b;
  var url = 'http://free-web-services.com/add.wsdl';
  var args = "<tns:addRequest><a>" + a + "</a><b>" + b + "</b></tns:addRequest>";

  soap.createClient(url, function(err, client) {
    client.add(args, function(err, result) {
      //console.log('last request', client.lastRequest);
      res.render('index', { a: a, b: b, result: result.sum });
    });
  });
});

module.exports = router;
