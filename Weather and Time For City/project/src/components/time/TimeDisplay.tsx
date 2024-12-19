import React from 'react';
import { Clock } from 'lucide-react';
import { formatTimeForZone } from '../../utils/date';

interface TimeDisplayProps {
  timezone: string;
  label: string;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ timezone, label }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <Clock className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900">
        {formatTimeForZone(time, timezone)}
      </p>
    </div>
  );
};