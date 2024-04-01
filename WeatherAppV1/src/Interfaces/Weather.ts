export interface WeatherData {
  city: string;
  country: string;
  Key: string;
  LocalObservationDateTime: string;
  EpochTime: number;
  Weather: {
    Text: string;
    Icon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    IsDayTime: boolean;
    Temperature: {
      Metric: Measurement;
      Imperial: Measurement;
    };
  };
  MobileLink: string;
  Link: string;
  fiveDayForecast: WeatherForecast[];
}

export interface WeatherForecast {
  Date: string;
  EpochDate: number;
  Day: WeatherPeriod;
  Night: WeatherPeriod;
  Sources: string[];
  Temperature: {
    Maximum: Measurement;
    Minimum: Measurement;
  };
  MobileLink: string;
  Link: string;
}

interface Measurement {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface WeatherPeriod {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export interface FiveDayForecastDay {
  dayOfWeek: string;
  tempretures: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
}
