import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { ParallaxImage } from '../visual/ParallaxImage';

export const BrandPhilosophy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-lumera-cream text-lumera-black overflow-hidden relative border-b border-lumera-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <StaggerReveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-terracotta">
                {t.philosophy.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-lumera-black tracking-tight mt-3 leading-[1.15]">
                {t.philosophy.title}
              </h2>
            </StaggerReveal>

            <StaggerReveal delay={0.2}>
              <p className="text-base text-lumera-stone font-light leading-relaxed">
                {t.philosophy.text1}
              </p>
            </StaggerReveal>

            <StaggerReveal delay={0.3}>
              <p className="text-base text-lumera-stone font-light leading-relaxed">
                {t.philosophy.text2}
              </p>
            </StaggerReveal>

            {/* Quiet Luxury Metrics */}
            <StaggerReveal delay={0.4} className="pt-4 grid grid-cols-3 gap-6 border-t border-lumera-sand">
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-lumera-black">
                  {t.philosophy.stat1Val}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-lumera-stone mt-1 block">
                  {t.philosophy.stat1Label}
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-lumera-black">
                  {t.philosophy.stat2Val}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-lumera-stone mt-1 block">
                  {t.philosophy.stat2Label}
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl md:text-3xl text-lumera-black">
                  {t.philosophy.stat3Val}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-lumera-stone mt-1 block">
                  {t.philosophy.stat3Label}
                </span>
              </div>
            </StaggerReveal>
          </div>

          {/* Editorial Asymmetric Image Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-7">
                <ParallaxImage
                  src="/photos/pexels-dropshado-31737861.jpg"
                  alt="Lumera Timber Portal Night Entrance"
                  containerClassName="rounded-sm shadow-2xl"
                  aspectRatio="aspect-[3/4]"
                />
              </div>
              <div className="col-span-5 space-y-4">
                <ParallaxImage
                  src="/photos/pexels-misbaa-eri-426041722-36354488.jpg"
                  alt="Architectural Lobby Lounge"
                  containerClassName="rounded-sm shadow-xl"
                  aspectRatio="aspect-[4/5]"
                />
                <div className="p-4 bg-lumera-sand rounded-sm border border-lumera-taupe/40 text-xs text-lumera-stone font-serif italic">
                  "Light, texture, and silence defined through raw materials."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
