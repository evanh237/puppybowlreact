import React from "react";
import { useState } from "react";
import { addNewPlayer } from "../api";

const NewPlayer = ({ setPlayers }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !breed || !imageUrl) {
      alert("Please fill out all fields!");
    }
    const newPlayer = await addNewPlayer(name, breed, imageUrl);
    setPlayers((prevPlayer) => [newPlayer, ...prevPlayer]);
    setName("");
    setBreed("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Player</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="breed">Breed</label>
      <input
        type="text"
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
        required
      />
      <label htmlFor="url">Image URL</label>
      <input
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayer;
