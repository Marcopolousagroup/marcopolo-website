
import React from 'react';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { logEvent } from '@/lib/gtag';
import { useLocation } from 'react-router-dom';

const FloatingContactButtons = ({ phoneNumber }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const whatsappMessage = encodeURIComponent(t('whatsappMessage'));
  const smsMessage = encodeURIComponent(t('whatsappMessage')); 

  const utmParams = `utm_source=website&utm_medium=floating_button&utm_campaign=contact`;

  const buttons = [
    {
      href: `tel:${phoneNumber}`,
      icon: <Phone size={24} />,
      label: 'Call Now',
      ariaLabel: 'Call Marcopolo USA Group Corp',
      className: 'bg-blue-600 hover:bg-blue-700',
      eventAction: 'Call',
    },
    {
      href: `https://wa.me/${phoneNumber}?text=${whatsappMessage}&${utmParams}_whatsapp`,
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      ariaLabel: 'Message Marcopolo USA Group Corp on WhatsApp',
      className: 'bg-green-500 hover:bg-green-600',
      target: '_blank',
      eventAction: 'WhatsApp',
    },
    {
      href: `sms:${phoneNumber}?&body=${smsMessage}&${utmParams}_sms`,
      icon: <MessageSquare size={24} />,
      label: 'Text Us',
      ariaLabel: 'Text Marcopolo USA Group Corp',
      className: 'bg-orange-500 hover:bg-orange-600',
      eventAction: 'SMS',
    },
  ];

  const handleTrackClick = (action, label) => {
    logEvent({
      action: `Contact Click - ${action}`,
      category: 'Floating Buttons',
      label: `${label} - ${location.pathname}`,
    });
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 md:hidden z-50 flex flex-col space-y-3">
        {buttons.map((btn) => (
          <Tooltip key={btn.label}>
            <TooltipTrigger asChild>
              <Button
                asChild
                size="icon"
                className={`rounded-full p-3 text-white shadow-lg ${btn.className}`}
                onClick={() => handleTrackClick(btn.eventAction, btn.label)}
              >
                <a href={btn.href} target={btn.target} rel={btn.target ? 'noopener noreferrer' : undefined} aria-label={btn.ariaLabel}>
                  {btn.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-gray-800 text-white border-none shadow-lg rounded-md">
              <p>{btn.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default FloatingContactButtons;
