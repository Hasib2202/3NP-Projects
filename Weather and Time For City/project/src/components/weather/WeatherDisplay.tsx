import React from 'react';
import type { WeatherResponse } from '../../types/api.types';
import { Cloud, Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherDisplayProps {
  weather: WeatherResponse;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const { location, current } = weather;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-gray-600">{location.country}</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-gray-800">{current.temp_c}°C</p>
          <p className="text-gray-600">Feels like {current.feelslike_c}°C</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <img 
          src={current.condition.icon} 
          alt={current.condition.text}
          className="w-16 h-16 mr-4"
        />
        <p className="text-lg text-gray-700">{current.condition.text}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Wind className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700">{current.wind_kph} km/h</span>
        </div>
        <div className="flex items-center">
          <Droplets className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700">{current.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Thermometer className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-700">UV: {current.uv}</span>
        </div>
      </div>
    </div>
  );
};