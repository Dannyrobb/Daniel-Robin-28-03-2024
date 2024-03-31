import { useAppDispatch, useAppSelector } from "../state/store";
import { fetchWeather } from "../state/weatherSlice";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Paper, CircularProgress, Box } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import { unitConverter } from "../utils/helpers/unitConverter";
export const FavoritesWeatherCard = ({ favorite }: { favorite: any }) => {
  const unit = useAppSelector((state) => state.temperature.unit);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRedirectOnClick = (Key: string, city: string, country: string) => {
    dispatch(fetchWeather(Key, city, country));
    navigate("/");
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          borderRadius: "10px",
          height: "auto",
          minHeight: "356px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundImage: `url('/Images/IMG_8777.jpeg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h4" onClick={() => handleRedirectOnClick(favorite.Key, favorite.city, favorite.country)}>
          {favorite.city}, {favorite.country}
        </Typography>
        <Box
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#2196f3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            margin: "0 auto",
            marginBottom: 20,
          }}
        >
          {favorite.loading ? (
            <CircularProgress color="inherit" size={60} />
          ) : (
            <Typography variant="body1">{unit == "C" ? `${favorite.temperature}°` : `${unitConverter(favorite.temperature)}°`}</Typography>
          )}
        </Box>
        <img src={`/icons/${favorite.icon}.png`} />
        <Typography variant="body1" gutterBottom>
          {favorite.weatherText}
        </Typography>
        <FavoriteStar weatherDetails={{ Key: favorite.Key, city: favorite.city, country: favorite.country }} />
      </Paper>
    </Grid>
  );
};
