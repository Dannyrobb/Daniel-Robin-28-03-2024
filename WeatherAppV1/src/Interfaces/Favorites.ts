export interface Favorite {
  city: string;
  country: string;
  Key: string;
}

export interface FavoriteWeatherData extends Favorite {
  temperature: number;
  weatherText: string;
  icon: string;
}

export interface FavoriteStarProps {
  weatherDetails: Favorite;
}

export interface FavoritesState {
  list: Favorite[];
}
