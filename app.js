const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");

const app = express();

// set view engine
app.set("view engine", "ejs");

// connect to mongodb
mongoose.connect(process.env.mongodbURI, () => {
  console.log("connected mongodb");
});

// auth routes
app.use("/auth", authRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app on port 3000");
});
