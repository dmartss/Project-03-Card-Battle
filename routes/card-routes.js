const express = require("express");
const router = express.Router();
const { loginRequired } = require("../services/auth/auth-helpers");
const {
  index,
  findOne,
  findPremiumOne
} = require("../controllers/cards-controller");

//get all cards route
router.get("/", index);
//get one new card route
router.get("/new", loginRequired, findOne);
router.get("/new/:num", loginRequired, findPremiumOne);

module.exports = router;
