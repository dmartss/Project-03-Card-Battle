import React from "react";
import { HandCardSingle } from "./HandCardSingle";

// the playing card container for the game board
export const UsersHands = ({ cardData, ...props, select }) => (
  <div>
    {cardData &&
      cardData.map(card => (
        <HandCardSingle
          select={() => select(card)}
          key={cardData.indexOf(card)}
          card={card}
          makeSelection={this.makeSelection}
          {...props}
        />
      ))}
  </div>
);
