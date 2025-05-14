import React, { useState, useEffect } from 'react';
import { AlignRight, X, Zap } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookDemo = () => {
    window.open('https://calendly.com/angeliyoft/ai-booking-demo', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center text-accent-highlight">
          <Zap size={30} className="mr-2" />
          <span className="text-xl font-bold">DLC Automation</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-accent-neutral hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={handleBookDemo}
            className="hover:transform hover:scale-105 transition-all duration-300"
          >
            Book Demo
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-accent-neutral hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              className="w-full mt-4 hover:transform hover:scale-105 transition-all duration-300" 
              onClick={handleBookDemo}
            >
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;