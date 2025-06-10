
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { logEvent } from '@/lib/gtag';
import { useLocation } from 'react-router-dom';

const ContactFormBlock = ({ serviceName }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: serviceName ? `I'm interested in your ${serviceName} service.` : '',
    service: serviceName || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Error', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }

    logEvent({
      action: 'Contact Click - Quote Form Submit',
      category: 'Embedded Form',
      label: `Quote Form - ${serviceName || 'General Contact'} - ${location.pathname}`,
    });

    const inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    inquiries.push(formData);
    localStorage.setItem('inquiries', JSON.stringify(inquiries));

    toast({ title: 'Message Sent!', description: 'Thank you! We\'ll be in touch soon.' });
    setFormData({ name: '', email: '', phone: '', message: serviceName ? `I'm interested in your ${serviceName} service.` : '', service: serviceName || '' });
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-orange-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          {t('contactFormTitle') || `Get a Free Quote for ${serviceName || 'Our Services'}`}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          {t('contactFormSubtitle') || 'Fill out the form below and we\'ll get back to you promptly.'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-2xl">
          <div>
            <label htmlFor="form-name" className="block text-sm font-medium text-gray-700 mb-1">{t('name')} *</label>
            <input type="text" id="form-name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Your Full Name" />
          </div>
          <div>
            <label htmlFor="form-email" className="block text-sm font-medium text-gray-700 mb-1">{t('email')} *</label>
            <input type="email" id="form-email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="your.email@example.com" />
          </div>
          <div>
            <label htmlFor="form-phone" className="block text-sm font-medium text-gray-700 mb-1">{t('phone')}</label>
            <input type="tel" id="form-phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="(555) 123-4567" />
          </div>
          {serviceName && <input type="hidden" name="service" value={formData.service} />}
          <div>
            <label htmlFor="form-message" className="block text-sm font-medium text-gray-700 mb-1">{t('message')} *</label>
            <textarea id="form-message" name="message" value={formData.message} onChange={handleInputChange} required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 resize-none" placeholder="Tell us about your project..."></textarea>
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600 text-white">
            {t('sendMessage')}
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactFormBlock;