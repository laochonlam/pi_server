var express = require('express');
var router = express.Router();

/* GET functions listing. */
router.get('/', function(req, res, next) {
  res.send('functioning');
});

module.exports = router;
