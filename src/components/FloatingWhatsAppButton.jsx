
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';
import { logEvent } from '@/lib/gtag'; // Assuming gtag is set up

const FloatingWhatsAppButton = ({ phoneNumber }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const message = encodeURIComponent(t('whatsappMessage'));
  const utmParams = `utm_source=website&utm_medium=floating_button&utm_campaign=contact_whatsapp_float`;

  const handleClick = () => {
    logEvent({
      action: 'Contact Click - WhatsApp Float',
      category: 'Floating Buttons',
      label: `WhatsApp Float - ${location.pathname}`,
    });
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}&${utmParams}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
      className="fixed bottom-20 right-6 md:hidden z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsAppButton;
