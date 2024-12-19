import React from 'react';
import { Cloud, Wind, Droplets, Thermometer } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg w-full max-w-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{weather.location.name}</h2>
          <p className="text-gray-600">{weather.location.country}</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-gray-800">{weather.current.temp_c}°C</p>
          <p className="text-gray-600">Feels like {weather.current.feelslike_c}°C</p>
        </div>
      </div>
      
      <div className="flex items-center mb-6">
        <img 
          src={weather.current.condition.icon} 
          alt={weather.current.condition.text}
          className="w-16 h-16 mr-4"
        />
        <p className="text-lg text-gray-700">{weather.current.condition.text}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Wind className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700">{weather.current.wind_kph} km/h</span>
        </div>
        <div className="flex items-center">
          <Droplets className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700">{weather.current.humidity}%</span>
        </div>
      </div>
    </div>
  );
}