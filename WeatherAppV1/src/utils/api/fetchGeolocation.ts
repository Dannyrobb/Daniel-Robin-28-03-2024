import axios from "axios";
import { API_KEY, BASE_URL_GEOLOCATION } from "../../../config";
import { GeoPositionResponse } from "../../Interfaces/GeoLocation";
import { getGeoLocation } from "../helpers/helpers";
import { fetchWeather } from "../../state/weatherSlice";
import {} from "redux";

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

export function handleGeolocationPermission(dispatch) {
  const geolocationPermissionGranted = localStorage.getItem("geolocationPermission");

  if (geolocationPermissionGranted === "true") {
    return getGeoLocation()
      .then((data) => dispatch(fetchWeather(data.key, data.cityName, data.countryName)))
      .catch((e) => {
        dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
      });
  } else if (geolocationPermissionGranted === "false") {
    dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
    return Promise.resolve();
  } else {
    const userAnswer = confirm("May we use your geolocation for default location based weather?");
    if (userAnswer) {
      return getGeoLocation()
        .then((data) => {
          dispatch(fetchWeather(data.key, data.cityName, data.countryName));
          localStorage.setItem("geolocationPermission", "true");
        })
        .catch((e) => {
          dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
        });
    } else {
      localStorage.setItem("geolocationPermission", "false");
      dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
      return Promise.resolve();
    }
  }
}
