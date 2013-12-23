var isUser = exports.isUser = function (req, res, next) {

  if (req.isAuthenticated()) return next();

  req.session.messages = ['You must be logged in for that'];

  return res.redirect('/auth');

};

var isAdmin = exports.isAdmin = function (req, res, next) {

  if (req.isAuthenticated()) {

    if (req.user && req.user.admin) return next();

    res.session.messages = ['Insufficient account credentials'];

    return res.redirect('back');

  } else {

    req.session.messages = ['You must be logged in for that'];

    return res.redirect('/auth');

  };

};

var isAccount = exports.isAccount = function (req, res, next) {

  if (user.admin) return next();

  var id = (req.params.id) ? req.params.id : null;
  
  var user = (req.locals.user) ? req.locals.user : null;

  if (id && (res.locals.user._id == id)) return next();

  req.session.messages = ['You must be the user for this to work'];

  return res.redirect('back');

};