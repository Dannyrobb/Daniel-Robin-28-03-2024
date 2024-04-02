export const weatherCardStyles = (weatherText: string) => ({
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
  color: "white",
  boxShadow: "10",
});
