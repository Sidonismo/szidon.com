var express = require('express');
var router = express.Router();
var bls= 10;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Szidon.com', bls });
});
module.exports = router;