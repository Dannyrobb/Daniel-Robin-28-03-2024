import React from "react";
import WeatherPage from "./pages/WeatherPage";
import { Routes, Route } from "react-router-dom";
import CustomAppBar from "./components/AppBar";
import FavoritesPage from "./pages/FavoritesPage";
import { useCustomTheme } from "./assets/theme";
import { ThemeProvider } from "@emotion/react";

const App: React.FC = () => {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
