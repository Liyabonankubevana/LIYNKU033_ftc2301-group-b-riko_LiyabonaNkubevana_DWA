const origin = "https://podcast-api.netlify.app/";

export const fetchAllShows = async () => {
  try {
    const response = await fetch(origin + "shows");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching all shows:", error);
    throw error;
  }
};

export const fetchSeasons = async (id) => {
  try {
    const response = await fetch(origin + "id/" + id);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching seasons:", error);
    throw error;
  }
};
