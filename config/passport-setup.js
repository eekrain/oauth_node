const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

passport.use(
  new GoogleStrategy({
    // options for the google strat
    clientID:
      "449418706030-rg79dpmr7oc2okpqu083n53tvm8ruhsg.apps.googleusercontent.com",
    clientSecret: "l4kRm-JGgOhlZovSjE-GzGGV",
  }),
  () => {
    // passport callback fn
  }
);
