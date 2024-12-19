import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveScores } from './components/LiveScores';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LiveScores />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;