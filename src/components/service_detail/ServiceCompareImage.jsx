
import React from 'react';
import { motion } from 'framer-motion';
import CustomCompareImage from '@/components/CustomCompareImage';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCompareImage = ({ serviceTitle, beforeImageDescription, afterImageDescription }) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{t('seeTheTransformation')}</h2>
      <CustomCompareImage 
        leftImageDescription={beforeImageDescription || `Before ${serviceTitle} renovation`}
        rightImageDescription={afterImageDescription || `After ${serviceTitle} renovation`}
        leftImageAlt={t('beforeImageAlt', { serviceName: serviceTitle })}
        rightImageAlt={t('afterImageAlt', { serviceName: serviceTitle })}
      />
    </motion.div>
  );
};

export default ServiceCompareImage;
