// this is all you'll have to require
// to create new mongoose schemas, and we should
// keep all hardcoded elements inside their 
// appropriate config file.
var mongoose = require('mongoose');
var cfg = require('../../config/db');

mongoose.set('debug', cfg.debug);

var db = module.exports = mongoose.createConnection(cfg.uri);

db.on('error', console.error.bind(console), 'connection error:');