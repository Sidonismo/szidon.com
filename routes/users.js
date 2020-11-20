var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Haló, haló, prase kozu potrkalo');
});

module.exports = router;
