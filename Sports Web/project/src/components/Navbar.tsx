import React from 'react';
import { Menu, X, Trophy } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Trophy className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold">SportsPro</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Home</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">News</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Scores</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Schedule</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Teams</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">News</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Scores</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Schedule</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">Teams</a>
          </div>
        </div>
      )}
    </nav>
  );
}