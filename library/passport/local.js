var passport = require('passport');
var Local = require('passport-local').Strategy;
var User = require('../../models/user');

// push the user._id to the session, this happens
// on login
passport.serializeUser(function (user, done) {
  return done(null, user._id);
});

// deserializes user from db, this would need to be
// changed depending on your needs/db/api
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    return done(err, user);
  });
});

// initialize passport `local` strategy
passport.use(new Local(username, password, done) {

  var username = username.trim(); //kill spaces

  // first we find our user, we're going to allow them
  User.findOne({username: new RegExp('^' + username + '$', 'i')}, function (err, user) {

    if (err) return done(err, null);
    if (!user) return done(null, false, {message: 'Unknown user ' + username});

    // comparing password
    user.comparePassword(password, function (err, matched) {

      if (err) return done(err, null);
      if (matched) {

        // add some stuff to the user before
        // we save it all
        user.last_login.push(Date.now());

        // fire user.save, not to be confused with `User`
        user.save(function (err) {
          if (err) return done(err, null);
          return done(null, user);
        });

      } else {
        // bad password, bro
        return done(null, false, {message: 'Invalid Password'});
      };

    });

  });

});