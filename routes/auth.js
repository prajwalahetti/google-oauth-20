const express = require("express");
const router = express.Router();
const passport = require("passport");

// auth/google
// get auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//auth/google/callback
// get
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    //console.log(req.body);
    res.redirect("/dashboard");
  }
);

// logout user
// auth/logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    try {
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  });
});
module.exports = router;