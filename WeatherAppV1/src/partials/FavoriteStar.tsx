import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, selectFavorites } from "../state/favortiesSlice";
import { Tooltip } from "@mui/material";

interface WeatherDetails {
  Key: string;
  city: string;
  country: string;
}
interface Favorite {
  Key: string;
  city: string;
  country: string;
}
interface FavoriteStarProps {
  weatherDetails: WeatherDetails;
}

const FavoriteStar: React.FC<FavoriteStarProps> = ({ weatherDetails }) => {
  const dispatch = useDispatch();
  const favoritesArray: Favorite[] = useSelector(selectFavorites);
  const { Key, city, country } = weatherDetails;

  const handleHeartClick = () => {
    if (favoritesArray.some((favorite) => favorite.Key === Key)) {
      dispatch(removeFavorite(Key));
    } else {
      dispatch(addFavorite({ Key, city, country }));
    }
  };

  return (
    <IconButton
      sx={{
        marginLeft: 1,
        color: favoritesArray.some((favorite) => favorite.Key === Key) ? "red" : "inherit",
      }}
      onClick={handleHeartClick}
    >
      {favoritesArray.some((favorite) => favorite.Key === Key) ? (
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
