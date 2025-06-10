
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, MessageCircle, FileText as QuoteIcon, MessageSquare as SMSSquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { logEvent } from '@/lib/gtag';

const ServiceHero = ({ service, serviceTitle, heroImageDescription }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const phoneNumber = "+14074088151";
  const utmParams = `utm_source=website&utm_medium=service_page_button&utm_campaign=contact_${service.id}`;

  const pageTitle = `${serviceTitle} in Orlando & Central Florida`;
  const pageSubtitle = t('servicePageSubtitleGeneric', { serviceName: serviceTitle.toLowerCase() });
  
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

  const heroButtonsClass = "text-white border-white/50 hover:bg-white/20 bg-white/10 backdrop-blur-sm";
  const ctaButtons = [
    { label: t('callUs'), Icon: Phone, href: `tel:${phoneNumber}`, eventAction: 'Call', eventLabel: `Call Us - ${serviceTitle}`, className: 'bg-blue-600 hover:bg-blue-700', ariaLabel: t('callUsAria', { serviceName: serviceTitle })},
    { label: t('whatsapp'), Icon: MessageCircle, href: `https://wa.me/${phoneNumber}?text=${whatsappMessage}&${utmParams}_whatsapp`, eventAction: 'WhatsApp', eventLabel: `WhatsApp - ${serviceTitle}`, className: 'bg-green-500 hover:bg-green-600', target: '_blank', ariaLabel: t('whatsappAria', { serviceName: serviceTitle }) },
    { label: t('textUs'), Icon: SMSSquareIcon, href: `sms:${phoneNumber}?&body=${smsMessage}&${utmParams}_sms`, eventAction: 'SMS', eventLabel: `SMS - ${serviceTitle}`, className: 'bg-orange-500 hover:bg-orange-600', ariaLabel: t('textUsAria', { serviceName: serviceTitle }) },
    { label: t('getFreeQuote'), Icon: QuoteIcon, onClick: handleGetQuoteClick, eventAction: 'GetQuote', eventLabel: `Get Quote Button - ${serviceTitle}`, className: 'bg-red-500 hover:bg-red-600', ariaLabel: t('getFreeQuoteAria', { serviceName: serviceTitle }) },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 to-orange-600 text-white overflow-hidden">
      <img 
        alt={heroImageDescription || `Hero image for ${serviceTitle}`} 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
       src="https://images.unsplash.com/photo-1665065434466-8144dac4fc96" />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/services" className="inline-flex items-center text-orange-300 hover:text-orange-200 mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('allServices')}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-shadow">
            {pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {pageSubtitle}
          </p>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8">
            {ctaButtons.map(btn => (
              <Button
                key={btn.label}
                variant="outline"
                size="lg"
                className={`font-semibold ${heroButtonsClass} ${btn.className.includes('bg-red-500') ? 'bg-red-500/80 hover:bg-red-600/90 border-red-400/50' : btn.className.includes('bg-blue-600') ? 'bg-blue-600/80 hover:bg-blue-700/90 border-blue-400/50' : btn.className.includes('bg-green-500') ? 'bg-green-500/80 hover:bg-green-600/90 border-green-400/50' : btn.className.includes('bg-orange-500') ? 'bg-orange-500/80 hover:bg-orange-600/90 border-orange-400/50' : '' }`}
                onClick={btn.onClick ? btn.onClick : () => handleTrackedLinkClick(btn.eventAction, btn.eventLabel, btn.href, btn.target)}
                aria-label={btn.ariaLabel}
              >
                <btn.Icon className="w-5 h-5 mr-2 flex-shrink-0" /> <span className="truncate">{btn.label}</span>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
