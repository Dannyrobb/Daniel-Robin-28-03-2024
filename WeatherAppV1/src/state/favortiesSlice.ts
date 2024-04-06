import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite, FavoritesState } from "../Interfaces/Favorites";

const initialState: FavoritesState = {
  list: JSON.parse(localStorage.getItem("favorites")!) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      const newFavorite = action.payload;
      if (!state.list.some((item) => item.Key === newFavorite.Key)) {
        state.list.push(newFavorite);
        localStorage.setItem("favorites", JSON.stringify(state.list));
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.Key !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavorites = (state: { favorites: FavoritesState }) => state.favorites.list;
export const initFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")!);
  if (!storedFavorites) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
};

export default favoritesSlice.reducer;
