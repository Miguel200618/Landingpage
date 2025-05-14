import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  rating,
  imageUrl,
}) => {
  return (
    <div className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300">
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'fill-accent-highlight text-accent-highlight' : 'text-accent-neutral'
            }`}
          />
        ))}
      </div>
      <p className="mb-6 text-accent-neutral">{`"${testimonial}"`}</p>
      <div className="flex items-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mr-4">
            <span className="text-accent-highlight font-medium">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-accent-neutral">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;