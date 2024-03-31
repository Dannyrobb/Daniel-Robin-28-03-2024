// theme.ts
import { createTheme } from "@mui/material/styles";
import { useAppSelector } from "../state/store";

export const useCustomTheme = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#64ffda" : "#2196f3",
      },
      secondary: {
        main: darkMode ? "#ff4081" : "#f50057",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });
};
