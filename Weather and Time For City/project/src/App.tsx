import React, { useEffect } from 'react';
import { WeatherCard } from './components/weather/WeatherCard';
import { TimeDisplay } from './components/time/TimeDisplay';
import { SearchBar } from './components/search/SearchBar';
import { ErrorMessage } from './components/ui/ErrorMessage';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { useWeatherApi } from './hooks/useWeatherApi';
import { getWeatherBackground } from './utils/weatherUtils';
import { TIME_ZONES } from './config/constants';

function App() {
  const { data: weather, error, loading, fetchWeather } = useWeatherApi('Dhaka');

  useEffect(() => {
    fetchWeather('Dhaka');
  }, [fetchWeather]);

  return (
    
    <div className={`min-h-screen ${getWeatherBackground(weather?.current.condition.text)} bg-cover bg-center bg-no-repeat`}>
      <div className="min-h-screen px-4 py-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto space-y-8">
          <SearchBar onSearch={fetchWeather} />

          {error && <ErrorMessage message={error} />}
          
          {loading ? (
            <LoadingSpinner />
          ) : (
            weather && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <WeatherCard weather={weather} />
                </div>
                <div className="space-y-4">
                  {TIME_ZONES.map((zone) => (
                    <TimeDisplay
                      key={zone.id}
                      timezone={zone.timezone}
                      label={zone.label}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;