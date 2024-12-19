import axios from 'axios';
import { WeatherData } from '../types/weather';
import { WEATHER_API_CONFIG } from '../config/constants';

const weatherApi = axios.create({
  baseURL: WEATHER_API_CONFIG.BASE_URL,
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY
  }
});

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const { data } = await weatherApi.get('/current.json', {
    params: { q: city }
  });
  return data;
};