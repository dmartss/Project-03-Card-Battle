import React, { Component } from "react";
import Card from "./Card";

// displays the users cards in the dashboard
class UserCards extends Component {
  componentDidMount = () => this.props.getInitialUserCards;

  render() {
    return (
      <div className="UserCards">
        {this.props.userCards
          ? this.props.userCards.map(card => (
              <Card
                key={card.id}
                deleteUserCard={this.props.deleteUserCard}
                userSubmitEdit={this.props.userSubmitEdit}
                userSelectedCardToEdit={this.props.userSelectedCardToEdit}
                currentCardId={this.props.currentCardId}
                card={this.props.card}
              />
            ))
          : null}
      </div>
    );
  }
}
export default UserCards;
