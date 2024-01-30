const COHORT = "2309-FTB-MT-WEB-PT";
const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${URL}/players`);

    if (!response.ok) {
      throw new Error("Network response /GET allPlayers not ok");
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There was an error /GET all players");
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${URL}/players/${playerId}`);
    if (!response.ok) {
      throw new Error("Network response /GET single player not ok");
    }
    const result = await response.json();
    console.log(result);

    return result.data.player;
  } catch (error) {
    console.error("There was an error /GET single player");
  }
};

export const addNewPlayer = async (name, breed, imageUrl) => {
  try {
    const response = await fetch(`${URL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        breed,
        imageUrl,
      }),
    });

    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${URL}/players/${playerId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("network /DELETE error");
    }
  } catch (error) {
    console.error("There was an error /DELETE,", error);
  }
};
