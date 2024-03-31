import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import LocationsSearch from "../components/LocationsSearch";
import { Typography, CircularProgress, Container } from "@mui/material";
import WeatherCard from "../partials/Weathercard";
import { fetchWeather } from "../state/weatherSlice";
import { getGeoLocation } from "../utils/helpers/getGeoLocation";
const WeatherPage: React.FC = () => {
  const weather = useAppSelector((state) => state.weather);
  console.log(weather);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const userAnswer = confirm("Can we use your geo location ?");
    if (userAnswer) {
      getGeoLocation().then((data) => dispatch(fetchWeather(data.key, data.cityName, data.countryName)));
    } else {
      dispatch(fetchWeather("215854", "Tel Aviv", "Israel"));
    }
  }, []);
  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <LocationsSearch />

      {weather.loading && <CircularProgress color="primary" />}
      {weather.error && <Typography variant="body1">Error: {weather.error}</Typography>}
      {weather.data && !weather.loading && (
        <WeatherCard
          city={weather.data.city}
          country={weather.data.country}
          temperature={weather.data.Temperature}
          fiveDayForecast={weather.data.fiveDayForecast}
          Key={weather.data.key}
          WeatherIcon={weather.data.WeatherIcon}
          WeatherText={weather.data.WeatherText}
        />
      )}
    </Container>
  );
};

export default WeatherPage;
