
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Home Page
    heroTitle: 'We Build Trust. We Renovate with Excellence.',
    heroSubtitle: 'Professional commercial renovations and building maintenance in Orlando and surrounding areas in Florida.',
    getQuoteBtn: 'Get a Free Quote Now',
    fastService: 'Fast Service',
    fastServiceDesc: 'Quick response times and efficient project completion',
    licensedInsured: 'Licensed & Insured',
    licensedInsuredDesc: 'Fully licensed and insured for your peace of mind',
    bilingualService: 'Service in English and Portuguese',
    bilingualServiceDesc: 'Communicate comfortably in your preferred language',
    
    // Services
    servicesTitle: 'Our Professional Services',
    servicesSubtitle: 'Comprehensive commercial renovation and maintenance solutions',
    flooringTitle: 'Flooring Installation',
    flooringDesc: 'Professional vinyl, tile, and commercial flooring installation for retail spaces and offices.',
    paintingTitle: 'Painting Services',
    paintingDesc: 'Interior and exterior painting with premium materials and expert craftsmanship.',
    electricalTitle: 'Electrical Services',
    electricalDesc: 'Licensed electrical work including panel upgrades, wiring, and commercial installations.',
    drywallTitle: 'Drywall Services',
    drywallDesc: 'Professional drywall installation, repair, and finishing for commercial spaces.',
    maintenanceTitle: 'Commercial Maintenance',
    maintenanceDesc: 'Ongoing maintenance services to keep your commercial property in top condition.',
    remodelingTitle: 'Remodeling',
    remodelingDesc: 'Complete commercial space renovations and remodeling projects.',
    boardUpTitle: 'Board Up Services',
    boardUpDesc: 'Emergency board up services for property protection and security.',
    signsTitle: 'Signs Installation',
    signsDesc: 'Professional sign installation and maintenance for commercial properties.',
    
    // About
    aboutTitle: 'About Marcopolo USA Group Corp',
    aboutSubtitle: 'A Brazilian-led family company with real experience in the U.S.',
    aboutText1: 'We know how hard it is to find reliable contractors. That\'s why we treat your space like it\'s our own.',
    aboutText2: 'Founded by a Brazilian family with deep roots in construction and renovation, Marcopolo USA Group Corp brings years of experience and a commitment to excellence to every project.',
    aboutText3: 'Our team combines traditional craftsmanship with modern techniques to deliver outstanding results for commercial properties throughout Orlando and Central Florida.',
    
    // Testimonials
    testimonialsTitle: 'What Our Clients Say',
    testimonialsSubtitle: 'Real reviews from satisfied customers',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Ready to start your project? Contact us today for a free quote.',
    contactForm: 'Contact Form',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    sendMessage: 'Send Message',
    contactInfo: 'Contact Information',
    hours: 'Hours of Operation',
    mondayFriday: 'Monday - Friday: 7:00 AM - 6:00 PM',
    saturday: 'Saturday: 8:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    whatsappMessage: 'Hi, I\'d like to request a quote',
    
    // Footer
    footerTagline: 'Professional commercial renovations and building maintenance in Orlando, Florida.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',

    // Service Detail Page specific (can be expanded)
    contactFormTitle: 'Request a Free Quote',
    contactFormSubtitle: 'Tell us about your project needs.',
  },
  pt: {
    // Navigation
    home: 'Início',
    services: 'Serviços',
    about: 'Sobre Nós',
    testimonials: 'Depoimentos',
    contact: 'Contato',
    
    // Home Page
    heroTitle: 'Construímos Confiança. Renovamos com Excelência.',
    heroSubtitle: 'Renovações comerciais profissionais e manutenção predial em Orlando e regiões vizinhas na Flórida.',
    getQuoteBtn: 'Solicite um Orçamento Gratuito',
    fastService: 'Serviço Rápido',
    fastServiceDesc: 'Tempos de resposta rápidos e conclusão eficiente de projetos',
    licensedInsured: 'Licenciado e Segurado',
    licensedInsuredDesc: 'Totalmente licenciado e segurado para sua tranquilidade',
    bilingualService: 'Atendimento em Inglês e Português',
    bilingualServiceDesc: 'Comunique-se confortavelmente no seu idioma preferido',
    
    // Services
    servicesTitle: 'Nossos Serviços Profissionais',
    servicesSubtitle: 'Soluções abrangentes de renovação e manutenção comercial',
    flooringTitle: 'Instalação de Pisos',
    flooringDesc: 'Instalação profissional de vinil, azulejo e pisos comerciais para espaços comerciais e escritórios.',
    paintingTitle: 'Serviços de Pintura',
    paintingDesc: 'Pintura interna e externa com materiais premium e artesanato especializado.',
    electricalTitle: 'Serviços Elétricos',
    electricalDesc: 'Trabalho elétrico licenciado incluindo upgrades de painéis, fiação e instalações comerciais.',
    drywallTitle: 'Serviços de Drywall',
    drywallDesc: 'Instalação, reparo e acabamento profissional de drywall para espaços comerciais.',
    maintenanceTitle: 'Manutenção Comercial',
    maintenanceDesc: 'Serviços de manutenção contínua para manter sua propriedade comercial em ótimas condições.',
    remodelingTitle: 'Remodelação',
    remodelingDesc: 'Renovações completas de espaços comerciais e projetos de remodelação.',
    boardUpTitle: 'Serviços de Proteção',
    boardUpDesc: 'Serviços de proteção de emergência para proteção e segurança da propriedade.',
    signsTitle: 'Instalação de Placas',
    signsDesc: 'Instalação e manutenção profissional de placas para propriedades comerciais.',
    
    // About
    aboutTitle: 'Sobre a Marcopolo USA Group Corp',
    aboutSubtitle: 'Uma empresa familiar brasileira com experiência real nos EUA.',
    aboutText1: 'Sabemos como é difícil encontrar empreiteiros confiáveis. É por isso que tratamos seu espaço como se fosse nosso.',
    aboutText2: 'Fundada por uma família brasileira com raízes profundas na construção e renovação, a Marcopolo USA Group Corp traz anos de experiência e compromisso com a excelência para cada projeto.',
    aboutText3: 'Nossa equipe combina artesanato tradicional com técnicas modernas para entregar resultados excepcionais para propriedades comerciais em Orlando e Central Florida.',
    
    // Testimonials
    testimonialsTitle: 'O Que Nossos Clientes Dizem',
    testimonialsSubtitle: 'Avaliações reais de clientes satisfeitos',
    
    // Contact
    contactTitle: 'Entre em Contato',
    contactSubtitle: 'Pronto para começar seu projeto? Entre em contato hoje para um orçamento gratuito.',
    contactForm: 'Formulário de Contato',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefone',
    message: 'Mensagem',
    sendMessage: 'Enviar Mensagem',
    contactInfo: 'Informações de Contato',
    hours: 'Horário de Funcionamento',
    mondayFriday: 'Segunda - Sexta: 7:00 - 18:00',
    saturday: 'Sábado: 8:00 - 16:00',
    sunday: 'Domingo: Fechado',
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento',
    
    // Footer
    footerTagline: 'Renovações comerciais profissionais e manutenção predial em Orlando, Flórida.',
    quickLinks: 'Links Rápidos',
    followUs: 'Siga-nos',
    allRightsReserved: 'Todos os direitos reservados.',

    // Service Detail Page specific (can be expanded)
    contactFormTitle: 'Solicite um Orçamento Gratuito',
    contactFormSubtitle: 'Conte-nos sobre as necessidades do seu projeto.',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
