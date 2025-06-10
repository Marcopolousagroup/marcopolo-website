
import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceGalleryBlock = ({ serviceTitle, galleryImages }) => {
  const { t } = useLanguage();

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className="my-12 md:my-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        {t('projectGalleryTitle', {serviceName: serviceTitle})}
      </h2>
      <ImageGallery images={galleryImages} />
    </motion.div>
  );
};

export default ServiceGalleryBlock;
