import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Globe, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { logEvent } from '@/lib/gtag';

const HomePage = ({ services: allServices }) => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Clock,
      title: t('fastService'),
      description: t('fastServiceDesc'),
    },
    {
      icon: Shield,
      title: t('licensedInsured'),
      description: t('licensedInsuredDesc'),
    },
    {
      icon: Globe,
      title: t('bilingualService'),
      description: t('bilingualServiceDesc'),
    },
  ];

  const featuredServices = allServices.slice(0, 3);

  const handleHeroCtaClick = () => {
    logEvent({
      action: 'Contact Click - Get Free Quote',
      category: 'Hero Section',
      label: 'Get a Free Quote Now - Homepage',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-500/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Flooring, painting, electrical & commercial remodeling done fast, safe, and right the first time.
            </p>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium">
              Trusted by businesses across Orlando, Kissimmee, Tampa and all of Central Florida.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full pulse-glow"
                onClick={handleHeroCtaClick}
              >
                <Link to="/contact">
                  {t('getQuoteBtn')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover opacity-40" 
            alt="Brightly lit commercial space undergoing renovation with flooring installation visible"
           src="https://images.unsplash.com/photo-1566577190773-6417c0cc7238" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={t(service.titleKey)}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg service-card flex flex-col"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={t(service.titleKey)}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(service.titleKey)}</h3>
                  <p className="text-gray-700 mb-4 text-sm flex-grow">{t(service.descriptionKey).substring(0,120)}...</p>
                  <Button asChild size="lg" className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full group">
                    <Link to={`/services/${service.id}`}>
                      {t('learnMore')}
                      <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-10 py-3 transition-colors duration-300 ease-in-out" variant="outline">
              <Link to="/services">
                {t('viewAllServices')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free consultation and quote for your commercial renovation project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => logEvent({ action: 'Contact Click - Get Free Quote', category: 'CTA Section', label: 'Get Free Quote - Homepage CTA' })}
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;