const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const init = require("./passport");
const { findByUserName } = require("../../models/user");
const { comparePass } = require("./auth-helpers");

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

module.exports = passport;
