var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const fetch = require("node-fetch");
var bodyParser = require("body-parser");
const matter = require('gray-matter');





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var pokusRouter = require('./routes/pokus');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'blog'));
app.set('view engine', 'ejs');

//https://dev.to/khalby786/creating-a-markdown-blog-with-ejs-express-j40
app.get("/blog/:article", (req, res) => {

  // read the markdown file
  const file = matter.read(__dirname + '/blog/' + req.params.article + '.md');

  // use markdown-it to convert content to HTML
  var md = require("markdown-it")();
  let content = file.content;
  var result = md.render(content);

  res.render("default", {
    post: result,
    title: file.data.title,
    description: file.data.description,
    image: file.data.image
  });
});

app.get("/blog", (req, res) => {
  const posts = fs.readdirSync(__dirname + '/blog').filter(file => file.endsWith('.md'));
  res.render("blog", {
    posts: posts
  });
});
//----------

//Tato část stahuje a zapisuje json do souboru

// app.locals.huhu = function() {
//   fetch('http://szidon.com:1337/nastroje/')
//     .then(
//       function(response) {
//         if (response.status !== 200) {
//           console.log('Looks like there was a problem. Status Code: ' +
//             response.status);
//           return;
//         }        
//         // Examine the text in the response
//         response.json()
//         .then(function(data) {
//          console.log(data.Nadpis);
//          const {Nadpis, Popis, Obsah} = data;
//          //data = JSON.stringify(data);
//          fs.writeFile('./blog/article.md', '#### ' + Nadpis + '\n' + Popis + '\n' + Obsah, function (err) {
//           if (err) return console.log(err);
//           console.log('Hello World > helloworld.txt');
//           return Popis;
//         });
//         });
//         //---- 
//        }
//     )
//     .catch(function(err) {
//       console.log('Fetch Error :-S', err);
//     });
//   }
//   app.locals.huhu(); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/pokus', pokusRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
