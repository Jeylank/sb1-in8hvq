import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6 gap-2">
            <Bot className="h-12 w-12 text-blue-600" />
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
              Powered by GPT-4
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Transform Your GMB Presence with
            <span className="text-blue-600"> AI Magic</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Automate your Google My Business management with AI-powered content generation, review responses, and local SEO optimization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="bg-slate-100 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-200 transition flex items-center justify-center">
              Watch AI Demo
              <Bot className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform -rotate-1" />
            <div className="absolute inset-0 bg-slate-100/80 rounded-3xl transform rotate-1" />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="AI-Powered Dashboard"
              className="rounded-xl shadow-2xl border border-slate-200 max-w-5xl mx-auto relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}