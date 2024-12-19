import React from 'react';
import { WeatherIcon } from './WeatherIcon';
import { WeatherDetails } from './WeatherDetails';
import type { WeatherData } from '../../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg w-full">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{weather.location.name}</h2>
        <p className="text-gray-600">{weather.location.country}</p>
      </div>
      <div className="text-right">
        <p className="text-4xl font-bold text-gray-800">{weather.current.temp_c}°C</p>
      </div>
    </div>
    
    <div className="flex items-center mb-6">
      <WeatherIcon 
        condition={weather.current.condition.text} 
        className="w-16 h-16 mr-4"
      />
      <p className="text-lg text-gray-700">{weather.current.condition.text}</p>
    </div>
    
    <WeatherDetails 
      windSpeed={weather.current.wind_kph}
      humidity={weather.current.humidity}
      feelsLike={weather.current.feelslike_c}
    />
  </div>
);