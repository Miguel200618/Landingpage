import React from 'react';
import Button from './Button';
import { Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-primary-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Use Cases</h2>
          <p className="text-accent-neutral max-w-2xl mx-auto">
            How Our AI Automations Can Help Businesses Like Yours.
          </p>
        </div>

        <div className="glass-card p-4 md:p-8 flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 p-4">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/sSmJ1SIdJ84"
                title="DLC Automation Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Transform Your Customer Service with AI</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Discover how real estate agents, Shopify stores, and telehealth clinics are using our AI to handle customer support 24/7 — without burnout or missed opportunities.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-accent-highlight mr-3">✓</span>
                <span>Automated lead capture & qualification</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-highlight mr-3">✓</span>
                <span>24/7 instant customer support</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent-highlight mr-3">✓</span>
                <span>Smart scheduling & follow-ups</span>
              </div>
            </div>
            <Button 
              variant="primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials