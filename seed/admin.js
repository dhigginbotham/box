var User = require('../models/user');

// seed account defaults
var account = {
  username: 'admin',
  email: 'admin@localhost.it',
  password: 'adminPassword!secure',
  first_name: 'Web',
  last_name: 'Min',
  admin: true
};

// create default admin seed
module.exports = function (fn) {
  User.findOne({username: /^admin$/i}, function (err, seed) {
    if (err) return fn(err, null);
    if (!seed) {
      var admin = new User(account);
      admin.last_login.push(Date.now());
      admin.save(function (err) {
        if (err) return fn(err, null);
        return fn(null, null);
      });
    } else {
      return fn(null, null);
    }
  });
};