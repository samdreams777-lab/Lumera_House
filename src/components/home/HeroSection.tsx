import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { ViewId } from '../../types';
import { HeroCanvas3D } from '../visual/HeroCanvas3D';
import { StaggerReveal } from '../visual/StaggerReveal';
import { Calendar, ArrowRight, Grid } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface HeroSectionProps {
  onSelectView: (view: ViewId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectView }) => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section id="cover" className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-lumera-black text-white">
      {/* Full-bleed Architectural Image Backdrop */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={getAssetUrl('/photos/pexels-dropshado-31737842.jpg')}
          alt="Lumera House Architectural Monograph Cover"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.68] contrast-[1.08]"
        />
        {/* Subtle Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-lumera-black via-lumera-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Atmospheric WebGL Particle Bloom */}
      <HeroCanvas3D />

      {/* Main Cover Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-16 flex flex-col items-center">
        <StaggerReveal direction="down" delay={0.1}>
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-lumera-gold border border-lumera-gold/30 bg-black/40 backdrop-blur-md rounded-md">
            {t.hero.badge}
          </span>
        </StaggerReveal>

        {/* Photorealistic 3D Metallic Gold Title with Light & Shadow Reflections */}
        <StaggerReveal delay={0.25}>
          <h1
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-none uppercase select-none relative"
            style={{
              background: 'linear-gradient(135deg, #FFF3C4 0%, #F5D061 16%, #C69438 36%, #5E3A0F 52%, #F5D061 70%, #B38029 86%, #3B2206 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 0px #3B2206) drop-shadow(1px 4px 2px #2A1603) drop-shadow(0 14px 35px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 25px rgba(245, 208, 97, 0.4))',
            }}
          >
            LUMERA HOUSE
          </h1>
        </StaggerReveal>

        <StaggerReveal delay={0.4}>
          <p className="mt-6 font-serif italic text-lg sm:text-2xl md:text-3xl text-lumera-cream/90 font-light max-w-3xl leading-relaxed tracking-wide drop-shadow-md">
            {t.hero.title}
          </p>
        </StaggerReveal>

        {/* Cover Primary Triggers (Subtle Medium Rounded-md Buttons) */}
        <StaggerReveal delay={0.55} className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => onSelectView('stay')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-lumera-gold hover:bg-lumera-gold-hover text-lumera-black text-xs font-semibold uppercase tracking-[0.25em] rounded-md transition-all duration-300 shadow-2xl hover:scale-[1.02]"
          >
            <span>{t.hero.ctaExplore}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectView('gallery')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold uppercase tracking-[0.25em] rounded-md backdrop-blur-md transition-all duration-300"
          >
            <Grid className="w-3.5 h-3.5 text-lumera-gold" />
            <span>{t.hero.ctaGallery}</span>
          </button>

          <button
            onClick={() => openBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-black/40 hover:bg-white/15 text-white/90 border border-white/25 text-xs font-semibold uppercase tracking-[0.25em] rounded-md backdrop-blur-md transition-all duration-300"
          >
            <Calendar className="w-3.5 h-3.5 text-lumera-gold" />
            <span>{t.hero.ctaReserve}</span>
          </button>
        </StaggerReveal>
      </div>
    </section>
  );
};
