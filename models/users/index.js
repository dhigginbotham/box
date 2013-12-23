var db = require('../db');
var Schema = require('mongoose').Schema;
var ObjectId = Schema.Types.ObjectId;

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10; // keep this in mind, it's hardcoded to not be played with much.

// schema, edit as you need
var User = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  username: String,
  password: String,
  admin: Boolean,
  editor: Boolean,
  updated_date: [type: Date, default: Date.now],
  created_date: type: Date, default: Date.now,
  last_login: [type: Date, default: Date.now],
  ip: String
});

// mainly auth stuff, but you can add in as you need
User.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  } else {
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
    });
  };
});

User.methods.comparePassword = (candidatePass, next) {
  bcrypt.compare(candidatePass, this.password, function (err, isMatch) {
    if (err) return next(err);
    return next(null, isMatch);
  });
};

var user = module.exports = db.model('User', User);