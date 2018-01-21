const express = require("express");
const router = express.Router();
const {
  findUserCards,
  addToUser,
  updateCard,
  deleteCard,
  findFiveUserCards
} = require("../controllers/usercards-controller");
const { loginRequired } = require("../services/auth/auth-helpers");

//find all cards of specific user
router.get("/", loginRequired, findUserCards);
//add new card to user
router.post("/new", loginRequired, addToUser);
//customize name of user's card
router.put("/:id", loginRequired, updateCard);
//delete user's cards
router.delete("/:id", loginRequired, deleteCard);
//find five random cards from user's cards, for battle preparation
router.get("/start", loginRequired, findFiveUserCards);

module.exports = router;
