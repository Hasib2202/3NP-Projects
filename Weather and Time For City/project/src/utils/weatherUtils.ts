export const getWeatherBackground = (condition?: string): string => {
  if (!condition) return 'bg-gradient-to-br from-blue-400 to-blue-600';
  
  const weatherCondition = condition.toLowerCase();
  
  if (weatherCondition.includes('rain')) {
    return 'bg-[url("https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920")]';
  } 
  
  if (weatherCondition.includes('cloud')) {
    return 'bg-[url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920")]';
  } 
  
  if (weatherCondition.includes('sun') || weatherCondition.includes('clear')) {
    return 'bg-[url("https://images.unsplash.com/photo-1622278647429-71bc97e904e8?auto=format&fit=crop&w=1920")]';
  }
  
  return 'bg-gradient-to-br from-blue-400 to-blue-600';
};