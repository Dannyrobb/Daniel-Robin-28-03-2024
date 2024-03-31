import React from "react";
import { Typography, Box, Grid, Fade } from "@mui/material";
import FavoriteStar from "../partials/FavoriteStar";
import { getCurrentDate } from "../utils/helpers/getCurrentDate";

interface Temperature {
  Metric: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Imperial: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}
interface WeatherCardProps {
  Key: string;
  city: string;
  country: string;
  temperature: Temperature;
  WeatherIcon: number;
  WeatherText: string;
  fiveDayForecast: any;
}
const WeatherCard: React.FC<WeatherCardProps> = ({ Key, city, country, temperature, fiveDayForecast, WeatherIcon, WeatherText }) => {
  console.log(Key);

  //   const { city country, temperature, fiveDayForecast } = weatherData;
  return (
    <Fade in={true} timeout={660}>
      <Grid
        container
        spacing={0}
        sx={{
          backgroundImage: `url('/Images/IMG_8777.jpeg')`,
          backgroundRepeat: "no-repeat",
          maxWidth: { xs: "100%", sm: "600px", md: "800px" },
          backgroundSize: "cover",
          minHeight: { sm: "350px", md: "450px" },
          borderRadius: "20px",
          mt: "20px",
          color: "white",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { sm: "flex-start", xs: "center" },
              paddingTop: { xs: "30px", md: "60px" },
              paddingLeft: { xs: "30px", md: "60px" },
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: "monospace" }}>
              {`${city}, ${country}`} <FavoriteStar weatherDetails={{ Key, city, country }} />
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              {getCurrentDate()}
            </Typography>
            <img src={`/icons/${WeatherIcon}.png`} width="100px" />
            <Typography variant="h5" sx={{ fontFamily: "monospace" }}>
              {WeatherText}{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: { xs: 0, md: "60px" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" sx={{ fontFamily: "monospace" }}>
              {`${temperature.Metric.Value}°`}
            </Typography>
            <Typography
              sx={{ fontFamily: "monospace" }}
              variant="h5"
            >{`${fiveDayForecast[0].tempretures.Maximum.Value}° / ${fiveDayForecast[0].tempretures.Minimum.Value}°`}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: { xs: "10px" },
              borderTop: "2px solid",
              padding: "20px",
              flexWrap: "wrap",
            }}
          >
            {fiveDayForecast.map((day) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "column", margin: "4px", borderRadius: "4px" }}>
                  <Typography sx={{ fontFamily: "monospace" }} variant="body2">
                    {day.dayOfWeek}
                  </Typography>
                  <Typography sx={{ fontFamily: "monospace" }} variant="body2">{`${day.tempretures.Maximum.Value}° max`}</Typography>
                  <Typography sx={{ fontFamily: "monospace" }} variant="body2">{`${day.tempretures.Minimum.Value}° min`}</Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default WeatherCard;
