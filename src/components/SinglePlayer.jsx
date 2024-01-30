import React, { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../api";
import PlayerCard from "./CardItem";
import { useParams } from "react-router-dom";

const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSinglePlayer = async () => {
      const player = await fetchSinglePlayer(id);
      setPlayer(player);
    };
    getSinglePlayer();
  }, [id]);

  return (
    <div>{player && <PlayerCard player={player} isSinglePlayer={id} />}</div>
  );
};
export default SinglePlayer;
