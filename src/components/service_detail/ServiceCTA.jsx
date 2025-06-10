import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText as QuoteIcon, MessageSquare as SMSSquareIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { logEvent } from '@/lib/gtag';

const ServiceCTA = ({ service, serviceTitle }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const phoneNumber = "+14074088151";
  const utmParams = `utm_source=website&utm_medium=service_page_button&utm_campaign=contact_${service.id}`;
  
  const whatsappMessage = encodeURIComponent(t('whatsappServiceMessage', { serviceName: serviceTitle }));
  const smsMessage = encodeURIComponent(t('smsServiceMessage', { serviceName: serviceTitle }));

  const handleTrackedLinkClick = (action, label, url, target) => {
    logEvent({
      action: `Contact Click - ${action}`,
      category: 'Service Detail Page Links',
      label: `${label} - ${serviceTitle}`,
    });
    if (target === '_blank') {
      window.open(url, target);
    } else {
      window.location.href = url;
    }
  };

  const handleGetQuoteClick = () => {
    logEvent({
      action: 'Contact Click - Get Free Quote Button',
      category: 'Service Detail Page CTA',
      label: `Get Free Quote - ${serviceTitle}`,
    });
    navigate(`/contact?service=${service.id}`);
  };

  const ctaButtons = [
    { label: t('callUs'), Icon: Phone, href: `tel:${phoneNumber}`, eventAction: 'Call', eventLabel: `Call Us - ${serviceTitle}`, className: 'bg-blue-600 hover:bg-blue-700', ariaLabel: t('callUsAria', { serviceName: serviceTitle })},
    { label: t('whatsapp'), Icon: MessageCircle, href: `https://wa.me/${phoneNumber}?text=${whatsappMessage}&${utmParams}_whatsapp`, eventAction: 'WhatsApp', eventLabel: `WhatsApp - ${serviceTitle}`, className: 'bg-green-500 hover:bg-green-600', target: '_blank', ariaLabel: t('whatsappAria', { serviceName: serviceTitle }) },
    { label: t('textUs'), Icon: SMSSquareIcon, href: `sms:${phoneNumber}?&body=${smsMessage}&${utmParams}_sms`, eventAction: 'SMS', eventLabel: `SMS - ${serviceTitle}`, className: 'bg-orange-500 hover:bg-orange-600', ariaLabel: t('textUsAria', { serviceName: serviceTitle }) },
    { label: t('getFreeQuote'), Icon: QuoteIcon, onClick: handleGetQuoteClick, eventAction: 'GetQuote', eventLabel: `Get Quote Button - ${serviceTitle}`, className: 'bg-red-500 hover:bg-red-600', ariaLabel: t('getFreeQuoteAria', { serviceName: serviceTitle }) },
  ];

  return (
    <motion.div 
      className="mt-12 md:mt-16 py-10 border-t border-gray-300"
      initial={{ opacity: 0, y:20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        {t('readyToStartProject', { serviceName: serviceTitle })}
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-xl mx-auto mb-8">
        {t('contactUsForQuote')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {ctaButtons.map(btn => (
          <Button
            key={btn.label}
            size="lg"
            className={`w-full font-semibold ${btn.className} text-white`}
            onClick={btn.onClick ? btn.onClick : () => handleTrackedLinkClick(btn.eventAction, btn.eventLabel, btn.href, btn.target)}
            aria-label={btn.ariaLabel}
          >
            <btn.Icon className="w-5 h-5 mr-2 flex-shrink-0" /> <span className="truncate">{btn.label}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCTA;