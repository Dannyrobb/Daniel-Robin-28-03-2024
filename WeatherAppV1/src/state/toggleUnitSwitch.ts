import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemperatureState {
  unit: "F" | "C";
}

const initialState: TemperatureState = {
  unit: "C",
};

// Create the slice
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

// Export actions
export const { toggleUnit, setUnit } = temperatureSlice.actions;

// Export reducer
export default temperatureSlice.reducer;
