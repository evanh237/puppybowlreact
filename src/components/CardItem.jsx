import React from "react";
import "./CardItem.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={player.imageUrl} alt={player.name} />
      <div className="card-content">
        <h3 className="card-title">{player.name}</h3>
        <p className="player-breed">{player.breed}</p>
        <div className="card-buttons">
          <button className="delete-button">Delete</button>
          <button className="details-button">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
