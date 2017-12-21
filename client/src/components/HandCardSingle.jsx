import React from "react";

// special card component for the user playing cards,
// contains click listener for user to select card ONLY IF THERE IS AN OPPONENT
export const HandCardSingle = ({
  card: { name, attack, defense, type },
  card,
  opponent,
  select
}) => (
  <div className={`card ${type}`} onClick={opponent && (() => select(card))}>
    <div className="card-top">
      <div className="card-name">
        <b>{name}</b>
        <p>{type}</p>
      </div>
    </div>
    <div className="card-numbers">
      <p>{attack && `ATT ${attack}`}</p>
      <p>{defense && `DEF ${defense}`}</p>
    </div>
  </div>
);
