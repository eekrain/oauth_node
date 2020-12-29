const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");

const app = express();

// set view engine
app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey],
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err));

// auth routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app on port 3000");
});
