import { useAppDispatch, useAppSelector } from "../state/store";
import { fetchWeather } from "../state/weatherSlice";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Paper, CircularProgress } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import { unitConverter } from "../utils/helpers/helpers";
import { Fade } from "@mui/material";
export const SimpleWeatherCard = ({ favorite }: { favorite: any }) => {
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
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",

            backgroundImage: `url('${
              favorite.weatherText.toLowerCase().includes("rain")
                ? "/Images/rainy.jpg"
                : favorite.weatherText.toLowerCase().includes("sun")
                ? "/Images/sunny.jpg"
                : "/Images/IMG_8777.jpeg"
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
            margin: "30px",
          }}
        >
          <button>
            <Typography
              variant="h4"
              onClick={() => handleRedirectOnClick(favorite.Key, favorite.city, favorite.country)}
              sx={{ fontFamily: "monospace" }}
            >
              {favorite.city}, {favorite.country}
            </Typography>
          </button>

          {favorite.loading ? (
            <CircularProgress color="inherit" size={60} />
          ) : (
            <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
              {unit == "C" ? `${favorite.temperature}°C` : `${unitConverter(favorite.temperature)}°F`}
            </Typography>
          )}

          <Typography variant="body1" gutterBottom sx={{ fontFamily: "monospace" }}>
            {favorite.weatherText}
          </Typography>
          <img src={`/icons/${favorite.icon}.png`} />
          <FavoriteStar weatherDetails={{ Key: favorite.Key, city: favorite.city, country: favorite.country }} />
        </Paper>
      </Grid>
    </Fade>
  );
};
