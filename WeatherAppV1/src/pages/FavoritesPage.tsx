import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid, Typography, Paper } from "@mui/material";
import { fetchFavoritesWeather } from "../utils/api/fetchFavorites"; // Update this import with the correct path
import { useAppSelector } from "../state/store";
import FavoriteStar from "../partials/FavoriteStar";
const FavoritesPage: React.FC = () => {
  const [favoritesWeather, setFavoritesWeather] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const favorites = useAppSelector((state) => state.favorites);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        // Replace favoritesData with your actual favorites array from your global state

        const weatherData = await fetchFavoritesWeather(favorites.list);
        setFavoritesWeather(weatherData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorites weather:", error);
        // Handle error appropriately
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" gutterBottom>
            Favorites
          </Typography>
        </Grid>
        {favoritesWeather.length == 0 && <div>No favorite sso far</div>}
        {loading ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <CircularProgress color="primary" />
          </Grid>
        ) : (
          favoritesWeather.map((favorite) => (
            <Grid item xs={12} key={favorite.key}>
              <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
                <Typography variant="h2">
                  {favorite.city}, {favorite.country}
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Temperature: {favorite.temperature} Celsius
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Weather: {favorite.weatherText}
                </Typography>
                <FavoriteStar weatherDetails={{ key: favorite.key, city: favorite.city, country: favorite.country }} />
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
