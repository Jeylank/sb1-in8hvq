import React from 'react';
import { Search, Star, BarChart3, Building2, MessageSquare, Map, Brain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Auto-generate engaging GMB posts, responses, and business descriptions optimized for local SEO.'
  },
  {
    icon: MessageSquare,
    title: 'Smart Review Management',
    description: 'AI-powered review analysis and response generation to maintain high ratings consistently.'
  },
  {
    icon: Map,
    title: 'Multi-Location Control',
    description: 'Manage multiple business locations from a single dashboard with location-specific insights.'
  },
  {
    icon: Search,
    title: 'Local SEO Intelligence',
    description: 'Data-driven recommendations for GMB profile optimization and local search dominance.'
  },
  {
    icon: Star,
    title: 'Sentiment Analysis',
    description: 'Advanced NLP to analyze customer sentiment and identify improvement opportunities.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive metrics tracking for rankings, engagement, and conversion rates.'
  },
  {
    icon: Building2,
    title: 'Competitor Insights',
    description: 'Deep analysis of competitor strategies, rankings, and local market presence.'
  },
  {
    icon: Sparkles,
    title: 'Smart Optimization',
    description: 'AI-driven recommendations for profile optimization and content strategy.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            AI-Powered Local SEO Suite
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to dominate local search results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition group bg-white"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <feature.icon className="h-12 w-12 text-blue-600 relative z-10 group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}