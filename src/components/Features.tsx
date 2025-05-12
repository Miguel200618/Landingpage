import React from 'react';
import FeatureCard from './FeatureCard';
import { MessageSquare, Phone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Support',
      description: 'Intelligent chatbots that handle customer FAQs, set appointments, and capture leads automatically 24/7.',
    },
    {
      icon: Phone,
      title: 'AI Automated Phone Callers',
      description: 'Smart outbound calling system that handles appointment confirmations, follow-ups, and lead qualification with natural voice interactions.',
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What We Automate for You</h2>
          <p className="text-accent-neutral max-w-2xl mx-auto">
            Our AI systems handle the repetitive tasks that slow down your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;