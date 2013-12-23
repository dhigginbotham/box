var express = require('express');
var app = module.exports = express();
var cfg = require('../../config/app');

app.set('views', cfg.templateDir);
app.set('view engine', cfg.viewEngine);

app.get('/', function (req, res) {
  res.render('main/home');
});