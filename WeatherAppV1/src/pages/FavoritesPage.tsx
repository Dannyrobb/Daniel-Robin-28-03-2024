import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { fetchFavoritesWeather } from "../utils/api/fetchFavorites"; // Update this import with the correct path
import NoFavoritesBox from "../components/NoFavoritesBox";
import { useAppSelector } from "../state/store";
import { FavoritesWeatherCard } from "../partials/FavoritesWeatherCard";
import { CircularProgress, Fade } from "@mui/material";
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
        console.log(weatherData);
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
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Fade in={true} timeout={444}>
            <Typography variant="h1" align="center" gutterBottom>
              Favorites
            </Typography>
          </Fade>
        </Grid>
        {loading && <CircularProgress color="inherit" size={60} />}
        {!loading && favoritesWeather.length == 0 && <NoFavoritesBox />}
        {/* {loading ? (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <CircularProgress color="primary" />
          </Grid>
        ) : ( */}
        {favoritesWeather.length > 0 && (
          <>
            {favoritesWeather.map((favorite) => {
              console.log(favorite);
              return <FavoritesWeatherCard favorite={favorite} />;
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
