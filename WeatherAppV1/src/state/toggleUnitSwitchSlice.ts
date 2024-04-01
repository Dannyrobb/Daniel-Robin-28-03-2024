import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TemperatureState } from "../Interfaces/Temperature";

const initialState: TemperatureState = {
  unit: "C",
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    toggleUnit(state) {
      state.unit = state.unit === "C" ? "F" : "C";
    },
    setUnit(state, action: PayloadAction<"F" | "C">) {
      state.unit = action.payload;
    },
  },
});

export const { toggleUnit, setUnit } = temperatureSlice.actions;

export default temperatureSlice.reducer;
