var express = require('express');
var app = module.exports = express();
var cfg = require('../../config/app');

app.set('views', cfg.templateDir);
app.set('view engine', cfg.viewEngine);

var prefix = '/auth';
var id = '/:id?';