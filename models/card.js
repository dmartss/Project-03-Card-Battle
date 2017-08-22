const db = require('../db/config');

const Card = {};

Card.findAll = () => {
  return db.query('SELECT * FROM cards');
}

Card.findTen = () => {
  return db.query(`
  SELECT * FROM cards
  WHERE id > 0
  ORDER BY RANDOM()
  LIMIT 10
  `);
}

Card.addToUser = (card,userid) => {
  return db.one(`
  INSERT INTO users_cards
  (name, class, attack, defense, user_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `, [card.name, card.class, card.attack, card.defense, userid]);
}

module.exports = Card;