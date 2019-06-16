const express = require("express");
const router = express();
const passport = require("passport");
const { authenticate } = require("../helpers/authenticate");
const { encrypt } = require("../helpers/encrypt");

router.get("/", authenticate, (req, res, next) => {
  res.send(res.locals.user);
});

router.post("/register", async (req, res, next) => {
  const User = require("../models/User");
  req.body.password = await encrypt(req.body.password);
  const user = await User.create(req.body);
  res.send(user);
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?loginfail=true"
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
