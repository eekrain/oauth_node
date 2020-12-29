const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      // options for the google strat
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
    },
    () => {
      // passport callback fn
    }
  )
);
