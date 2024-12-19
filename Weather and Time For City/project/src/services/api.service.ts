import axios from 'axios';
import { API_CONFIG } from '../config/api.config';
import type { WeatherResponse } from '../types/api.types';

const apiClient = axios.create({
  baseURL: API_CONFIG.WEATHER_API.BASE_URL,
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY
  }
});

export const weatherService = {
  getCurrentWeather: async (city: string): Promise<WeatherResponse> => {
    const { data } = await apiClient.get<WeatherResponse>(
      API_CONFIG.WEATHER_API.ENDPOINTS.CURRENT,
      { params: { q: city } }
    );
    return data;
  }
};