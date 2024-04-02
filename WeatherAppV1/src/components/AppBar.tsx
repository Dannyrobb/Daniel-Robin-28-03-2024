import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography, Button, Fade, MenuItem } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TemperatureToggle from "./TemperatureToggle";
import { appBarStyles } from "../styles/styles";
import DarkModeToggle from "./DarkMode";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Stack } from "@mui/material";
function CustomAppBar() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fade in={animate} timeout={1000}>
      <AppBar position="static" sx={appBarStyles.appBar}>
        <Container sx={{ color: darkMode ? "white" : "black" }}>
          <Toolbar disableGutters>
            <CloudQueueIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h5" noWrap sx={appBarStyles.logoText}>
              WeatherHub
            </Typography>
            {location.pathname !== "/" && (
              <Stack direction="row" spacing={1} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                <Button component={Link} to="/" color="inherit" sx={appBarStyles.button} onClick={handleCloseNavMenu}>
                  Home
                </Button>
                <TemperatureToggle />
                <DarkModeToggle />
              </Stack>
            )}
            <Box sx={appBarStyles.menuButton}>
              <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {location.pathname !== "/" && (
                  <MenuItem>
                    <Button onClick={handleCloseNavMenu} component={Link} to="/" color="inherit" sx={appBarStyles.menuItem}>
                      Home
                    </Button>
                  </MenuItem>
                )}

                {location.pathname !== "/favorites" && (
                  <MenuItem>
                    <Button onClick={handleCloseNavMenu} component={Link} to="/favorites" color="inherit" sx={appBarStyles.button}>
                      Favorites
                    </Button>
                  </MenuItem>
                )}
                <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                  <TemperatureToggle />
                </MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                  <DarkModeToggle />
                </MenuItem>
              </Menu>
            </Box>

            {location.pathname !== "/favorites" && (
              <Stack direction="row" spacing={1} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                <Button component={Link} to="/favorites" color="inherit" sx={appBarStyles.button} onClick={handleCloseNavMenu}>
                  Favorites
                </Button>
                <TemperatureToggle />
                <DarkModeToggle />
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Fade>
  );
}
export default CustomAppBar;
