var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  res.end('6');
});

module.exports = router;

