var express = require('express');
var app = module.exports = express();
var cfg = require('../../config/app');
var moment = require('moment');

app.set('views', cfg.templateDir);
app.set('view engine', cfg.viewEngine);

var middle = require('./middle');

var prefix = '/users';
var id = '/:id?';

var back = function (req, res) {
  return res.redirect('back');
};

app.get(prefix, middle.collection, function (req, res) {
  return res.render('users/view', {
    moment: moment
  });
});