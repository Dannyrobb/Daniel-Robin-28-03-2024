import React from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import LocationsSearch from "../components/LocationsSearch";
import LocationPermission from "../components/LocationPermission";
import { Typography, CircularProgress, Container, Grid, Paper, Box } from "@mui/material";
import WeatherCard from "../partials/Weathercard";
const WeatherPage: React.FC = () => {
  const weather = useAppSelector((state) => state.weather);
  console.log(weather);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <LocationPermission />

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
