export const WEATHER_API_CONFIG = {
  BASE_URL: 'https://api.weatherapi.com/v1',
  DEFAULT_CITY: 'Dhaka'
} as const;

export const TIME_ZONES = [
  { id: 'new-york', timezone: 'America/New_York', label: 'New York' },
  // { id: 'london', timezone: 'Europe/London', label: 'London' },
  // { id: 'tokyo', timezone: 'Asia/Tokyo', label: 'Tokyo' },
  { id: 'dhaka', timezone: 'Asia/Dhaka', label: 'Dhaka' },
  // { id: 'sydney', timezone: 'Australia/Sydney', label: 'Sydney' },
  { id: 'india', timezone: 'Asia/Kolkata', label: 'India' }
] as const;