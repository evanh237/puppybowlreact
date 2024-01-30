import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Navbar from "./components/Navbar";
import { fetchAllPlayers } from "./api";
import SinglePlayer from "./components/SinglePlayer";

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getAllPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players.players);
    };
    getAllPlayers();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route
          path="/players"
          element={<AllPlayers players={players} setPlayers={setPlayers} />}
        />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
};

export default App;
