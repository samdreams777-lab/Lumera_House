import React from 'react';
import { PhotoItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../utils/assets';

interface FullscreenGalleryModalProps {
  photo: PhotoItem | null;
  photosList: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const FullscreenGalleryModal: React.FC<FullscreenGalleryModalProps> = ({
  photo,
  photosList,
  onClose,
  onSelectPhoto,
}) => {
  const { language } = useLanguage();

  if (!photo) return null;

  const currentIndex = photosList.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % photosList.length;
    onSelectPhoto(photosList[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + photosList.length) % photosList.length;
    onSelectPhoto(photosList[prevIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 select-none">
        {/* Header Bar */}
        <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-[0.25em] text-lumera-gold font-mono">
              {language === 'vi' ? `ẢNH ${currentIndex + 1} / ${photosList.length}` : `PHOTO ${currentIndex + 1} OF ${photosList.length}`}
            </span>
            <span className="text-xs text-white/40">|</span>
            <span className="text-xs uppercase tracking-wider text-white/70 px-2 py-0.5 bg-white/10 rounded">
              {photo.category.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-white/10 hover:bg-lumera-gold text-white hover:text-black rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display Area */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          <motion.img
            key={photo.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            src={getAssetUrl(photo.src)}
            alt={photo.title[language]}
            className="max-h-[75vh] max-w-full object-contain rounded-sm shadow-2xl"
          />

          {/* Nav Controls */}
          {photosList.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 p-3 bg-black/60 hover:bg-lumera-gold text-white hover:text-black rounded-full transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 p-3 bg-black/60 hover:bg-lumera-gold text-white hover:text-black rounded-full transition-colors border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Info Bar */}
        <div className="bg-lumera-dark/90 border border-white/10 p-4 md:p-6 rounded-sm max-w-4xl mx-auto w-full text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-xl font-normal text-white">
              {photo.title[language]}
            </h4>
            <p className="text-xs text-white/70 font-light mt-1">
              {photo.description[language]}
            </p>
          </div>

          <div className="text-[11px] font-mono text-white/40 flex items-center gap-3">
            <span>{language === 'vi' ? 'TẬP TIN:' : 'FILE:'} {photo.filename}</span>
            <span>{language === 'vi' ? 'HƯỚNG:' : 'ORIENT:'} {photo.orientation.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
