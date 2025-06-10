
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import { logEvent } from '@/lib/gtag';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const phoneNumber = "+14074088151";
  const baseWhatsappMessage = "Hi, I'd like to request a quote";
  const baseSmsMessage = "Hi, I'd like to request a quote";

  const utmParams = `utm_source=website&utm_medium=header_button&utm_campaign=contact`;

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('about'), href: '/about' },
    { name: t('testimonials'), href: '/testimonials' },
    { name: t('contact'), href: '/contact' },
  ];

  const handleTrackClick = (action, label) => {
    logEvent({
      action: `Contact Click - ${action}`,
      category: 'Header Buttons',
      label: `${label} - ${location.pathname}`,
    });
  };

  const quickContactButtons = [
    {
      href: `tel:${phoneNumber}`,
      icon: <Phone className="w-4 h-4 mr-1 md:mr-2" />,
      label: 'Call Now',
      className: 'bg-blue-900 hover:bg-blue-800 text-white',
      ariaLabel: 'Call Marcopolo USA Group Corp: +1 (407) 408-8151',
      eventAction: 'Call',
      tooltip: 'Call Us',
    },
    {
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(baseWhatsappMessage)}&${utmParams}_whatsapp`,
      icon: <MessageCircle className="w-4 h-4 mr-1 md:mr-2" />,
      label: 'WhatsApp',
      className: 'bg-green-500 hover:bg-green-600 text-white',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Message Marcopolo USA Group Corp on WhatsApp',
      eventAction: 'WhatsApp',
      tooltip: 'Chat on WhatsApp',
    },
    {
      href: `sms:${phoneNumber}?&body=${encodeURIComponent(baseSmsMessage)}&${utmParams}_sms`,
      icon: <MessageSquare className="w-4 h-4 mr-1 md:mr-2" />,
      label: 'Text Us',
      className: 'bg-orange-500 hover:bg-orange-600 text-white',
      ariaLabel: 'Text Marcopolo USA Group Corp',
      eventAction: 'SMS',
      tooltip: 'Send us an SMS',
    },
  ];

  return (
    <TooltipProvider>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base md:text-lg">M</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-blue-900 font-bold text-lg md:text-xl">MARCOPOLO</div>
                  <div className="text-orange-500 text-xs md:text-sm font-medium">USA GROUP CORP</div>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    location.pathname === item.href
                      ? 'text-orange-500'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-1.5">
                {quickContactButtons.map(btn => (
                  <Tooltip key={btn.label}>
                    <TooltipTrigger asChild>
                      <Button asChild size="sm" className={`${btn.className} px-2 py-1 text-xs`}>
                        <a 
                          href={btn.href} 
                          target={btn.target} 
                          rel={btn.rel} 
                          aria-label={btn.ariaLabel}
                          onClick={() => handleTrackClick(btn.eventAction, btn.label)}
                        >
                          {btn.icon}
                          <span className="hidden lg:inline">{btn.label}</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 text-white border-none shadow-lg rounded-md">
                      <p>{btn.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleLanguage}
                    className="flex items-center space-x-1 px-2 py-1"
                    aria-label="Toggle Language"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-none shadow-lg rounded-md">
                  <p>Switch Language ({language === 'en' ? 'Português' : 'English'})</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex md:hidden items-center space-x-1">
              {quickContactButtons.slice(0,2).map(btn => (
                <Tooltip key={btn.label}>
                  <TooltipTrigger asChild>
                    <Button asChild size="icon" variant="ghost" className={`${btn.className.replace('bg-', 'text-').replace('hover:bg-', 'hover:text-')} p-1.5 rounded-full`}>
                      <a 
                        href={btn.href} 
                        target={btn.target} 
                        rel={btn.rel} 
                        aria-label={btn.ariaLabel}
                        onClick={() => handleTrackClick(btn.eventAction, btn.label)}
                      >
                        {React.cloneElement(btn.icon, {className: "w-5 h-5"})}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-gray-800 text-white border-none shadow-lg rounded-md">
                    <p>{btn.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleLanguage}
                    className="p-1.5 rounded-full"
                    aria-label="Toggle Language"
                  >
                    <Globe className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-gray-800 text-white border-none shadow-lg rounded-md">
                  <p>Switch Language</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-1.5 rounded-full"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-gray-800 text-white border-none shadow-lg rounded-md">
                  <p>{isMenuOpen ? "Close Menu" : "Open Menu"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 mb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-orange-500 hover:bg-gray-50 ${
                      location.pathname === item.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 px-3">
                {quickContactButtons.map(btn => (
                  <Button key={btn.label} asChild size="lg" className={`${btn.className} w-full`}>
                    <a 
                      href={btn.href} 
                      target={btn.target} 
                      rel={btn.rel} 
                      aria-label={btn.ariaLabel} 
                      onClick={() => {
                        handleTrackClick(btn.eventAction, btn.label);
                        setIsMenuOpen(false);
                      }}
                    >
                      {btn.icon}
                      {btn.label}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Header;
