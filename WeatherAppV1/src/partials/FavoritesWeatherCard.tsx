import { useAppDispatch, useAppSelector } from "../state/store";
import { fetchWeather } from "../state/weatherSlice";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Paper, CircularProgress, Box } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import { unitConverter } from "../utils/helpers/unitConverter";
import { Fade } from "@mui/material";
export const FavoritesWeatherCard = ({ favorite }: { favorite: any }) => {
  const unit = useAppSelector((state) => state.temperature.unit);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRedirectOnClick = (Key: string, city: string, country: string) => {
    dispatch(fetchWeather(Key, city, country));
    navigate("/");
  };

  return (
    <Fade in={true} timeout={700}>
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

          {favorite.loading ? (
            <CircularProgress color="inherit" size={60} />
          ) : (
            <Typography variant="h5">{unit == "C" ? `${favorite.temperature}°` : `${unitConverter(favorite.temperature)}°`}</Typography>
          )}

          <Typography variant="body1" gutterBottom>
            {favorite.weatherText}
          </Typography>
          <img src={`/icons/${favorite.icon}.png`} />
          <FavoriteStar weatherDetails={{ Key: favorite.Key, city: favorite.city, country: favorite.country }} />
        </Paper>
      </Grid>
    </Fade>
  );
};
