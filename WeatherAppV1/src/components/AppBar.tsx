import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button, Slide, Fade } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

function CustomAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fade in={true} timeout={1000}>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={1200}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Toolbar disableGutters>
              <LocalMoviesIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
                MovieHub
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
                  <MenuItem key={"favorites"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={"/favorites"} style={{ color: "inherit", textDecoration: "none" }}>
                        Favorites
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <LocalMoviesIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MovieHub
              </Typography>
              {location.pathname !== "/favorites" && (
                <Box sx={{ display: { xs: "none", md: "flex" }, alignSelf: "flex-end" }}>
                  <Button key={"favoritesBtn"} onClick={handleCloseNavMenu} sx={{ my: 1, marginLeft: 2 }}>
                    <Link
                      to={"/favorites"}
                      style={{ color: "white", textDecoration: "none", fontSize: "1.2rem", fontFamily: "Bebas Neue, Arial" }}
                    >
                      Favorites
                    </Link>
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </Fade>
  );
}

export default CustomAppBar;
