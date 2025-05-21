import React from 'react';
import { Instagram, Mail, Linkedin } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-light/80 border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center text-accent-highlight mb-4">
              <span className="text-xl font-bold">DLC Automation</span>
            </a>
            <p className="text-accent-neutral mb-6 max-w-md">
              We build AI automation systems that handle customer support, appointment setting, and CRM tasks—so you can focus on growing your business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/miguel.ai.automation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent-neutral hover:text-accent-highlight hover:bg-white/20 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/miguel-de-la-cruz-davila-8a528b306" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent-neutral hover:text-accent-highlight hover:bg-white/20 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent-neutral hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-accent-neutral hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-accent-neutral hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-accent-neutral hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-accent-neutral hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-accent-neutral">
                <Mail size={16} className="mr-3" />
                <span>angeliyoft@gmail.com</span>
              </li>
            </ul>
            <Button 
              variant="primary"
              size="md"
              onClick={() => window.open('https://calendly.com/migueldelacruz/ai-booking-demo?month=2025-05', '_blank')}
              className="w-full bg-accent-green/20 hover:bg-accent-green/30 text-accent-highlight border border-accent-highlight/20 hover:border-accent-highlight/40 transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-neutral text-sm mb-4 md:mb-0">
            &copy; {currentYear} DLC Automation Systems. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-accent-neutral hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-accent-neutral hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;