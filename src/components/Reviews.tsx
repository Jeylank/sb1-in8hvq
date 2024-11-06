import React from 'react';
import { Star, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    content: "MapRank.ai transformed our local SEO strategy! Our restaurant now ranks #1 for all major local keywords.",
    business: "The Fresh Kitchen",
    position: "Marketing Manager"
  },
  {
    name: "Michael Chen",
    rating: 5,
    content: "The AI-powered review management saved us countless hours. Our response rate improved by 300%!",
    business: "Tech Solutions Inc",
    position: "Owner"
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    content: "Finally, a tool that makes GMB management effortless. The competitor analysis feature is invaluable.",
    business: "Fitness First Gym",
    position: "Digital Director"
  }
];

const stats = [
  {
    icon: Star,
    value: "98%",
    label: "Customer Satisfaction"
  },
  {
    icon: ThumbsUp,
    value: "2.5x",
    label: "Average Ranking Improvement"
  },
  {
    icon: MessageSquare,
    value: "300%",
    label: "Increase in Review Response Rate"
  },
  {
    icon: TrendingUp,
    value: "5x",
    label: "ROI for Businesses"
  }
];

export default function Reviews() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Local Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses are transforming their local presence with MapRank.ai
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-blue-50">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 hover:border-blue-100 transition shadow-sm hover:shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4">"{review.content}"</p>
              <div>
                <div className="font-semibold text-slate-900">{review.name}</div>
                <div className="text-slate-600 text-sm">{review.position}</div>
                <div className="text-blue-600 text-sm">{review.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}