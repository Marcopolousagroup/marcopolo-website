
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import { LanguageProvider } from '@/contexts/LanguageContext';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { initGA, logPageView } from '@/lib/gtag';

const GATracker = () => {
  const location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);
  return null;
};

function App() {
  useEffect(() => {
    initGA('YOUR_GA_TRACKING_ID');
  }, []);

  const services = [
    { 
      id: 'flooring-installation', 
      titleKey: 'flooringTitle', 
      image: 'Modern vinyl flooring installation in upscale retail store', 
      heroImage: 'Spacious commercial interior with newly installed sleek vinyl flooring', 
      descriptionKey: 'flooringDesc', 
      benefits: ['Durable & Stylish', 'Professional Installation', 'Wide Variety of Options', 'Increased Property Value'] 
    },
    { 
      id: 'painting', 
      titleKey: 'paintingTitle', 
      image: 'Professional painters on scaffolding painting commercial building exterior', 
      heroImage: 'Brightly painted modern office interior with accent wall', 
      descriptionKey: 'paintingDesc', 
      benefits: ['Fresh & Modern Look', 'High-Quality Materials', 'Interior & Exterior', 'Protects Surfaces'] 
    },
    { 
      id: 'electrical', 
      titleKey: 'electricalTitle', 
      image: 'Licensed electrician installing electrical panel in commercial building', 
      heroImage: 'Electrician working on complex wiring for a commercial setup', 
      descriptionKey: 'electricalDesc', 
      benefits: ['Safety Certified', 'Code Compliant', 'Efficient Systems', 'Upgrades & Repairs'] 
    },
    { 
      id: 'drywall', 
      titleKey: 'drywallTitle', 
      image: 'Professional drywall installation in modern office space', 
      heroImage: 'Smooth perfectly finished drywall in a commercial construction site', 
      descriptionKey: 'drywallDesc', 
      benefits: ['Smooth Finishes', 'Soundproofing', 'Fire Resistance', 'Quick Installation'] 
    },
    { 
      id: 'commercial-maintenance', 
      titleKey: 'maintenanceTitle', 
      image: 'Maintenance team performing routine commercial building upkeep on HVAC system', 
      heroImage: 'Technician performing HVAC maintenance on a commercial rooftop unit', 
      descriptionKey: 'maintenanceDesc', 
      benefits: ['Proactive Care', 'Reduced Downtime', 'Cost-Effective', 'Custom Plans'] 
    },
    { 
      id: 'remodeling', 
      titleKey: 'remodelingTitle', 
      image: 'Complete commercial space renovation and remodeling project in a restaurant', 
      heroImage: 'Stylish newly remodeled restaurant interior with modern furniture', 
      descriptionKey: 'remodelingDesc', 
      benefits: ['Space Optimization', 'Modernization', 'Increased Functionality', 'Turnkey Solutions'] 
    },
    { 
      id: 'board-up', 
      titleKey: 'boardUpTitle', 
      image: 'Emergency board up services for commercial property protection after storm damage', 
      heroImage: 'Securely boarded up storefront after an emergency incident', 
      descriptionKey: 'boardUpDesc', 
      benefits: ['24/7 Emergency Service', 'Property Security', 'Damage Prevention', 'Fast Response'] 
    },
    { 
      id: 'sign-installation', 
      titleKey: 'signsTitle', 
      image: 'Professional sign installation on commercial building facade using a crane', 
      heroImage: 'Large illuminated business sign being installed on a commercial building', 
      descriptionKey: 'signsDesc', 
      benefits: ['Enhanced Visibility', 'Professional Installation', 'Permit Assistance', 'Maintenance & Repair'] 
    },
  ];

  return (
    <LanguageProvider>
      <Router>
        <GATracker />
        <div className="min-h-screen bg-white scroll-smooth">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage services={services} />} />
              <Route path="/services" element={<ServicesPage services={services} />} />
              {services.map(service => (
                <Route 
                  key={service.id}
                  path={`/services/${service.id}`} 
                  element={<ServiceDetailPage service={service} />} 
                />
              ))}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <Toaster />
          <FloatingContactButtons phoneNumber="+14074088151" />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
