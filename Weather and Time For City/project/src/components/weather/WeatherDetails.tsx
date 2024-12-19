import React from 'react';
import { Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherDetailsProps {
  windSpeed: number;
  humidity: number;
  feelsLike: number;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  windSpeed,
  humidity,
  feelsLike
}) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    <div className="flex items-center">
      <Wind className="w-5 h-5 text-gray-600 mr-2" />
      <span className="text-gray-700">{windSpeed} km/h</span>
    </div>
    <div className="flex items-center">
      <Droplets className="w-5 h-5 text-gray-600 mr-2" />
      <span className="text-gray-700">{humidity}%</span>
    </div>
    <div className="flex items-center">
      <Thermometer className="w-5 h-5 text-gray-600 mr-2" />
      <span className="text-gray-700">Feels {feelsLike}°C</span>
    </div>
  </div>
);