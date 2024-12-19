import axios from 'axios';
import type { WeatherData } from '../types/weather';

const weatherApi = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY
  }
});

export const getWeather = async (city: string): Promise<WeatherData> => {
  const { data } = await weatherApi.get('/current.json', {
    params: { q: city }
  });
  return data;
};