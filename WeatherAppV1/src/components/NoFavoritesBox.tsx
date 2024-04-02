import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { noFavoritesStyles } from "../styles/styles";
const NoFavoritesBox = () => {
  return (
    <Box sx={noFavoritesStyles.noFavoritesContainer}>
      <Typography variant="h5" sx={{ fontFamily: "Bebas Neue, Arial", marginBottom: "20px" }}>
        No favorites yet...
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px", fontSize: "1.2rem" }}>
        Start searching to add your favorite cities!
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box sx={noFavoritesStyles.redirectButton}>
          <Typography variant="button" sx={{ color: "#fff", fontWeight: "bold" }}>
            Start Searching
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NoFavoritesBox;
