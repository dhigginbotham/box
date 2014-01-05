module.exports = function (req, res, next) {

  if (typeof req.flash != 'undefined') {
    res.locals.flash = req.flash;
  };

  if (req.session && typeof req.session.messages != 'undefined') {
    res.locals.flash = req.session.messages;
    delete req.session.messages;
  };

  return next();

};