// 📄 src/components/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % config.photos.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + config.photos.length) % config.photos.length);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-4xl font-display text-center mb-12">Memories 📸</h2>
      
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {config.photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
            onClick={() => setSelectedIdx(idx)}
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-medium text-lg">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white" onClick={() => setSelectedIdx(null)}>
              <X size={40} />
            </button>
            <button className="absolute left-6 p-2 text-white/50 hover:text-white bg-white/10 rounded-full" onClick={handlePrev}>
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={config.photos[selectedIdx].src}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            <button className="absolute right-6 p-2 text-white/50 hover:text-white bg-white/10 rounded-full" onClick={handleNext}>
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}