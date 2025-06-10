import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const ServiceTestimonial = ({ testimonial }) => {
  if (!testimonial || !testimonial.quote) {
    return null;
  }

  return (
    <motion.div 
      className="my-12 md:my-16 p-8 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <Users className="w-12 h-12 text-orange-400 mb-4" />
      <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
      <p className="font-semibold">{testimonial.name}</p>
      <p className="text-sm text-blue-200">{testimonial.location}</p>
    </motion.div>
  );
};

export default ServiceTestimonial;