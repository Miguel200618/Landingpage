import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    'Missing leads while you sleep',
    'Manually booking appointments',
    'Forgetting to follow up with prospects',
    'Spending hours on repetitive tasks'
  ];

  const solutions = [
    '24/7 automated chat support',
    'AI booking system that works while you sleep',
    'Automated follow-up sequences',
    'Save 20+ hours per week with full automation'
  ];

  return (
    <section id="problem-solution" className="section bg-primary-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Still handling everything manually?</h2>
          <p className="text-accent-neutral max-w-2xl mx-auto">
            Manual processes cost you time, money, and scalability. Our AI systems solve these problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="glass-card p-8 border-red-500/20 border">
            <h3 className="text-2xl font-bold mb-6 text-center">The Problems</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center">
                  <XCircle size={24} className="text-red-500 mr-3 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="glass-card p-8 border-accent-highlight/20 border">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={24} className="text-accent-highlight mr-3 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;