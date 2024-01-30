import React from "react";
import "./CardItem.css";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../api";

const PlayerCard = ({ player, isSinglePlayer, setPlayers }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await deletePlayer(player.id);
    setPlayers((prevState) => {
      return prevState.filter((pup) => pup.id !== player.id);
    });
  };
  const handleSeeDetails = () => {
    if (!isSinglePlayer) {
      navigate(`/players/${player.id}`);
    } else {
      navigate("/players");
    }
  };
  return (
    <div className="card-container">
      <img className="card-image" src={player.imageUrl} alt={player.name} />
      <div className="card-content">
        <h3 className="card-title">{player.name}</h3>
        <p className="player-breed">{player.breed}</p>
        <div className="card-buttons">
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
          <button onClick={handleSeeDetails} className="details-button">
            {!isSinglePlayer ? "See Details" : "Go Back"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
