import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const formatTimeForZone = (date: Date, timeZone: string): string => {
  return formatInTimeZone(date, timeZone, 'HH:mm:ss');
};

export const formatLocalTime = (date: Date): string => {
  return format(date, 'HH:mm:ss');
};