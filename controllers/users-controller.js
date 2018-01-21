const bcrypt = require("bcryptjs");
const {
  create,
  update,
  destroy,
  showLeaderboard,
  updateCurrencyNWins
} = require("../models/user.js");

module.exports = usersController = {
  //create new user
  create: async (req, res) => {
    try {
      const { username, displayName, email, password } = req.body;
      const salt = await bcrypt.genSaltSync();
      const hash = await bcrypt.hashSync(password, salt);
      const user = await create({
        username,
        displayName,
        email,
        password_digest: hash
      });
      req.login(user, err => {
        if (err) return next(err);
        res.json({
          user,
          message: "ok",
          auth: true
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  index: async (req, res) => {
    const user = await res.json({
      user: req.user,
      data: "Put a user profile on this route"
    });
  },
  //edit user's info
  updateUser: async (req, res) => {
    try {
      console.log(req.params);
      const { body: { displayName, email }, params: { id } } = req;
      const user = await update(displayName, email, id);
      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //delete user
  deleteUser: async (req, res) => {
    try {
      const user = await destroy(req.params.id);
      return res.json({
        message: "ok",
        user
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },
  //show leaderboard page
  showLeaderboard: async (req, res) => {
    try {
      const data = await showLeaderboard();
      res.json({
        data,
        message: "ok"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //update currency and wins after player wins the battle
  updateCurrencyNWins: async (req, res) => {
    try {
      const { currency, wins, username } = req.body;
      const user = await updateCurrencyNWins({
        currency,
        wins,
        username
      });
      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
