import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceContent = ({ serviceTitle, seoParagraph, whatsIncluded, areasServed }) => {
  const { t } = useLanguage();

  return (
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
      <p className="lead text-xl mb-8 text-gray-800">
        {seoParagraph.split('**').map((text, index) => 
          index % 2 === 1 ? <strong key={index} className="text-blue-800 font-semibold">{text}</strong> : text
        )}
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
        {t('whatsIncludedInOurService', { serviceName: serviceTitle })}
      </h2>
      {Array.isArray(whatsIncluded) && whatsIncluded.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
          {whatsIncluded.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mb-10">{t('noInclusionsListed')}</p>
      )}


      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
        {t('areasWeServeFlorida')}
      </h2>
      <p className="mb-4 text-gray-800">
        {t('weProudlyOfferServices', { serviceName: serviceTitle.toLowerCase() })}
      </p>
      {Array.isArray(areasServed) && areasServed.length > 0 ? (
        <div className="flex flex-wrap gap-3 mb-10">
          {areasServed.map(area => (
            <span key={area} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-sm">
              <MapPin className="w-4 h-4 mr-2" /> {area}
            </span>
          ))}
        </div>
      ) : (
         <p className="text-gray-600 mb-10">{t('contactForAreaCoverage')}</p>
      )}
    </div>
  );
};

export default ServiceContent;