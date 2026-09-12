import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { MapPin, ShieldCheck, Car, Mountain, Calendar } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

export const LocationSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section id="location" className="py-24 md:py-32 bg-lumera-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Information */}
          <div className="lg:col-span-6 space-y-8">
            <StaggerReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-gold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                {t.location.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mt-3">
                {t.location.title}
              </h2>
              <p className="text-base text-white/70 font-light mt-3 leading-relaxed">
                {t.location.subtitle}
              </p>
            </StaggerReveal>

            <StaggerReveal delay={0.2} className="p-6 bg-white/5 border border-white/10 rounded-md space-y-3">
              <div className="flex items-center gap-3 text-lumera-gold font-semibold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>{language === 'vi' ? 'Chính Sách Bảo Mật Riêng Tư' : 'Sanctuary Privacy Policy'}</span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                {t.location.privacyNote}
              </p>
            </StaggerReveal>

            <StaggerReveal delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-lumera-card rounded-md border border-white/10 space-y-2">
                <Car className="w-5 h-5 text-lumera-gold" />
                <h4 className="font-serif text-lg font-normal text-white">{t.location.transferTitle}</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">{t.location.transferDesc}</p>
              </div>

              <div className="p-5 bg-lumera-card rounded-md border border-white/10 space-y-2">
                <Mountain className="w-5 h-5 text-lumera-gold" />
                <h4 className="font-serif text-lg font-normal text-white">{t.location.natureTitle}</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">{t.location.natureDesc}</p>
              </div>
            </StaggerReveal>

            <StaggerReveal delay={0.4}>
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center gap-3 px-8 py-4 bg-lumera-gold hover:bg-lumera-gold-hover text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-md transition-all shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.ctaReserve}</span>
              </button>
            </StaggerReveal>
          </div>

          {/* Exterior Visual Cards */}
          <div className="lg:col-span-6 space-y-4">
            <StaggerReveal delay={0.2}>
              <div className="relative rounded-md overflow-hidden shadow-2xl aspect-[16/10] border border-white/10">
                <img
                  src={getAssetUrl('/photos/pexels-dropshado-31737859.jpg')}
                  alt="Lumera Night Courtyard Lawn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-serif text-white">{language === 'vi' ? 'Khuôn Viên Sân Vườn & Chiếu Sáng Đêm' : 'Private Lawn & Night Lighting'}</span>
                </div>
              </div>
            </StaggerReveal>

            <StaggerReveal delay={0.3} className="grid grid-cols-2 gap-4">
              <div className="relative rounded-md overflow-hidden shadow-xl aspect-[4/3] border border-white/10">
                <img
                  src={getAssetUrl('/photos/pexels-dropshado-31737860.jpg')}
                  alt="Vertical Facade View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-md overflow-hidden shadow-xl aspect-[4/3] border border-white/10">
                <img
                  src={getAssetUrl('/photos/pexels-dropshado-31737862.jpg')}
                  alt="Entrance Arrival Steps"
                  className="w-full h-full object-cover"
                />
              </div>
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
