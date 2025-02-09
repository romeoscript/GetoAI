import React from 'react';
import { Zap, Users, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose Geto AI?
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Supercharge your newsletter creation process
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Generate complete newsletters in seconds, not hours. Save time and focus on what matters."
          />
          <FeatureCard
            icon={Users}
            title="Audience Focused"
            description="AI-powered content that resonates with your specific audience and keeps them engaged."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Better Results"
            description="Increase open rates and engagement with professionally crafted newsletters."
          />
        </div>
      </div>
    </div>
  </div>
);

export default Features;