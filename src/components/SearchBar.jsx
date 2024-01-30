import React, { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-MT-WEB-PT/players")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((player) => {
          return (
            player && player.name && player.name.toLowerCase().includes(value)
          );
        });
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
