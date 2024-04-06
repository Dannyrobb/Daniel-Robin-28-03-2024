import React from "react";
import WeatherPage from "./pages/WeatherPage";
import { Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/AppBar";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ margin: 0, padding: 0, boxSizing: "border-box", minHeight: "100vh" }}>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
