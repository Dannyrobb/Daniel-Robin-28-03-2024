export interface Temperature {
  Metric: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  Imperial: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
}

export interface WeatherCardProps {
  Key: string;
  city: string;
  country: string;
  temperature: Temperature;
  WeatherIcon: number;
  WeatherText: string;
  fiveDayForecast: any;
}

export interface TemperatureState {
  unit: "F" | "C";
}
