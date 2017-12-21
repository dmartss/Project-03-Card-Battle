import React from "react";

import { UserCards } from "./UserCards";
import NewCard from "./NewCard";
import { Leaderboard } from "./Leaderboard";
import { CardCollection } from "./CardCollection";
import UserProfile from "./UserProfile";

// the container for all of the pages in the user dashboard
// changes based on the currentContent state in App.js
export const DashboardContents = ({ currentContent, ...props }) => (
  <div className="dashboard-contents">
    {currentContent === "user-cards" ? (
      <UserCards {...props} />
    ) : currentContent === "card-collection" ? (
      <CardCollection {...props} />
    ) : currentContent === "get-new-card" ? (
      <NewCard {...props} />
    ) : currentContent === "user-profile" ? (
      <UserProfile {...props} />
    ) : currentContent === "leaderboard" ? (
      <Leaderboard {...props} />
    ) : null}
  </div>
);
