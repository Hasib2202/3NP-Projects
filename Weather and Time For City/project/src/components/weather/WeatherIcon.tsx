import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface WeatherIconProps {
  condition: string;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-6 h-6' }) => {
  const weatherCondition = condition.toLowerCase();
  
  if (weatherCondition.includes('rain')) {
    return <CloudRain className={className} />;
  }
  
  if (weatherCondition.includes('cloud')) {
    return <Cloud className={className} />;
  }
  
  return <Sun className={className} />;
};