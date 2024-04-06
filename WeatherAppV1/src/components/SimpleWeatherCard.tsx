import { useAppDispatch, useAppSelector } from "../state/store";
import { fetchWeather } from "../state/weatherSlice";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Paper, CircularProgress } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import { unitConverter } from "../utils/helpers/helpers";
import { Fade, Button } from "@mui/material";
import { SimpleWeatherCardData } from "../Interfaces/Favorites";
import { simpleWeatherCardStyle } from "../styles/styles";

export const SimpleWeatherCard = ({ favorite }: { favorite: SimpleWeatherCardData }): JSX.Element => {
  const unit = useAppSelector((state) => state.temperature.unit);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRedirectOnClick = (Key: string, city: string, country: string) => {
    dispatch(fetchWeather(Key, city, country));
    navigate("/");
  };

  return (
    <Fade in={true} timeout={700}>
      <Grid item xs={12} md={6} lg={4} sx={{ fontFamily: "monospace" }}>
        <Paper elevation={3} sx={simpleWeatherCardStyle(favorite.weatherText)}>
          <Button
            onClick={() => handleRedirectOnClick(favorite.Key, favorite.city, favorite.country)}
            sx={{ color: "inherit", textTransform: "capitalize" }}
          >
            <Typography variant="h4" sx={{ fontFamily: "inerit", color: "inherit" }}>
              {favorite.city}, {favorite.country}
            </Typography>
          </Button>

          {favorite.loading ? (
            <CircularProgress color="inherit" size={60} />
          ) : (
            <Typography variant="h5" sx={{ fontFamily: "inerit" }}>
              {unit == "C" ? `${favorite.temperature}°C` : `${unitConverter(favorite.temperature)}°F`}
            </Typography>
          )}

          <Typography variant="body1" gutterBottom sx={{ fontFamily: "inerit" }}>
            {favorite.weatherText}
          </Typography>
          <img src={`/icons/${favorite.icon}.png`} />
          <FavoriteStar weatherDetails={{ Key: favorite.Key, city: favorite.city, country: favorite.country }} />
        </Paper>
      </Grid>
    </Fade>
  );
};
