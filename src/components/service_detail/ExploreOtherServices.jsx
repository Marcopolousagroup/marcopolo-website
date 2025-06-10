import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ExploreOtherServices = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {t('exploreOtherServices')}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('fullRangeCommercialSolutions')}
        </p>
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
          <Link to="/services">{t('viewAllServices')}</Link>
        </Button>
      </div>
    </section>
  );
};

export default ExploreOtherServices;