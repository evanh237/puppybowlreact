import React from "react";
import PlayerCard from "./CardItem";

const AllPlayers = ({ players }) => {
  return (
    <div>
      <h1>All Players</h1>
      {players.map((player) => {
        return (
          <div className="player-cards">
            <PlayerCard key={player.id} player={player} />
          </div>
        );
      })}
    </div>
  );
};

export default AllPlayers;
