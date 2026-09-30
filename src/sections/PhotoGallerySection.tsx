import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { BIRTHDAY_CONFIG, GalleryPhoto } from '../data/birthdayConfig';
import { getAssetUrl } from '../utils/assetPath';

export const PhotoGallerySection: React.FC = () => {
  const photos: GalleryPhoto[] = BIRTHDAY_CONFIG.gallery.photos;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + photos.length) % photos.length);
  };

  const activePhoto = activePhotoIndex !== null ? photos[activePhotoIndex] : null;

  return (
    <section id="gallery" className="relative min-h-screen py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-300/30 text-xs sm:text-sm text-pink-200">
            <Camera className="w-3.5 h-3.5 text-romantic-400" />
            <span>{BIRTHDAY_CONFIG.gallery.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {BIRTHDAY_CONFIG.gallery.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-lg mx-auto">
            {BIRTHDAY_CONFIG.gallery.subtitle}
          </p>
        </motion.div>

        {/* Polaroid Memory Wall Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {photos.map((photo, index) => {
            const rotationClass = photo.rotation || (index % 2 === 0 ? '-rotate-2' : 'rotate-2');

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex justify-center"
              >
                <div
                  onClick={() => openLightbox(index)}
                  className={`group relative cursor-pointer bg-cream-50 dark:bg-[#1E1225] p-3 pb-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-glow-pink border border-white/20 w-full max-w-[280px] sm:max-w-none transform ${rotationClass} hover:rotate-0`}
                >
                  {/* Decorative Washi Tape on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/70 dark:bg-pink-400/30 backdrop-blur-sm transform -rotate-1 rounded-sm shadow-sm border border-white/40 pointer-events-none" />

                  {/* Photo Container */}
                  <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-velvet-900 relative shadow-inner">
                    <img
                      src={getAssetUrl(photo.url)}
                      alt={photo.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = getAssetUrl('photos/photo1.jpg');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <Heart className="w-3 h-3 text-romantic-400 fill-romantic-400" />
                        <span>View Photo</span>
                      </span>
                    </div>
                  </div>

                  {/* Polaroid Handwritten Caption */}
                  <div className="pt-3 px-1 text-center">
                    <p className="font-handwriting text-xl sm:text-2xl text-velvet-950 dark:text-cream-100 font-bold tracking-wide">
                      {photo.caption}
                    </p>
                    {photo.date && (
                      <p className="text-[10px] text-romantic-600 dark:text-romantic-300 font-sans uppercase tracking-widest mt-0.5">
                        {photo.date}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              key={activePhoto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-h-[70vh]">
                <img
                  src={getAssetUrl(activePhoto.url)}
                  alt={activePhoto.caption}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center space-y-1">
                <p className="font-handwriting text-3xl sm:text-4xl text-romantic-200 font-bold">
                  {activePhoto.caption}
                </p>
                {activePhoto.date && (
                  <p className="text-xs text-cream-300/80 font-sans tracking-widest uppercase">
                    {activePhoto.date} • Photo {activePhotoIndex! + 1} of {photos.length}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
