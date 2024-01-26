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
    console.error("There was an error /GET players");
  }
};
