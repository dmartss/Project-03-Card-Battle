const {
  findUserCards,
  addToUser,
  update,
  destroy,
  findFiveUserCards
} = require("../models/usercard");

module.exports = usercardsController = {
  //show users' cards, user cards page
  findUserCards: async (req, res) => {
    try {
      const usercards = await findUserCards(req.user.id);
      return res.json(usercards);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //add card to users_cards
  addToUser: async (req, res) => {
    try {
      const { cardId, name, type, attack, defense, imageUrl } = req.body;
      const usercard = await addToUser(
        {
          cardId,
          name,
          type,
          attack,
          defense,
          imageUrl
        },
        req.user.id
      );
      return res.json(usercard);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //edit users' card info
  updateCard: async (req, res) => {
    try {
      const { params: { id }, body: { name } } = req;
      const usercard = await console.log(id);
      await update(name, id);
      return res.json(usercard);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //delete one card
  deleteCard: async (req, res) => {
    try {
      const usercard = await destroy(req.params.id);
      return res.json({
        message: "ok",
        data: usercard
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },
  //find random five user cards, for battle ready page
  findFiveUserCards: async (req, res) => {
    try {
      const UserCard = await findFiveUserCards(req.user.id);
      await UserCard.findFiveUserCards(1);
      return {
        userCard,
        opponentCard
      };
      return res.json(data);
    } catch (err) {
      console.log(err);
    }
  }
};
