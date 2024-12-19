export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
}

export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
  wind_kph: number;
  wind_mph: number;
  humidity: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
}

export interface WeatherResponse {
  location: Location;
  current: CurrentWeather;
}