import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import LocationsSearch from "../components/LocationsSearch";
import { Typography, CircularProgress, Container } from "@mui/material";
import WeatherCard from "../components/Weathercard";
import { fetchWeather } from "../state/weatherSlice";

const WeatherPage: React.FC = () => {
  const weather = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!weather.data) {
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
          Key={weather.data.Key}
          WeatherIcon={weather.data.WeatherIcon}
          WeatherText={weather.data.WeatherText}
        />
      )}
    </Container>
  );
};

export default WeatherPage;
