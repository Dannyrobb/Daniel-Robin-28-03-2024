import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NoFavoritesBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        width: "80%",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Bebas Neue, Arial", marginBottom: "20px" }}>
        No favorites yet...
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px", fontSize: "1.2rem" }}>
        Start searching to add your favorite cities!
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            padding: "10px 20px",
            backgroundColor: "#3f51b5",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#2f3a80",
            },
          }}
        >
          <Typography variant="button" sx={{ color: "#fff", fontWeight: "bold" }}>
            Start Searching
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default NoFavoritesBox;
