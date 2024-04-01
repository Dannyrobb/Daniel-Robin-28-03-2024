import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import favortiesSlice from "./favortiesSlice";
import toggleUnitSwitch from "./toggleUnitSwitchSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: favortiesSlice,
    temperature: toggleUnitSwitch,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
