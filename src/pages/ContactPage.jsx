
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';
import { logEvent } from '@/lib/gtag';

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const location = useLocation();
  const phoneNumber = "+14074088151";
  const utmParamsBase = `utm_source=website&utm_medium=contact_page_button&utm_campaign=contact`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get('service');
    if (serviceParam) {
      const serviceName = serviceParam.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      setFormData(prev => ({
        ...prev,
        service: serviceName,
        message: `I'm interested in your ${serviceName} service.`
      }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    logEvent({
      action: 'Contact Click - Quote Form Submit',
      category: 'Contact Page Form',
      label: `Quote Form - Contact Page ${formData.service ? `- ${formData.service}` : ''}`,
    });
    
    const inquiries = JSON.parse(localStorage.getItem('inquiries')) || [];
    inquiries.push(formData);
    localStorage.setItem('inquiries', JSON.stringify(inquiries));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for your message. We\'ll get back to you within 24 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: formData.service 
    });
  };

  const handleTrackedLinkClick = (action, label, url, target) => {
    logEvent({
      action: `Contact Click - ${action}`,
      category: 'Contact Page Links',
      label: `${label} - Contact Page`,
    });
    if (target === '_blank') {
      window.open(url, target);
    } else {
      window.location.href = url;
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(407) 408-8151',
      action: `tel:${phoneNumber}`,
      eventAction: 'Call',
      eventLabel: 'Phone Link',
      utm: `${utmParamsBase}_call`
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@marcopolousagroup.com',
      action: 'mailto:info@marcopolousagroup.com',
      eventAction: 'Email',
      eventLabel: 'Email Link',
      utm: `${utmParamsBase}_email`
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Orlando & Central Florida',
      action: null,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: 'Quick Response',
      action: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formData.service ? `Hi, I'm interested in your ${formData.service} service.` : t('whatsappMessage'))}`,
      eventAction: 'WhatsApp',
      eventLabel: 'WhatsApp Link',
      utm: `${utmParamsBase}_whatsapp`
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contactForm')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="(407) 555-0123"
                  />
                </div>
                
                {formData.service && (
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      value={formData.service}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={formData.service ? 3 : 6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600"
                >
                  {t('sendMessage')}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contactInfo')}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action.includes('wa.me') || info.action.includes('mailto:') ? `${info.action}&${info.utm}` : info.action}
                            className="text-orange-500 hover:text-orange-600 transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={(e) => {
                              if (!info.action.startsWith('http') && !info.action.startsWith('tel:')) e.preventDefault();
                              handleTrackedLinkClick(info.eventAction, info.eventLabel, `${info.action}${info.utm ? `&${info.utm}` : ''}`, info.action.startsWith('http') ? '_blank' : undefined);
                            }}
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{t('hours')}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>{t('mondayFriday')}</p>
                  <p>{t('saturday')}</p>
                  <p>{t('sunday')}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Area</h3>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Orlando & Central Florida</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Emergency Services Available
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Need urgent repairs or board-up services? We offer 24/7 emergency response for critical situations.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white pulse-glow"
              onClick={() => logEvent({ action: 'Contact Click - Call Emergency', category: 'CTA Section', label: 'Call Emergency Line - Contact Page CTA' })}
            >
              <a href={`tel:${phoneNumber}`}>Call Emergency Line</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
