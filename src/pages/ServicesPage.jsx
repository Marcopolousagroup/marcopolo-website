import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = ({ services }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('servicesTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl service-card border border-gray-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={t(service.titleKey)}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{t(service.descriptionKey).substring(0, 100)}...</p>
                  
                  <Button
                    asChild
                    className="w-full mt-auto bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600"
                  >
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We specialize in tailored commercial renovation solutions. Contact us to discuss your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-orange-500 hover:from-blue-800 hover:to-orange-600"
              >
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;