import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { fetchCurrentWeather } from "../utils/api/fetchWeather";
import { WeatherData, WeatherState } from "../Interfaces/Weather";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action: PayloadAction<WeatherData>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;

export const fetchWeather =
  (locationKey: string, locationCity: string, locationCountry: string): AppThunk =>
  async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
      const data = await fetchCurrentWeather(locationKey, locationCity, locationCountry);

      dispatch(fetchWeatherSuccess(data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.toString()));
    }
  };

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
