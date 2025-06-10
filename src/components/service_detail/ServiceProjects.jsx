
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceProjects = ({ serviceTitle, recentProjects }) => {
  const { t } = useLanguage();

  if (!recentProjects || recentProjects.length === 0) {
    return null;
  }

  return (
    <motion.div 
      className="my-12 md:my-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
        {t('recentProjectsTitle', {serviceName: serviceTitle})}
      </h2>
      <div className="space-y-12">
      {recentProjects.map((project, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-1">{project.brand}</h3>
          <p className="text-sm text-gray-500 mb-3"><MapPin className="w-4 h-4 inline mr-1"/>{project.location}</p>
          <p className="text-gray-700 mb-4 italic">"{project.caption}"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((imgDesc, imgIdx) => (
            <div key={imgIdx} className="aspect-w-3 aspect-h-2 rounded-md overflow-hidden bg-gray-200">
                <img 
                className="object-cover w-full h-full"
                alt={`${project.brand} - ${serviceTitle} - Image ${imgIdx + 1} - ${imgDesc}`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </motion.div>
  );
};

export default ServiceProjects;
