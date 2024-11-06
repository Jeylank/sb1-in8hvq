import React from 'react';
import { CheckCircle2, Bot, Building2, Building, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Growth',
    price: '79',
    icon: Building2,
    features: [
      'AI-powered content generation',
      'Smart review responses',
      'Basic sentiment analysis',
      'Monthly performance reports',
      'Up to 3 locations',
      'Email support'
    ]
  },
  {
    name: 'Scale',
    price: '199',
    icon: Building,
    popular: true,
    features: [
      'Advanced AI content optimization',
      'Priority review management',
      'Deep sentiment analysis',
      'Weekly performance reports',
      'Up to 10 locations',
      'Competitor tracking',
      'Priority support',
      'Strategy consultations'
    ]
  },
  {
    name: 'Enterprise',
    price: '499',
    icon: Bot,
    features: [
      'Custom AI model training',
      'Advanced multi-location management',
      'Real-time sentiment monitoring',
      'Daily performance reports',
      'Unlimited locations',
      'Advanced competitor analysis',
      'Dedicated success manager',
      'Custom API access',
      'White-label options'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Scale Your Local Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan to grow your business across all locations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`
              rounded-xl p-8 relative
              ${plan.popular 
                ? 'bg-blue-600 text-white scale-105 shadow-xl' 
                : 'bg-white text-slate-900 border border-slate-100'
              }
            `}>
              <div className="absolute top-4 right-4">
                <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`} />
              </div>
              {plan.popular && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>
                  /month
                </span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle2 className={`h-5 w-5 mr-2 ${
                      plan.popular ? 'text-blue-300' : 'text-blue-600'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`
                w-full mt-8 px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center
                ${plan.popular
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              `}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}