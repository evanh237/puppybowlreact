import React from "react";
import PlayerCard from "./CardItem";
import "./AllPlayers.css";
import NewPlayer from "./NewPlayer";
import { SearchBar } from "./SearchBar";

const AllPlayers = ({ players, setPlayers }) => {
  return (
    <div>
      <h1>All Players</h1>

      <NewPlayer setPlayers={setPlayers} />
      {players.map((player) => {
        return (
          <PlayerCard key={player.id} player={player} setPlayers={setPlayers} />
        );
      })}
    </div>
  );
};

export default AllPlayers;
