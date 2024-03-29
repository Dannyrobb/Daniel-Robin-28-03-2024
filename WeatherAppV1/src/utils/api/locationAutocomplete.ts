import axios from "axios";
import { BASE_URL_LOCATIONS, API_KEY, BASE_URL_CURRENT_WEATHER } from "../../../config";
import locations from "../../assets/demo.json";
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
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

export const fetchLocationsLocal = (searchTerm: string) => {
  try {
    const filteredLocations = locations.filter((location) => {
      return location.LocalizedName.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    console.log(filteredLocations);

    return filteredLocations;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
