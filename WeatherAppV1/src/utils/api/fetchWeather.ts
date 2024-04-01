import axios from "axios";
import { BASE_URL_CURRENT_WEATHER, BASE_URL_FIVE_DAY_FORECAST, API_KEY } from "../../../config";
import { epochTimeConverter } from "../helpers/epochTImeConverter";
export const fetchCurrentWeather = async (locationKey: string, locationCity: string, locationCountry: string) => {
  interface WeatherForecast {
    Date: string;
    Day: {
      Icon: number;
      IconPhrase: string;
      HasPrecipitation: boolean;
    };
    EpochDate: number;
    Link: string;
    MobileLink: string;
    Night: {
      Icon: number;
      IconPhrase: string;
      HasPrecipitation: boolean;
    };
    Sources: string[];
    Temperature: {
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
  }

  try {
    const currentWeatherResponse = await axios.get(`${BASE_URL_CURRENT_WEATHER}/${locationKey}?apikey=${API_KEY}`);

    if (currentWeatherResponse.status !== 200) {
      throw new Error(`Failed to fetch current weather data. Status: ${currentWeatherResponse.status}`);
    }

    const fiveDayForecastResponse = await axios.get(`${BASE_URL_FIVE_DAY_FORECAST}/${locationKey}?apikey=${API_KEY}&metric=true`);

    if (fiveDayForecastResponse.status !== 200) {
      throw new Error(`Failed to fetch five day forecast data. Status: ${fiveDayForecastResponse.status}`);
    }

    const currentWeatherData = currentWeatherResponse.data[0];
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
