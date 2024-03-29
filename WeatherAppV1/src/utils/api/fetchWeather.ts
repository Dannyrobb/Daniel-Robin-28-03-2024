import axios from "axios";
import { BASE_URL_CURRENT_WEATHER, API_KEY } from "../../../config";

export const fetchCurrentWeather = async (locationKey: string) => {
  try {
    const response = await axios.get(`${BASE_URL_CURRENT_WEATHER}/${locationKey}?apikey=${API_KEY}`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch location data. Status: ${response.status}`);
    }

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
