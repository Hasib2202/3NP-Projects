import { useState, useCallback } from 'react';
import { weatherService } from '../services/api.service';
import type { WeatherResponse } from '../types/api.types';

interface WeatherState {
  data: WeatherResponse | null;
  error: string | null;
  loading: boolean;
}

export const useWeather = (defaultCity: string) => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    error: null,
    loading: false
  });

  const fetchWeather = useCallback(async (city: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await weatherService.getCurrentWeather(city);
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: 'Failed to fetch weather data. Please try again.'
      });
    }
  }, []);

  return {
    ...state,
    fetchWeather
  };
};