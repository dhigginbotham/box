var User = require('../models/user');
var cfg = require('../config/seed');

// create default admin seed
module.exports = function (fn) {
  User.findOne({username: /^admin$/i}, function (err, seed) {
    if (err) return fn(err, null);
    if (!seed) {
      var admin = new User(cfg);
      admin.save(function (err) {
        if (err) return fn(err, null);
        return fn(null, null);
      });
    } else {
      return fn(null, null);
    }
  });
};