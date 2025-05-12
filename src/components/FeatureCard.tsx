import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-glow group">
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-accent-green/20 text-accent-highlight mb-4 group-hover:bg-accent-green/30 transition-all">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-accent-neutral">{description}</p>
    </div>
  );
};

export default FeatureCard;