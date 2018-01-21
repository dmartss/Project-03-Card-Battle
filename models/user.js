const { findByUserName, oneOrNone, one, query, none } = require("../db/config");

module.exports = User = {
  //find users' cards
  findByUserName: username =>
    oneOrNone(
      `
    SELECT * FROM users
    WHERE username = $1
    `,
      [username]
    ),
  //create new users
  create: ({ username, password_digest, displayName, email }) =>
    one(
      `
    INSERT INTO users
    (username, password_digest, display_name, email, wins, currency)
    VALUES ($1, $2, $3, $4, 0, 100)
    RETURNING *
    `,
      [username, password_digest, displayName, email]
    ),
  //edit users info
  update: (displayName, email, id) =>
    one(
      `
  UPDATE users SET
  display_name = $1,
  email = $2
  WHERE id = $3
  RETURNING *
  `,
      [displayName, email, id]
    ),
  //leader board page, show top ten users according to their wins
  showLeaderboard: () =>
    query(`
    SELECT * FROM users
    ORDER BY wins DESC
    LIMIT 10
    `),
  //delete usrs
  destroy: (id, user_id) =>
    none(
      `
  DELETE FROM users_cards where user_id = $1;
  DELETE FROM users WHERE id = $1
  `,
      [id]
    ),
  //update currency and wins after winning
  updateCurrencyNWins: ({ wins, currency, username }) =>
    one(
      `
    UPDATE users SET
    wins = $1,
    currency = $2
    WHERE username = $3
    RETURNING *
    `,
      [wins, currency, username]
    )
};
