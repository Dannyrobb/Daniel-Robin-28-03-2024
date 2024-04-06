import { createSlice } from "@reduxjs/toolkit";

const DARK_MODE_STORAGE_KEY = "darkMode";

const getDarkModePreference = (): boolean => {
  const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
  return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: getDarkModePreference(),
};

const darkModeReducer = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem(DARK_MODE_STORAGE_KEY, JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeReducer.actions;
export default darkModeReducer.reducer;
