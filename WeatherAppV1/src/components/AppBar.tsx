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
function CustomAppBar() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

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
        <Container>
          <Toolbar disableGutters>
            <CloudQueueIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Typography variant="h5" noWrap component={Link} to="/" sx={appBarStyles.logoText}>
              WeatherHub
            </Typography>
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
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {location.pathname !== "/favorites" && (
                <Button component={Link} to="/favorites" color="inherit" sx={appBarStyles.button} onClick={handleCloseNavMenu}>
                  Favorites
                </Button>
              )}
            </Box>

            <TemperatureToggle />
          </Toolbar>
        </Container>
      </AppBar>
    </Fade>
  );
}
export default CustomAppBar;
