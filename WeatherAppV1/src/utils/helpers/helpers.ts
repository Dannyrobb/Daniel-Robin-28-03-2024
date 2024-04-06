import { getGeoPosition } from "../api/fetchGeolocation";

export const epochTimeConverter = (epochDate: number) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const milliseconds = epochDate < 1e12 ? epochDate * 1000 : epochDate;
  const date = new Date(milliseconds);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};

export const getCurrentDate = (): string => {
  const currentDate: Date = new Date();
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month: string = monthNames[currentDate.getMonth()];
  const day: number = currentDate.getDate();
  const year: number = currentDate.getFullYear();

  const formattedDate: string = `${month} ${day}, ${year}`;

  return formattedDate;
};

export const unitConverter = (temp: number): number => {
  return Math.round((temp * 9) / 5 + 32);
};

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
