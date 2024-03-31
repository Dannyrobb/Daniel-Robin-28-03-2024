import { getGeoPosition } from "../api/fetchGeolocation";
export const getGeoLocation = (): Promise<{ cityName: string; countryName: string; key: string }> => {
  return new Promise((resolve, reject) => {
    const successCallback = (position: GeolocationPosition) => {
      getGeoPosition(position.coords.longitude, position.coords.latitude).then((data) => {
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
