import React from "react";
import { Typography, Box, Grid, Fade } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import { getCurrentDate, unitConverter } from "../utils/helpers/helpers";
import { useAppSelector } from "../state/store";
import { WeatherCardProps } from "../Interfaces/Temperature";
import { FiveDayForecastDay } from "../Interfaces/Weather";
import { weathercardStyles } from "../styles/styles";
const WeatherCard: React.FC<WeatherCardProps> = ({ Key, city, country, temperature, fiveDayForecast, WeatherIcon, WeatherText }) => {
  const unit = useAppSelector((state) => state.temperature.unit);

  return (
    <Fade in={true} timeout={660}>
      <Grid container spacing={0} sx={weathercardStyles.container(WeatherText)}>
        <Grid item xs={12} sm={6}>
          <Box sx={weathercardStyles.card}>
            <Box sx={weathercardStyles.favoritesStar}>
              <FavoriteStar weatherDetails={{ Key, city, country }} />
            </Box>
            <Typography variant="h4" sx={{ fontFamily: "inherit", color: "inherit" }}>{`${city}, ${country}`}</Typography>
            <Typography variant="body1" sx={{ fontFamily: "inherit" }}>
              {getCurrentDate()}
            </Typography>
            <img src={`/icons/${WeatherIcon}.png`} width="100px" />
            <Typography variant="h5" sx={{ fontFamily: "inherit" }}>
              {WeatherText}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={weathercardStyles.tempretureContainer}>
            <Typography sx={{ fontFamily: "inherit", fontSize: "80px" }}>
              {unit == "C" ? `${temperature.Metric.Value}°C` : `${temperature.Imperial.Value}°F`}
            </Typography>
            <Typography sx={{ fontFamily: "inherit" }} variant="h5">
              {unit == "C"
                ? `${Math.round(fiveDayForecast[0].tempretures.Maximum.Value)}°C / ${Math.round(
                    fiveDayForecast[0].tempretures.Minimum.Value
                  )}°C`
                : `${unitConverter(fiveDayForecast[0].tempretures.Maximum.Value)}°F / ${unitConverter(
                    fiveDayForecast[0].tempretures.Minimum.Value
                  )}°F`}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={weathercardStyles.fiveDayForcastContainer}>
            {fiveDayForecast.map((day: FiveDayForecastDay, index: number) => {
              return (
                <Box key={index} sx={weathercardStyles.forcastContainer}>
                  <Typography sx={{ fontFamily: "inherit" }} variant="body2">
                    {day.dayOfWeek}
                  </Typography>
                  <Typography sx={{ fontFamily: "inherit" }} variant="body2">
                    {unit == "C"
                      ? `${Math.round(day.tempretures.Maximum.Value)}° max`
                      : `${unitConverter(day.tempretures.Maximum.Value)}\° max`}
                  </Typography>
                  <Typography sx={{ fontFamily: "inherit" }} variant="body2">
                    {unit == "C"
                      ? `${Math.round(day.tempretures.Minimum.Value)}° min`
                      : `${unitConverter(day.tempretures.Minimum.Value)}\° min`}
                  </Typography>
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
