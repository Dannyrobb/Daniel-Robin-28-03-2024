import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import themeReducer from "./themeSlice";
import locationSlice from "./locationSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
