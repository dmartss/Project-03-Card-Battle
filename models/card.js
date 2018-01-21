const { query } = require("../db/config");

module.exports = Card = {
  //Find all cards, for the card collection page
  findAll: () => query("SELECT * FROM cards"),
  //Find random ten cards, for new users registration
  findTen: () =>
    query(`
  SELECT * FROM cards
  ORDER BY RANDOM()
  LIMIT 10
  `),
  //Find random one card, for 'get new card'
  findOne: () =>
    query(`
  SELECT * FROM cards
  ORDER BY RANDOM()
  LIMIT 1
  `),

  findPremiumOne: num =>
    query(
      `
  SELECT * FROM cards
  where id > $1
  ORDER BY RANDOM()
  LIMIT 1
  `,
      [num]
    )
};
