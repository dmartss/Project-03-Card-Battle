const express = require("express");
const router = express.Router();
const {
  index,
  showLeaderboard,
  updateCurrencyNWins,
  updateUser,
  deleteUser
} = require("../controllers/users-controller");
const { findTen } = require("../controllers/cards-controller");
const { loginRequired } = require("../services/auth/auth-helpers");

//show users cards
router.get("/", loginRequired, index);
//get random ten new cards for new users
router.get("/new", loginRequired, findTen);
//show leaderboard
router.get("/leaderboard", loginRequired, showLeaderboard);
//update currency and wins after winning battle
router.put("/win", loginRequired, updateCurrencyNWins);
//update users info
router.put("/:id", loginRequired, updateUser);
//delete user
router.delete("/:id", loginRequired, deleteUser);

module.exports = router;
