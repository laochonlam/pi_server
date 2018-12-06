var express = require('express');
var rpio = require('rpio');

var router = express.Router();

/* GET functions listing. */
router.get('/', function(req, res, next) {
  rpio.open(36, rpio.OUTPUT, rpio.HIGH);
  console.log('turn up pin 36');
  while(1) {
	  console.log(rpio.read(36));
  }
  res.send('functioning');
});

module.exports = router;
