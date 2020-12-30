
var express = require('express');

var router = express.Router();
// router.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

var md = require("markdown-it")();
const matter = require('gray-matter');
const path = require('path');
const fs = require('fs');
var http = require('http');
var url = require('url');

// let filepath = '/home/bitnami/projects/sample/blog/article.md';
// let directoryOfFile = path.dirname(filepath);
// //- Tato část asi zbytečná
// fs.watch(directoryOfFile+'/article.md', function (event, filename) {
//   console.log('event is: ' + event);
//   if (filename) {
//       console.log('filename provided: ' + filename);
//    } else {
//       console.log('filename not provided');
//   }
// });
// //-
// const file = matter.read(directoryOfFile+'/article.md');
// let content = file.content;
// let result = () => md.render(content);

//console.log(result());
//přidat do render -> result:result()






router.get('/', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://wesmir.cz/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.render('index', { title: 'Javascript ES6 tahák' });
  let ref = (req.header('referer') || '').split('/')[2];
  ref = req.headers.referer;

  console.log(ref);
});


module.exports = router;
