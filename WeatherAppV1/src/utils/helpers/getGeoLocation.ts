import { getGeoPosition } from "../api/fetchGeolocation";
import { fetchWeather } from "../../state/weatherSlice";
export const getGeoLocation = (): Promise<{ cityName: string; countryName: string; key: string }> => {
  return new Promise((resolve, reject) => {
    const successCallback = (position: GeolocationPosition) => {
      getGeoPosition(position.coords.latitude, position.coords.longitude).then((data) => {
        resolve(data);
      });
    };
    const errorCallback = (error: GeolocationPositionError) => {
      console.error("Error getting geolocation:", error.message);
      reject(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
};

export function handleGeolocationPermission(dispatch) {
  const geolocationPermissionGranted = localStorage.getItem("geolocationPermission");

  if (geolocationPermissionGranted === "true") {
    return getGeoLocation()
      .then((data) => dispatch(fetchWeather(data.key, data.cityName, data.countryName)))
      .catch((e) => {
        console.log(e);

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
          localStorage.setItem("geolocationPermission", true);
        })
        .catch((e) => {
          console.log(e);
          dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
        });
    } else {
      localStorage.setItem("geolocationPermission", false);
      dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
      return Promise.resolve(); // Return a resolved promise if user denies permission
    }
  }
}
