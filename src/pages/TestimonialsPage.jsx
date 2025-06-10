import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsPage = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Store Manager',
      company: 'Downtown Retail Plaza',
      location: 'Orlando, FL',
      rating: 5,
      text: 'Marcopolo USA Group transformed our retail space completely. The flooring installation was flawless and they finished ahead of schedule. Their attention to detail is incredible!',
      image: 'Professional businesswoman in retail store environment',
    },
    {
      name: 'Michael Rodriguez',
      position: 'Property Manager',
      company: 'Central Florida Properties',
      location: 'Winter Park, FL',
      rating: 5,
      text: 'We\'ve worked with many contractors over the years, but Marcopolo stands out. They communicate clearly, show up on time, and their work quality is exceptional. Highly recommended!',
      image: 'Professional property manager in office setting',
    },
    {
      name: 'Lisa Chen',
      position: 'Restaurant Owner',
      company: 'Bella Vista Restaurant',
      location: 'Kissimmee, FL',
      rating: 5,
      text: 'The team renovated our entire restaurant during our closure period. They were professional, clean, and delivered exactly what we envisioned. Our customers love the new look!',
      image: 'Restaurant owner in modern renovated dining space',
    },
    {
      name: 'David Thompson',
      position: 'Office Manager',
      company: 'Tech Solutions Inc.',
      location: 'Lake Mary, FL',
      rating: 5,
      text: 'From electrical work to painting, Marcopolo handled our office renovation perfectly. The bilingual communication was a huge plus for our diverse team. Excellent service!',
      image: 'Office manager in modern corporate environment',
    },
    {
      name: 'Maria Santos',
      position: 'Clinic Administrator',
      company: 'Orlando Medical Center',
      location: 'Orlando, FL',
      rating: 5,
      text: 'They understood our need for minimal disruption during the renovation. The team worked efficiently and maintained a clean environment throughout. Very professional!',
      image: 'Medical administrator in healthcare facility',
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
              {t('testimonialsTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative"
              >
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-orange-500/20" />
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img  
                      className="w-full h-full object-cover" 
                      alt={`${testimonial.name} testimonial photo`}
                     src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-orange-500 font-medium">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Customer Satisfaction
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence shows in our results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600">Repeat Customers</div>
            </motion.div>
          </div>
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
              Join Our Happy Customers
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the quality and professionalism that our clients rave about. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;