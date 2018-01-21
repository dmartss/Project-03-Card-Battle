const express = require("express");
const passport = require("../services/auth/local");
const authHelpers = require("../services/auth/auth-helpers");
const { create } = require("../controllers/users-controller");
const router = express.Router();

//register route
router.post("/register", create);
//login route
router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    successRedirect: "/auth/success",
    failureRedirect: "/auth/failure"
  })
);
//logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.json({
    auth: false,
    message: "logged out"
  });
});
//login success route
router.get("/success", (req, res) => {
  res.json({
    auth: true,
    user: req.user,
    message: "ok"
  });
});
//login failed route: non-matching username/password
router.get("/failure", (req, res) => {
  res.json({
    auth: false,
    user: null,
    message: "Login failed"
  });
});

module.exports = router;
