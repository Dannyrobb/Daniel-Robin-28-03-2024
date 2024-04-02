import React from "react";
import WeatherPage from "./pages/WeatherPage";
import { Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/AppBar";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="app">
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
