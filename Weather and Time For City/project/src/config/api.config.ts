export const API_CONFIG = {
  WEATHER_API: {
    BASE_URL: 'https://api.weatherapi.com/v1',
    ENDPOINTS: {
      CURRENT: '/current.json',
      FORECAST: '/forecast.json'
    }
  }
} as const;