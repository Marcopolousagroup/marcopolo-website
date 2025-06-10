
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImageModal = ({ selectedImage, setSelectedImage, altText }) => {
  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
                className="block max-w-full max-h-[80vh] object-contain"
                alt={altText || "Enlarged view of selected image"}
             src="https://images.unsplash.com/photo-1582177199344-a05724b6e775" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/50 hover:bg-white/80 text-gray-800 p-2 rounded-full transition-colors"
              aria-label="Close image modal"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
