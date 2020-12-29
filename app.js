const express = require("express");

const authRoutes = require("./routes/auth-routes");

const app = express();

// set view engine
app.set("view engine", "ejs");

// auth routes
app.use("/auth", authRoutes);

// create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("app on port 3000");
});
