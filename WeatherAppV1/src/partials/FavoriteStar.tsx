import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, selectFavorites } from "../state/favortiesSlice";
import { Tooltip } from "@mui/material";

interface WeatherDetails {
  key: string;
  city: string;
  country: string;
}
interface Favorite {
  key: string;
  city: string;
  country: string;
}
interface FavoriteStarProps {
  weatherDetails: WeatherDetails;
}

const FavoriteStar: React.FC<FavoriteStarProps> = ({ weatherDetails }) => {
  const dispatch = useDispatch();
  const favoritesArray: Favorite[] = useSelector(selectFavorites);
  const { key, city, country } = weatherDetails;
  console.log(key);

  const handleHeartClick = () => {
    if (favoritesArray.some((favorite) => favorite.key === key)) {
      dispatch(removeFavorite(key));
    } else {
      dispatch(addFavorite({ key, city, country }));
    }
  };

  return (
    <IconButton
      sx={{
        marginLeft: 1,
        color: favoritesArray.some((favorite) => favorite.key === key) ? "red" : "inherit",
      }}
      onClick={handleHeartClick}
    >
      {favoritesArray.some((favorite) => favorite.key === key) ? (
        <Tooltip title="Remove from favorites" placement="right-start">
          <FavoriteIcon />
        </Tooltip>
      ) : (
        <Tooltip title="Add to favorites" placement="right-start">
          <FavoriteBorderIcon />
        </Tooltip>
      )}
    </IconButton>
  );
};

export default FavoriteStar;
