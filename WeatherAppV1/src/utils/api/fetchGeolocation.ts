import axios from "axios";
import { API_KEY, BASE_URL_GEOLOCATION } from "../../../config";
interface GeoPositionResponse {
  Key: string;
  Country: {
    LocalizedName: string;
  };
  AdministrativeArea: {
    LocalizedName: string;
  };
}

export async function getGeoPosition(
  latitude: number,
  longitude: number
): Promise<{
  countryName: string;
  cityName: string;
  key: string;
}> {
  const apiUrl = `${BASE_URL_GEOLOCATION}?apikey=${API_KEY}&q=${latitude},${longitude}`;

  try {
    const response = await axios.get<GeoPositionResponse>(apiUrl);
    const { Key, Country, AdministrativeArea } = response.data;

    const countryName = Country.LocalizedName;
    const cityName = AdministrativeArea.LocalizedName;
    const key = Key;

    return { countryName, cityName, key };
  } catch (error) {
    console.error("Error fetching geo position:", error);
    throw error;
  }
}
