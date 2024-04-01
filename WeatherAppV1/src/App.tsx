import React from "react";
import WeatherPage from "./pages/WeatherPage";
import { Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/AppBar";
import FavoritesPage from "./pages/FavoritesPage";

const App: React.FC = () => {
  return (
    <div>
      <CustomAppBar />
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
