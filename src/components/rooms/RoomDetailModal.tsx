import React, { useState } from 'react';
import { Room } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { X, Check, Calendar, Info, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../utils/assets';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const { language, t } = useLanguage();
  const { openBooking } = useBooking();
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!room) return null;

  const activePhoto = room.galleryPhotos[activePhotoIdx] || room.heroPhoto;

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % room.galleryPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + room.galleryPhotos.length) % room.galleryPhotos.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-lumera-dark text-white w-full max-w-5xl rounded-sm overflow-hidden shadow-2xl border border-white/10 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-lumera-gold text-white hover:text-black rounded-full transition-colors border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Gallery Viewport Side (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-black relative flex flex-col justify-between min-h-[350px] lg:min-h-[500px]">
              <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden">
                <img
                  src={getAssetUrl(activePhoto)}
                  alt={room.name[language]}
                  className="w-full h-full object-cover max-h-[500px]"
                />
                
                {/* Photo Navigation Overlay */}
                {room.galleryPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-3 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-3 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Photo Thumbnails */}
              {room.galleryPhotos.length > 1 && (
                <div className="p-4 bg-lumera-black/90 flex gap-2 overflow-x-auto border-t border-white/10">
                  {room.galleryPhotos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative w-16 h-12 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                        idx === activePhotoIdx ? 'border-lumera-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={getAssetUrl(photo)} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Side (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-lumera-dark">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lumera-gold px-2.5 py-1 bg-white/5 rounded border border-white/10">
                    {room.wingId.toUpperCase()} {t.ui.wing}
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-white mt-3">
                    {room.name[language]}
                  </h3>
                  <p className="text-xs text-lumera-gold/90 font-mono mt-1">
                    {room.subtitle[language]}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
                  {room.description[language]}
                </p>

                {/* Rates Notice Card */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-lumera-gold">
                    <Info className="w-4 h-4" />
                    <span>{t.rooms.rateNotice}</span>
                  </div>
                  <p className="text-[11px] text-white/60">
                    {language === 'vi'
                      ? 'Giá phòng chính xác, thông tin di chuyển tùy chỉnh và lịch phòng trống được cung cấp khi gửi yêu cầu.'
                      : 'Exact stay rates, customized arrival options, and room availability are provided upon personal enquiry.'}
                  </p>
                </div>

                {/* Confirmed Amenities List */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
                    {t.roomModal.featuresTitle}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    {room.features[language].map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-lumera-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bedding Setup */}
                <div className="pt-2 text-xs text-white/70 border-t border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-white">{t.rooms.bedLabel}</span>
                  <span className="text-lumera-gold">{room.bedType[language]}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    openBooking(room.id);
                  }}
                  className="w-full py-3.5 bg-lumera-gold hover:bg-lumera-gold-hover text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.roomModal.reserveThisRoom}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
