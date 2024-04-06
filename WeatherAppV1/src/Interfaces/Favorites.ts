export interface Favorite {
  city: string;
  country: string;
  Key: string;
}

export interface FavoriteStarProps {
  weatherDetails: Favorite;
}

export interface FavoritesState {
  list: Favorite[];
}

interface WeatherDataCommon {
  Key: string;
  city: string;
  country: string;
}

export interface FavoriteWeatherData extends WeatherDataCommon {
  temperature: number;
  weatherText: string;
  icon: number;
}

export interface SimpleWeatherCardData extends WeatherDataCommon {
  icon: number;
  temperature: number;
  weatherText: string;
  loading: boolean;
}
