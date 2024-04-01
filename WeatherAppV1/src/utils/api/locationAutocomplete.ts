// import axios from "axios";
// import { BASE_URL_LOCATIONS, API_KEY } from "../../../config";
// import { LocationData } from "../../Interfaces/SearchLocation";
// export const fetchLocations = async (searchTerm: string): Promise<LocationData[]> => {
//   try {
//     const response = await axios.get(`${BASE_URL_LOCATIONS}?apikey=${API_KEY}&q=${searchTerm}`);
//     if (response.status !== 200) {
//       throw new Error(`Failed to fetch location data. Status: ${response.status}`);
//     }

//     const data: LocationData[] = response.data;
//     return data;
//   } catch (error) {
//     console.error("Error fetching location data:", error);
//     throw error;
//   }
// };
import axios from "axios";
import { BASE_URL_LOCATIONS, API_KEY } from "../../../config";
import { LocationData } from "../../Interfaces/SearchLocation";

export const fetchLocations = async (searchTerm: string): Promise<LocationData[]> => {
  try {
    const response = await axios.get(`${BASE_URL_LOCATIONS}?apikey=${API_KEY}&q=${searchTerm}`);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch location data. Status: ${response.status}`);
    }

    const data: LocationData[] = response.data;
    const uniqueLocations: LocationData[] = removeDuplicateLocations(data);

    return uniqueLocations;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

const removeDuplicateLocations = (locations: LocationData[]): LocationData[] => {
  const uniqueLocations: LocationData[] = [];
  const keysSet: Set<string> = new Set();
  if (locations) {
    for (const location of locations) {
      if (!keysSet.has(location.LocalizedName)) {
        uniqueLocations.push(location);
        keysSet.add(location.LocalizedName);
      }
    }
  }

  return uniqueLocations;
};
