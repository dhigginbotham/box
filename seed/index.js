var cfg = require('../config/seed');
var admin = require('./admin');

if (cfg.admin) {
  admin(function (err) {
    if (err) return console.log(err);
    return console.log('finished seed process');
  });
};
