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

app.get('/login', function (req, res) {
  return res.render('users/login');
});

app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return next(err, null);
    if (!user) {
      req.session.messages = [info.message];
      return res.redirect('back');
    } else {
      req.logIn(user, function (err) {
        if (err) return next(err, null);
        return res.redirect('/');
      });
    };
  })(req, res, next);
});

app.get('/logout', function (req, res) {
  req.logout();
  return res.redirect('/login');
});