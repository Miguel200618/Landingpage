import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
}) => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/migueldelacruz/ai-booking-demo?month=2025-05', '_blank');
  };

  return (
    <div
      className={`glass-card p-8 transition-all duration-300 relative group hover:transform hover:scale-[1.02] ${
        isPopular ? 'border-accent-highlight shadow-glow-sm hover:shadow-glow' : 'border-white/10 hover:border-accent-highlight/50'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-highlight text-primary px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {name !== 'One-Time Project' && <span className="text-accent-neutral">/month</span>}
      </div>
      <p className="text-accent-neutral mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check
              size={20}
              className={`mr-2 mt-0.5 ${
                item.included ? 'text-accent-highlight' : 'text-accent-neutral opacity-50'
              }`}
            />
            <span className={item.included ? 'text-white' : 'text-accent-neutral line-through'}>
              {item.feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={isPopular ? 'primary' : 'secondary'}
        className="w-full hover:transform hover:scale-105 transition-all duration-300"
        onClick={handleGetStarted}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;