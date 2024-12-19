import React from 'react';

const scores = [
  { team1: "Lakers", score1: 105, team2: "Warriors", score2: 102, time: "Q4 2:30" },
  { team1: "Celtics", score1: 98, team2: "Heat", score2: 95, time: "Final" },
  { team1: "Bucks", score1: 88, team2: "Nets", score2: 82, time: "Q3 5:45" },
];

export function LiveScores() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Live Scores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scores.map((game, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">{game.team1}</div>
                <div className="text-2xl font-bold">{game.score1}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{game.team2}</div>
                <div className="text-2xl font-bold">{game.score2}</div>
              </div>
              <div className="mt-4 text-center">
                <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  {game.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}