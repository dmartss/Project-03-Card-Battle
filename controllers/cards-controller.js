const { findAll, findTen, findOne, findPremiumOne } = require("../models/card");

module.exports = cardsController = {
  //find all cards, card collection page
  index: async (req, res) => {
    try {
      const cards = await findAll();
      return res.json(cards);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //find ten cards, new user registration
  findTen: async (req, res) => {
    try {
      const cards = await findTen();
      return res.json(cards);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //find new one card, get new card page
  findOne: async (req, res) => {
    try {
      const cards = await findOne();
      return res.json(cards);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  findPremiumOne: async (req, res) => {
    try {
      const cards = await findPremiumOne(req.params.num);
      return res.json(cards);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
