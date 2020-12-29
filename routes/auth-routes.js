const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// callback router for google to redirect to
router.get("/google/redirect", (req, res) => {
  res.send("you reached the callback uri");
});

module.exports = router;
