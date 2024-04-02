export const locationSearchStyles = {
  autocomplete: {
    width: 300,
    display: "block",
    marginTop: "20px",
    marginBottom: "20px",
  },
  container: {
    display: "flex",
  },
};

export const simpleWeatherCardStyle = (weatherText: string) => ({
  padding: "20px",
  borderRadius: "10px",
  height: "auto",
  minHeight: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundImage: `url('${
    weatherText.toLowerCase().includes("rain")
      ? "/Images/rainy.jpg"
      : weatherText.toLowerCase().includes("sun")
      ? "/Images/sunny.jpg"
      : "/Images/IMG_8777.jpeg"
  }')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "inherit",
  margin: "30px",
});

export const noFavoritesStyles = {
  noFavoritesContainer: {
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
  },
  redirectButton: {
    padding: "10px 20px",
    backgroundColor: "#3f51b5",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#2f3a80",
    },
  },
};

export const weathercardStyles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: { sm: "flex-start", xs: "center" },
    paddingTop: { xs: "30px", md: "60px" },
    paddingLeft: { xs: "30px", md: "60px" },
    position: "relative",
    color: "inherit",
  },

  tempretureContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: { xs: 0, md: "60px" },
    justifyContent: "center",
    alignItems: "center",
  },
  fiveDayForcastContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: { xs: "10px" },
    borderTop: "2px solid",
    padding: "20px",
    flexWrap: "wrap",
  },
  forcastContainer: { display: "flex", flexDirection: "column", margin: "4px", borderRadius: "4px" },
  favoritesStar: { position: "absolute", left: 0, top: { sm: 0, m: "10px" } },
  container: (weatherText: string) => ({
    backgroundImage: `url('${
      weatherText.toLowerCase().includes("rain")
        ? "/Images/rainy.jpg"
        : weatherText.toLowerCase().includes("sun")
        ? "/Images/sunny.jpg"
        : "/Images/IMG_8777.jpeg"
    }')`,
    backgroundRepeat: "no-repeat",
    maxWidth: { xs: "100%", sm: "600px", md: "800px" },
    backgroundSize: "cover",
    minHeight: { sm: "350px", md: "450px" },
    borderRadius: "20px",
    m: "20px",
    color: "inherit",
    boxShadow: "10",
    fontFamily: "monospace",
  }),
};

export const appBarStyles = {
  appBar: {
    bgcolor: "transparent",
    boxShadow: "none",
  },
  logoText: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  menuButton: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  menuItem: {
    display: { xs: "flex" },
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: "Bebas Neue, Arial",
    textTransform: "capitalize",
  },
  button: {
    display: { xs: "flex" },
    marginLeft: "auto",
    fontSize: "1.2rem",
    fontFamily: "Bebas Neue, Arial",
    textTransform: "capitalize",
    mr: "20px",
  },
};
