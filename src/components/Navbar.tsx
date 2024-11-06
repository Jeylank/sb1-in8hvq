import React from 'react';
import { Map } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Map className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">MapRank.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}