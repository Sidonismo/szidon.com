var express = require('express');
const fetch = require("node-fetch");

var router = express.Router();


const bla = 'bla bla';

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// re = fetch("http://szidon.com:1337/nastroje/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Haló, haló, prase kozu potrkalo ${ bla }`);
});

module.exports = router;
