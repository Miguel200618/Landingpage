import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-black">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="heading-xl mb-6 leading-tight">
            Automate. Scale. <span className="text-accent-highlight">Dominate.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-accent-neutral leading-relaxed">
            AI systems that handle customer support, appointment setting, and CRM—so you can focus on growth.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://calendly.com/angeliyoft/ai-booking-demo', '_blank')}
            >
              Book Your Free AI Demo
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
          </div>
        </div>

        {/* Hide Spline viewer on mobile */}
        <div className="hidden md:block">
          <div className="spline-container">
            <spline-viewer 
              url="https://prod.spline.design/6HWBbecDTcK5SdQg/scene.splinecode"
              loading="lazy"
            ></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;