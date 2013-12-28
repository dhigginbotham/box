var express = require('express');
var app = express();
var server = require('http').createServer(app);
var cfg = require('./config');
var passport = require('passport');



// express app settings
app.set('name', cfg.app.name);
app.set('port', cfg.app.port);
app.set('x-powered-by', false);
app.use(express.compress());
app.use(express.json());



// static dirs
app.use(express.static(cfg.app.img));
app.use(express.static(cfg.app.js));
app.use(express.static(cfg.app.css));
app.use(express.static(cfg.app.uploads));



// dev specific global middleware
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
};



// app specific global middleware
app.use(express.cookieParser());
app.use(require('./library/flash'));
app.use(passport.initialize());
app.use(passport.session());



// mount express subapps
app.use(require('./routes/main'));
app.use(require('./routes/users'));



// alternatively, you can use app.listen(port)
// however it is helpful to have access to your
// server later on.
server.listen(app.get('port'), function (err) {
  if (err) return console.log(err);
  return console.log('%s connected on %d', app.get('name'), app.get('port'));
});