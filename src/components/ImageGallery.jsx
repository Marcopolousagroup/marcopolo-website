
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">No images available in this gallery yet.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 group bg-gray-200"
            onClick={() => setSelectedImage(image.src)}
            whileHover={{ scale: 1.05 }}
            layoutId={`image-${index}-${image.alt}`}
          >
            <img 
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              alt={image.alt || `Gallery image ${index + 1}`}
             src="https://images.unsplash.com/photo-1650371212637-f245fd18b1d9" />
          </motion.div>
        ))}
      </div>
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} altText={selectedImage ? images.find(img => img.src === selectedImage)?.alt : 'Enlarged view'} />
    </>
  );
};

export default ImageGallery;
