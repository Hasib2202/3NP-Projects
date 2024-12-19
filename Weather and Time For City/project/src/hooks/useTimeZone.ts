import { useState, useEffect } from 'react';
import { formatTimeForZone } from '../utils/dateFormatter';

export const useTimeZone = (timezone: string) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return formatTimeForZone(time, timezone);
};