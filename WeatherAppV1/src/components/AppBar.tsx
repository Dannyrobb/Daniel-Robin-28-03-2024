import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography, Button, Fade, MenuItem } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TemperatureToggle from "./TemperatureToggle";
function CustomAppBar() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup timer
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
      <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
        <Container>
          <Toolbar disableGutters>
            <CloudQueueIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WeatherHub
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
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
                    <Button
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to="/"
                      color="inherit"
                      sx={{
                        display: { xs: "flex" },
                        // marginLeft: "auto",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        fontFamily: "Bebas Neue, Arial",
                        textTransform: "capitalize",
                      }}
                    >
                      Home
                    </Button>
                  </MenuItem>
                )}

                {location.pathname !== "/favorites" && (
                  <MenuItem>
                    <Button
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to="/favorites"
                      color="inherit"
                      sx={{
                        display: { xs: "flex" },
                        marginLeft: "auto",
                        fontSize: "1.2rem",
                        fontFamily: "Bebas Neue, Arial",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      Favorites
                    </Button>
                  </MenuItem>
                )}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {location.pathname !== "/favorites" && (
                <Button
                  component={Link}
                  to="/favorites"
                  color="inherit"
                  sx={{
                    display: { xs: "flex" },
                    marginLeft: "auto",
                    fontSize: "1.2rem",
                    fontFamily: "Bebas Neue, Arial",
                    textTransform: "capitalize",
                    mr: "20px",
                  }}
                  onClick={handleCloseNavMenu}
                >
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
