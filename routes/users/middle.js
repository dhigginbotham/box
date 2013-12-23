var User = require('../../models/user');
var middle = {};

middle.collection = function (req, res, next) {
  User.find({}, function (err, arr) {
    if (err) return next(err, null);
    res.locals.collection = arr;
    return next(null, arr);
  });
};