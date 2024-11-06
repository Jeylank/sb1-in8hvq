import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;