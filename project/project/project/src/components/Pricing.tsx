import React from 'react';
import PricingCard from './PricingCard';
import { Shield, Zap, Settings, HeadphonesIcon } from 'lucide-react';

const Pricing: React.FC = () => {
  const oneTimeFeatures = [
    { feature: 'Custom AI Chatbot Development', included: true },
    { feature: 'Lead Capture System Integration', included: true },
    { feature: 'Appointment Scheduling Setup', included: true },
    { feature: 'FAQ Knowledge Base Creation', included: true },
    { feature: 'Initial Training & Setup', included: true },
    { feature: '30-Day Support Period', included: true },
  ];

  const monthlyFeatures = [
    { feature: 'Ongoing Chatbot Optimization', included: true },
    { feature: 'Monthly Performance Reports', included: true },
    { feature: 'Regular System Updates', included: true },
    { feature: 'Technical Support', included: true },
    { feature: 'Integration Maintenance', included: true },
    { feature: 'Custom Feature Development', included: true },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Flexible Pricing for Real Estate Success</h2>
          <p className="text-accent-neutral max-w-2xl mx-auto">
            Choose between a one-time setup or ongoing partnership. Book a free demo to discuss your specific needs and get a custom quote.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center glass-card px-6 py-3">
            <Shield size={20} className="text-accent-highlight mr-2" />
            <span className="text-sm">No Commitment Required - Start with a Free Demo</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            name="One-Time Project"
            price="$500 - $1,500"
            description="Perfect for agencies looking to automate their operations with a custom AI solution. One-time setup with everything you need to get started."
            features={oneTimeFeatures}
          />
          <PricingCard
            name="Monthly Retainer"
            price="$250 - $750"
            description="Ongoing partnership ensuring your AI systems stay optimized and up-to-date with your evolving business needs."
            features={monthlyFeatures}
            isPopular={true}
          />
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <Settings size={24} className="text-accent-highlight mr-3" />
              <h3 className="text-xl font-bold">How Our Pricing Works</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">One-Time Project</h4>
                <p className="text-accent-neutral">
                  Get a custom-built AI solution tailored to your agency's specific needs. Includes initial setup, configuration, and training. Perfect for agencies wanting to automate their core operations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Monthly Retainer</h4>
                <p className="text-accent-neutral">
                  Ongoing support and optimization to ensure your AI systems evolve with your business. Includes regular updates, technical support, and continuous improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 mt-8 border border-accent-highlight/20">
            <div className="flex items-center mb-4">
              <HeadphonesIcon size={24} className="text-accent-highlight mr-3" />
              <h3 className="font-bold">Not Sure Which Plan to Choose?</h3>
            </div>
            <p className="text-accent-neutral mb-6">
              Book a free consultation call with our experts. We'll analyze your needs and recommend the best solution for your agency. No obligation, just pure value.
            </p>
            <div className="flex items-center text-sm text-accent-neutral">
              <Zap size={16} className="text-accent-highlight mr-2" />
              <span>Final pricing based on project complexity and specific requirements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;