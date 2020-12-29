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
      const email = profile.emails[0].value;
      const googleId = profile.id;
      const name = profile.displayName;
      // check if user already exist in our db
      User.findOne({ googleId: googleId }).then((currentUser) => {
        if (currentUser) {
          // user already registered
          console.log(`user is: ${currentUser}`);
        } else {
          // if not, create user in our db

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
      });
    }
  )
);
