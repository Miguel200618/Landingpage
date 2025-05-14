import React, { useState } from 'react';
import Button from './Button';
import { supabase } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            business_name: formData.businessName,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', businessName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-accent-neutral">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-light border border-accent-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-highlight text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="businessName" className="block text-sm font-medium text-accent-neutral">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-light border border-accent-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-highlight text-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-accent-neutral">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-light border border-accent-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-highlight text-white"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-accent-neutral">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-light border border-accent-neutral/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-highlight text-white resize-none"
          ></textarea>
        </div>
      </div>
      <div className="mt-8">
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Schedule My Call'}
        </Button>
        {submitStatus === 'success' && (
          <p className="mt-4 text-center text-green-500">Thanks for your message! We'll get back to you soon.</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-center text-red-500">There was an error submitting your message. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;