import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import LocationsSearch from "../components/LocationsSearch";
import LocationPermission from "../components/LocationPermission";
import { Typography, CircularProgress, Container, Grid, Paper, Switch, FormControlLabel, ThemeProvider } from "@mui/material";
import { toggleDarkMode } from "../state/themeSlice"; // Import action creator
import { useCustomTheme } from "../assets/theme";
import FavoriteStar from "../partials/FavoriteStar";
// import { fetchLocations, fetchLocationsLocal } from "../utils/api/locationAutocomplete";
const WeatherPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);
  const theme = useCustomTheme();
  console.log(weather);
  const handleToggleTheme = () => {
    dispatch(toggleDarkMode()); // Dispatch action to toggle dark mode
  };
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" gutterBottom>
            Weather App
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <LocationPermission />
        </Grid>

        <LocationsSearch />

        <Grid item xs={12} style={{ textAlign: "center" }}>
          {weather.loading && <CircularProgress color="primary" />}
          {weather.error && <Typography variant="body1">Error: {weather.error}</Typography>}
          {weather.data && (
            <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
              <Typography variant="h2">
                {weather.data.city}, {weather.data.country}
              </Typography>
              <Typography variant="h3" gutterBottom>
                Temperature: {weather.data.Temperature.Metric.Value} {weather.data.Temperature.Metric.Unit}
              </Typography>
              {/* <Typography variant="body1" gutterBottom>
                  Temperature: {weather.data.temperature}
                </Typography> */}
              <Typography variant="body1" gutterBottom>
                Weather: {weather.data.WeatherText}
              </Typography>
              <FavoriteStar weatherDetails={{ key: weather.data.key, city: weather.data.city, country: weather.data.country }} />
            </Paper>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Switch onChange={handleToggleTheme} />} label="Toggle Light/Dark Mode" labelPlacement="start" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherPage;
