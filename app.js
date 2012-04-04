// dependencies
var express = require('express');
var app = express();

// config
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// middleware

app.configure(function() {
  app.use(express.logger());
  app.use(express.static(__dirname + '/public'));
});

// routes

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(8080);