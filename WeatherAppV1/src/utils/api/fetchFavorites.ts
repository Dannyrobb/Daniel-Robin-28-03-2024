import { Favorite, FavoriteWeatherData } from "../../Interfaces/Favorites";
import { fetchWeatherData } from "./fetchWeather";

export const fetchFavoritesWeather = async (favorites: Favorite[]): Promise<FavoriteWeatherData[]> => {
  try {
    const promises = favorites.map(async (favorite) => {
      const currentWeatherData = await fetchWeatherData(favorite.Key);
      return {
        Key: favorite.Key,
        city: favorite.city,
        country: favorite.country,
        temperature: currentWeatherData.Temperature.Metric.Value,
        weatherText: currentWeatherData.WeatherText,
        icon: currentWeatherData.WeatherIcon,
      };
    });

    const favoritesWeatherData = await Promise.all(promises);

    return favoritesWeatherData;
  } catch (error) {
    console.error("Error fetching favorites weather data:", error);
    throw error;
  }
};
