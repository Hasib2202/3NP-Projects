import React from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  onSearch: (city: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => (
  <header className="text-center mb-8">
    <div className="flex items-center justify-center mb-4">
      <Cloud className="w-10 h-10 text-white mr-2" />
      <h1 className="text-4xl font-bold text-white">Weather Forecast</h1>
    </div>
    <SearchBar onSearch={onSearch} />
  </header>
);