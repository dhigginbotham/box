var express = require('express');
var app = module.exports = express();
var cfg = require('../../config/app');

app.set('views', cfg.templateDir);
app.set('view engine', cfg.viewEngine);

var middle = require('./middle');

var prefix = '/auth';
var id = '/:id?';

var back = function (req, res) {
  return res.redirect('back');
};

app.get(prefix, middle.collection, function (req, res) {
  return res.render('users/view');
});