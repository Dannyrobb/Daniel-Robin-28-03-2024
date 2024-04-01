import axios from "axios";
import { BASE_URL_LOCATIONS, API_KEY } from "../../../config";
interface LocationData {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export const fetchLocations = async (searchTerm: string): Promise<LocationData[]> => {
  try {
    const response = await axios.get(`${BASE_URL_LOCATIONS}?apikey=${API_KEY}&q=${searchTerm}`);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch location data. Status: ${response.status}`);
    }

    const data: LocationData[] = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
