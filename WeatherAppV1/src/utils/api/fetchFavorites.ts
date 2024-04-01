import axios from "axios";
import { BASE_URL_CURRENT_WEATHER, API_KEY } from "../../../config";

interface Favorite {
  Key: string;
  city: string;
  country: string;
}

interface FavoriteWeatherData extends Favorite {
  temperature: number;
  weatherText: string;
  icon: string;
}

export const fetchFavoritesWeather = async (favorites: Favorite[]): Promise<FavoriteWeatherData[]> => {
  try {
    const promises = favorites.map(async (favorite) => {
      const response = await axios.get(`${BASE_URL_CURRENT_WEATHER}/${favorite.Key}?apikey=${API_KEY}`);

      if (response.status !== 200) {
        throw new Error(`Failed to fetch weather data for ${favorite.city}, ${favorite.country}. Status: ${response.status}`);
      }

      const data = response.data;
      const { Temperature, WeatherText, WeatherIcon } = data[0];

      return {
        Key: favorite.Key,
        city: favorite.city,
        country: favorite.country,
        temperature: Temperature.Metric.Value,
        weatherText: WeatherText,
        icon: WeatherIcon,
      };
    });

    const favoritesWeatherData = await Promise.all(promises);

    return favoritesWeatherData;
  } catch (error) {
    console.error("Error fetching favorites weather data:", error);
    throw error;
  }
};
