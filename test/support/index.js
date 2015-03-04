/**
  * Module dependencies.
  */
var express = require('express');

// app

var app = module.exports = express();

// middleware

app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('./session'));
app.use(require('./strategy'));

// api

require('./apis')(app);

// bind

if (!module.parent){
  app.listen(3000);
  console.log('http://dev:3000');
}
