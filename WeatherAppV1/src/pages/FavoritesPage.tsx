import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { fetchFavoritesWeather } from "../utils/api/fetchFavorites";
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
        const weatherData = await fetchFavoritesWeather(favorites.list);
        setFavoritesWeather(weatherData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorites weather:", error);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Fade in={true} timeout={444}>
            <Typography sx={{ fontSize: { xs: "50px", md: "75px" } }} align="center" gutterBottom color={"#213547"}>
              Favorites
            </Typography>
          </Fade>
        </Grid>
        {loading && <CircularProgress color="inherit" size={60} />}
        {!loading && favoritesWeather.length == 0 && <NoFavoritesBox />}

        {favoritesWeather.length > 0 && (
          <>
            {favoritesWeather.map((favorite, index) => {
              return <FavoritesWeatherCard favorite={favorite} key={index} />;
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
