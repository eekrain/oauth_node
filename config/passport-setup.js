const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();

const User = require("../models/user-model");

passport.use(
  new GoogleStrategy(
    {
      // options for the google strat
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback fn
      console.log(profile);
      console.log(`email : ${profile.emails[0].value}`);
      console.log(`id : ${profile.id}`);
      new User({
        email: profile.emails[0].value,
        googleId: profile.id,
        name: profile.displayName,
      })
        .save()
        .then((newUser) => {
          console.log(`new user : ${newUser}`);
        });
    }
  )
);
