import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="hero-pattern gradient-mask">
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;