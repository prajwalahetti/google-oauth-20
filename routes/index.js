const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /
// get
router.get("/", ensureGuest, (req, res) => {
  
  res.send("landing page");
});

// /dashboard
// get

router.get("/dashboard",ensureAuth, (req, res) => {
 
  res.send('this is a protrected routes')
});

// /landing
// get
router.get("/landing",ensureGuest, (req, res) => {
  res.send('this is a un protected landing routes')
 });



module.exports = router;
