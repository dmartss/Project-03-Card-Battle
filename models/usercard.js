const db = require("../db/config");

module.exports = Usercard = {
  //find all users' cards
  findUserCards: userid =>
    db.manyOrNone(
      `
    SELECT * FROM users_cards
    WHERE user_id = $1
    ORDER BY card_id, id ASC
    `,
      [userid]
    ),
  //add new card to user
  addToUser: ({ cardId, name, type, attack, defense, imageUrl }, userid) =>
    db.one(
      `
  INSERT INTO users_cards
  (card_id, name, type, attack, defense, image_url, user_id)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *
  `,
      [cardId, name, type, attack, defense, imageUrl, userid]
    ),
  //edit card name
  update: (name, id) =>
    db.one(
      `
  UPDATE users_cards SET
  name = $1
  WHERE id = $2
  RETURNING *
  `,
      [name, id]
    ),
  //delete card
  destroy: id =>
    db.none(
      `
  DELETE FROM users_cards
  WHERE id = $1
  `,
      [id]
    ),
  //get five random cards to prepare for the battle
  findFiveUserCards: id =>
    db.manyOrNone(
      `
  SELECT * FROM users_cards
  WHERE user_id = $1
  ORDER BY RANDOM()
  LIMIT 5
  `,
      [id]
    )
};
