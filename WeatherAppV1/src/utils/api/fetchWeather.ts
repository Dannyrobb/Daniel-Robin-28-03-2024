import axios from "axios";
import { BASE_URL_CURRENT_WEATHER, BASE_URL_FIVE_DAY_FORECAST, API_KEY } from "../../../config";
import { epochTimeConverter } from "../helpers/helpers";
import { WeatherForecast } from "../../Interfaces/Weather";

export const fetchCurrentWeather = async (locationKey: string, locationCity: string, locationCountry: string) => {
  try {
    const currentWeatherData = await fetchWeatherData(locationKey);
    currentWeatherData.Temperature.Metric.Value = Math.round(currentWeatherData.Temperature.Metric.Value);

    const fiveDayForecastResponse = await axios.get(`${BASE_URL_FIVE_DAY_FORECAST}/${locationKey}?apikey=${API_KEY}&metric=true`);

    if (fiveDayForecastResponse.status !== 200) {
      throw new Error(`Failed to fetch five day forecast data. Status: ${fiveDayForecastResponse.status}`);
    }

    const fiveDayForecastData = fiveDayForecastResponse.data.DailyForecasts.map((forcast: WeatherForecast) => {
      return { dayOfWeek: epochTimeConverter(forcast.EpochDate), tempretures: forcast.Temperature };
    });

    const fullData = {
      ...currentWeatherData,
      key: locationKey,
      city: locationCity,
      country: locationCountry,
      fiveDayForecast: fiveDayForecastData,
    };

    return fullData;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

export const fetchWeatherData = async (locationKey: string) => {
  const response = await axios.get(`${BASE_URL_CURRENT_WEATHER}/${locationKey}?apikey=${API_KEY}`);

  if (response.status !== 200) {
    throw new Error(`Failed to fetch current weather data. Status: ${response.status}`);
  }

  return response.data[0];
};
