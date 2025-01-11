import axios from 'axios';
import type { WeatherData } from '../types/weather';

const WEATHER_API_KEY = 'YOUR API KEY';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(
    `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}`
  );
  return response.data;
};
