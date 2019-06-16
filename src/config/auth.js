const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { compare } = require("../helpers/encrypt");

module.exports = passport => {
  passport.use(
    "local",
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      async (username, password, done) => {
        const user = await User.findOne({ username: username }).select(
          "password"
        );
        if (await compare(password, user.password)) {
          return done(null, user);
        }
        return done(null, false);
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};
