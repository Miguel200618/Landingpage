import React from 'react';
import Button from './Button';
import { Zap, Mail, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleScheduleCall = () => {
    window.open('https://calendly.com/migueldelacruz/ai-booking-demo?month=2025-05', '_blank');
  };

  return (
    <section id="contact" className="section bg-primary-dark">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Let's Automate Your Business</h2>
            <p className="text-accent-neutral mb-8 text-lg">
              Ready to save time, increase conversions, and scale your business with AI? Let's talk about your specific needs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-accent-highlight" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-accent-neutral">angeliyoft@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-accent-highlight" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-accent-neutral">(423) 580-7353</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center mr-4">
                  <Clock size={20} className="text-accent-highlight" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Availability</h3>
                  <p className="text-accent-neutral">Mon-Fri: 9am - 5pm ET</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border border-accent-highlight/20">
              <div className="flex items-center mb-4">
                <Zap size={24} className="text-accent-highlight mr-3" />
                <h3 className="font-bold">Free AI Strategy Session</h3>
              </div>
              <p className="text-accent-neutral">
                Book a 30-minute call with our experts to identify automation opportunities in your business. No obligation, just pure value.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-accent-neutral mb-8">
              Schedule your free consultation call and let's discuss how we can automate your business processes.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleScheduleCall}
              className="w-full md:w-auto"
            >
              Schedule My Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;