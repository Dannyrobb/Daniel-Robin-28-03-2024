import React from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import LocationsSearch from "../components/LocationsSearch";
import LocationPermission from "../components/LocationPermission";
import { Typography, CircularProgress, Container, Grid, Paper, Box } from "@mui/material";
import WeatherCard from "../partials/Weathercard";
const WeatherPage: React.FC = () => {
  //COMMENT BACK IN TO CHANGE TO STATE WEATHER

  // const weather = useAppSelector((state) => state.weather);
  // console.log(weather);
  const weather = {
    data: {
      city: "New York",
      country: "US",
      temperature: { Metric: { Value: 20, Unit: "C", UnitType: 12312 }, Imperial: { Unit: "F", UnitType: 12312, Value: 20 } },
      fiveDayForecast: [
        {
          dayOfWeek: "Monday",
          tempretures: {
            Maximum: { Value: 22 },
            Minimum: { Value: 12 },
          },
        },
        {
          dayOfWeek: "Tuesday",
          tempretures: {
            Maximum: { Value: 21 },
            Minimum: { Value: 17 },
          },
        },
        {
          dayOfWeek: "Wednesday",
          tempretures: {
            Maximum: { Value: 19 },
            Minimum: { Value: 16 },
          },
        },
        {
          dayOfWeek: "Thursday",
          tempretures: {
            Maximum: { Value: 18 },
            Minimum: { Value: 15 },
          },
        },
        {
          dayOfWeek: "Friday",
          tempretures: {
            Maximum: { Value: 20 },
            Minimum: { Value: 16 },
          },
        },
      ],
      key: "123456",
      WeatherIcon: 1,
      WeatherText: "Sunny",
    },
  };
  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <LocationPermission />

      <LocationsSearch />

      {/* {weather.loading && <CircularProgress color="primary" />}
          {weather.error && <Typography variant="body1">Error: {weather.error}</Typography>} */}
      {weather.data && (
        <WeatherCard
          city={weather.data.city}
          country={weather.data.country}
          temperature={weather.data.temperature}
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
