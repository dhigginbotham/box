module.exports = function (req, res, next) {

  if ((req.hasOwnProperty('flash')) && (typeof req.flash == 'object')) {
    res.locals.flash = req.flash;
  };

  if (req.session && req.session.hasOwnProperty('messages')) {
    req.locals.flash = req.session.messages;
    delete req.session.messages;
  };

  return next();

};