import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

import ServiceHero from '@/components/service_detail/ServiceHero';
import ServiceCompareImage from '@/components/service_detail/ServiceCompareImage';
import ServiceContent from '@/components/service_detail/ServiceContent';
import ServiceGalleryBlock from '@/components/service_detail/ServiceGalleryBlock';
import ServiceProjects from '@/components/service_detail/ServiceProjects';
import ServiceTestimonial from '@/components/service_detail/ServiceTestimonial';
import ServiceCTA from '@/components/service_detail/ServiceCTA';
import ExploreOtherServices from '@/components/service_detail/ExploreOtherServices';

const ServiceDetailPage = ({ service }) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  const serviceTitle = t(service.titleKey);

  const baseServiceContentData = {
    seoParagraph: t('serviceDetailBaseSeoParagraph', { serviceName: serviceTitle, serviceId: service.id.replace('-', ' ') }),
    whatsIncluded: t('serviceDetailBaseWhatsIncluded', { returnObjects: true }) || [],
    areasServed: t('serviceDetailBaseAreasServed', { returnObjects: true }) || [],
    testimonial: {
      quote: t('serviceDetailBaseTestimonialQuote'),
      name: t('serviceDetailBaseTestimonialName'),
      location: t('serviceDetailBaseTestimonialLocation')
    },
  };
  
  const serviceSpecificContentData = {
    'flooring-installation': {
      heroImageDescription: service.heroImage || "Sleek and modern commercial vinyl flooring installation",
      beforeImage: "Old worn out commercial carpet before renovation",
      afterImage: "Brand new luxury vinyl plank flooring after installation",
      seoParagraph: t('flooringInstallationSeoParagraph'),
      whatsIncluded: t('flooringInstallationWhatsIncluded', { returnObjects: true }) || [],
      areasServed: ['Orlando', 'Kissimmee', 'Tampa', 'Lakeland', 'Winter Park', 'Lake Mary', 'Altamonte Springs', 'Apopka'],
      testimonial: {
        quote: "Marcopolo transformed our retail space with new vinyl flooring. The team was fast, professional, and worked after hours to avoid disruption. Highly recommend for any commercial flooring installation in Orlando!",
        name: "Sarah M., Store Manager",
        location: "Bath & Body Works – Florida Mall"
      },
      recentProjects: [
        { brand: "T-Mobile Store", location: "Florida Mall, Orlando", caption: "Luxury vinyl plank (LVP) installation across entire sales floor. Completed in 2 nights.", images: ["Wide shot of T-Mobile store with new LVP flooring", "Close-up of vinyl plank texture at T-Mobile", "Flooring team working during night at T-Mobile store"] },
        { brand: "Office Complex", location: "Downtown Tampa", caption: "High-durability tile flooring for main lobby, corridors, and restrooms.", images: ["Expansive office lobby with new large-format tile flooring in Tampa", "Detailed tile pattern in office corridor", "Commercial restroom with new floor and wall tiles in Tampa"] }
      ],
      galleryImages: [
        { src: "Upscale retail store with new dark wood-look vinyl flooring", alt: "Modern vinyl flooring in Orlando retail store" },
        { src: "Commercial office space with durable light-colored carpet tiles", alt: "Carpet tile installation for Florida offices" },
        { src: "Restaurant dining area with stylish and easy-to-clean polished concrete flooring", alt: "Polished concrete flooring for Kissimmee restaurant" },
        { src: "Fitness center with specialized shock-absorbent rubber flooring", alt: "Gym rubber flooring installation in Tampa" },
        { src: "Close up detail of luxury vinyl plank texture and installation quality", alt: "Luxury vinyl plank flooring detail and craftsmanship" },
        { src: "Professional flooring team installing large format ceramic tiles in a commercial building", alt: "Expert tile installation team in Lakeland" },
        { src: "Modern medical clinic waiting room with seamless epoxy flooring", alt: "Epoxy flooring for healthcare facility in Central Florida"},
        { src: "Side-by-side comparison of old carpet and new tile flooring during renovation", alt: "Before and after flooring renovation" }
      ]
    },
    'painting': {
      heroImageDescription: service.heroImage || "Crisp and clean interior commercial painting project",
      beforeImage: "Faded and stained commercial exterior wall before painting",
      afterImage: "Freshly painted vibrant commercial building exterior",
      whatsIncluded: t('paintingWhatsIncluded', { returnObjects: true }) || [],
      recentProjects: [
        { brand: "Bath & Body Works", location: "Orlando", caption: "Interior retail store painting, low VOC paints, completed after hours.", images: ["Interior of Bath & Body Works store freshly painted", "Detail of clean paint lines at Bath & Body Works", "Painting team working in Bath & Body Works"] },
        { brand: "Walgreens", location: "Tampa", caption: "Exterior painting of Walgreens store, including facade and signage.", images: ["Exterior of Walgreens store after painting in Tampa", "Painters on lift working on Walgreens facade", "Close-up of Walgreens sign with new paint"] }
      ],
      galleryImages: [
        { src: "Interior painting of a modern office space with accent wall", alt: "Commercial interior painting Orlando" },
        { src: "Exterior painting of a large commercial building with lift", alt: "Commercial exterior painting Florida" },
        { src: "Close-up of painter applying paint to a wall", alt: "Professional painter at work Kissimmee" },
        { src: "Retail store interior with freshly painted walls and ceiling", alt: "Retail store painting Tampa" },
        { src: "Warehouse interior painting with safety lines", alt: "Warehouse painting Lakeland" },
        { src: "Team of painters working on a multi-story building", alt: "Commercial painting contractors Central Florida" },
        { src: "Before and after shot of an office interior painting", alt: "Office painting transformation" },
        { src: "Spray painting a commercial door for smooth finish", alt: "Spray painting commercial fixtures" }
      ]
    },
    'electrical': {
      heroImageDescription: service.heroImage || "Electrician performing safe electrical wiring for a new build",
      beforeImage: "Old, outdated commercial electrical panel",
      afterImage: "New, modern, and organized commercial electrical panel",
      whatsIncluded: t('electricalWhatsIncluded', { returnObjects: true }) || [],
      recentProjects: [
        { brand: "Zara", location: "Lake Buena Vista", caption: "Complete electrical fit-out for new retail store, including lighting and POS systems.", images: ["Interior of Zara store with new lighting fixtures", "Electrician working on Zara's main electrical panel", "Custom lighting installation at Zara"] },
        { brand: "Commercial Kitchen", location: "Orlando", caption: "Heavy-duty electrical wiring for commercial kitchen appliances.", images: ["Commercial kitchen with new electrical outlets and wiring", "Electrician installing wiring for kitchen equipment", "Close-up of commercial-grade electrical socket"] }
      ],
      galleryImages: [
        { src: "Electrician installing new lighting fixtures in an office", alt: "Commercial electrical installation Orlando" },
        { src: "Close-up of a commercial electrical panel", alt: "Electrical panel upgrade Florida" },
        { src: "Wiring for a data center or server room", alt: "Data center electrical wiring Kissimmee" },
        { src: "Exterior lighting installation for a commercial building", alt: "Commercial exterior lighting Tampa" },
        { src: "Electrician troubleshooting an electrical issue", alt: "Electrical repair services Lakeland" },
        { src: "Installation of emergency backup generator", alt: "Backup generator installation Central Florida" },
        { src: "Retail store track lighting installation", alt: "Retail store lighting solutions" },
        { src: "Smart building automation wiring", alt: "Smart building electrical systems" }
      ]
    },
    'drywall': {
        heroImageDescription: service.heroImage || "Perfectly smooth drywall ready for paint in a new office",
        beforeImage: "Damaged drywall with cracks and holes in a commercial space",
        afterImage: "Flawlessly repaired and finished drywall ready for painting",
        whatsIncluded: t('drywallWhatsIncluded', { returnObjects: true }) || [],
        galleryImages: [
            { src: "Drywall installation in a new commercial construction", alt: "Commercial drywall installation Orlando" },
            { src: "Drywall finishing and taping process", alt: "Drywall finishing Florida" },
            { src: "Repairing water damaged drywall ceiling", alt: "Drywall repair Kissimmee" },
            { src: "Soundproof drywall installation for office", alt: "Soundproof drywall Tampa" },
            { src: "Curved drywall feature wall", alt: "Custom drywall work Lakeland" },
            { src: "Metal stud framing for drywall", alt: "Drywall framing Central Florida" },
            { src: "Textured drywall finish", alt: "Textured drywall application" },
            { src: "Large commercial space with newly installed drywall", alt: "Large scale drywall projects" }
        ]
    },
    'commercial-maintenance': {
        heroImageDescription: service.heroImage || "Technician performing preventative maintenance on HVAC system",
        beforeImage: "Neglected commercial property exterior with peeling paint and overgrown landscaping",
        afterImage: "Well-maintained commercial property exterior, clean and professional",
        whatsIncluded: t('commercialMaintenanceWhatsIncluded', { returnObjects: true }) || [],
        galleryImages: [
            { src: "Scheduled HVAC filter replacement and system check", alt: "Commercial HVAC maintenance Orlando" },
            { src: "Plumbing repairs in a commercial restroom", alt: "Commercial plumbing maintenance Florida" },
            { src: "Routine lighting checks and bulb replacement in office", alt: "Lighting maintenance Kissimmee" },
            { src: "Exterior building cleaning and pressure washing", alt: "Building exterior maintenance Tampa" },
            { src: "General handyman repairs in a retail store", alt: "Retail store maintenance Lakeland" },
            { src: "Roof inspection and minor repairs for commercial building", alt: "Commercial roof maintenance Central Florida" },
            { src: "Parking lot striping and maintenance", alt: "Parking lot maintenance" },
            { src: "Emergency repair service for a commercial client", alt: "Emergency commercial repairs" }
        ]
    },
    'remodeling': {
        heroImageDescription: service.heroImage || "Stunning newly remodeled open-plan office space",
        beforeImage: "Outdated and cramped retail store interior before remodeling",
        afterImage: "Modern, spacious, and inviting retail store interior after full remodel",
        whatsIncluded: t('remodelingWhatsIncluded', { returnObjects: true }) || [],
        galleryImages: [
            { src: "Complete office renovation with modern design", alt: "Office remodeling Orlando" },
            { src: "Restaurant interior remodeling project", alt: "Restaurant remodeling Florida" },
            { src: "Retail store layout change and modernization", alt: "Retail store remodel Kissimmee" },
            { src: "Commercial bathroom ADA compliance remodel", alt: "Commercial bathroom remodel Tampa" },
            { src: "Lobby and reception area upgrade", alt: "Lobby remodeling Lakeland" },
            { src: "Converting warehouse space into offices", alt: "Commercial space conversion Central Florida" },
            { src: "Exterior facade modernization", alt: "Building facade remodel" },
            { src: "Before and after photos of a full commercial remodel", alt: "Commercial remodeling transformation" }
        ]
    },
    'board-up': {
        heroImageDescription: service.heroImage || "Rapid response team boarding up a damaged storefront",
        beforeImage: "Commercial building with broken windows after a storm",
        afterImage: "Same building securely boarded up to prevent further damage and unauthorized entry",
        whatsIncluded: t('boardUpWhatsIncluded', { returnObjects: true }) || [],
        galleryImages: [
            { src: "Emergency board-up service for a store after break-in", alt: "Emergency board-up Orlando" },
            { src: "Securing a commercial building before a hurricane", alt: "Hurricane board-up Florida" },
            { src: "Boarding up windows of a vacant commercial property", alt: "Vacant property security Kissimmee" },
            { src: "Fire damage board-up service", alt: "Fire damage board-up Tampa" },
            { src: "Temporary door and window board-up", alt: "Temporary board-up Lakeland" },
            { src: "24/7 emergency response team vehicle", alt: "Emergency response Central Florida" },
            { src: "Close-up of securely fastened boards on a window", alt: "Secure board-up detail" },
            { src: "Large commercial building fully boarded up", alt: "Large scale board-up service" }
        ]
    },
    'sign-installation': {
        heroImageDescription: service.heroImage || "Crane installing a large illuminated sign on a high-rise building",
        beforeImage: "Old, faded, and non-functional business sign",
        afterImage: "New, bright, and modern LED business sign fully installed and operational",
        whatsIncluded: t('signInstallationWhatsIncluded', { returnObjects: true }) || [],
        galleryImages: [
            { src: "Channel letter sign installation on a storefront", alt: "Channel letter sign Orlando" },
            { src: "Blade sign installation for a boutique shop", alt: "Blade sign installation Florida" },
            { src: "Monument sign installation at a business park entrance", alt: "Monument sign Kissimmee" },
            { src: "LED sign retrofitting and installation", alt: "LED sign Tampa" },
            { src: "Pylon sign installation for a shopping center", alt: "Pylon sign Lakeland" },
            { src: "Interior wayfinding signage installation", alt: "Interior signage Central Florida" },
            { src: "Sign maintenance and repair service", alt: "Sign repair service" },
            { src: "Team installing a large banner on a building", alt: "Banner installation" }
        ]
    }
  };
  
  const currentServiceContent = {
    ...baseServiceContentData,
    ...(serviceSpecificContentData[service.id] || {}),
    heroImageDescription: serviceSpecificContentData[service.id]?.heroImageDescription || service.heroImage || `${serviceTitle} project in progress`,
    beforeImage: serviceSpecificContentData[service.id]?.beforeImage || "Generic commercial space before renovation",
    afterImage: serviceSpecificContentData[service.id]?.afterImage || "Generic commercial space after renovation by Marcopolo",
    // Ensure whatsIncluded is an array
    whatsIncluded: Array.isArray(serviceSpecificContentData[service.id]?.whatsIncluded) ? serviceSpecificContentData[service.id].whatsIncluded : (Array.isArray(baseServiceContentData.whatsIncluded) ? baseServiceContentData.whatsIncluded : []),
    recentProjects: serviceSpecificContentData[service.id]?.recentProjects || [
      { brand: `Showcase Project 1 (${serviceTitle})`, location: "Orlando, FL", caption: `Example of our high-quality ${serviceTitle.toLowerCase()} work.`, images: [`${service.image} - Showcase 1`, `Detail of ${service.id} work`, `Team working on ${service.id} project`] },
    ],
    galleryImages: serviceSpecificContentData[service.id]?.galleryImages || [
      { src: `${service.image} - Example 1`, alt: `${serviceTitle} Example 1 in Orlando` },
      { src: `Commercial ${service.id} work site`, alt: `${serviceTitle} Example 2 in Florida` },
      { src: `Finished ${service.id} project`, alt: `${serviceTitle} Example 3 in Kissimmee` },
      { src: `Close up of ${service.id} detail`, alt: `${serviceTitle} Example 4 in Tampa` },
      { src: `${service.id} material selection`, alt: `${serviceTitle} Example 5 in Lakeland` },
      { src: `Professional team performing ${service.id}`, alt: `${serviceTitle} Example 6 in Central Florida` }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <ServiceHero service={service} serviceTitle={serviceTitle} heroImageDescription={currentServiceContent.heroImageDescription} />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCompareImage 
            serviceTitle={serviceTitle} 
            beforeImageDescription={currentServiceContent.beforeImage} 
            afterImageDescription={currentServiceContent.afterImage} 
          />
          <ServiceContent 
            serviceTitle={serviceTitle}
            seoParagraph={currentServiceContent.seoParagraph}
            whatsIncluded={currentServiceContent.whatsIncluded}
            areasServed={currentServiceContent.areasServed}
          />
          <ServiceGalleryBlock 
            serviceTitle={serviceTitle} 
            galleryImages={currentServiceContent.galleryImages} 
          />
          <ServiceProjects 
            serviceTitle={serviceTitle} 
            recentProjects={currentServiceContent.recentProjects} 
          />
          <ServiceTestimonial testimonial={currentServiceContent.testimonial} />
          <ServiceCTA service={service} serviceTitle={serviceTitle} />
        </div>
      </section>
      
      <ExploreOtherServices />
    </motion.div>
  );
};

export default ServiceDetailPage;