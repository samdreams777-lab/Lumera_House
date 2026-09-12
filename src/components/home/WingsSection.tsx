import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { ParallaxImage } from '../visual/ParallaxImage';
import { Layers, Mountain, Trees, Building2 } from 'lucide-react';

export const WingsSection: React.FC = () => {
  const { t } = useLanguage();

  const wings = [
    {
      id: 'stone',
      title: t.wings.stoneWing.title,
      desc: t.wings.stoneWing.desc,
      tag: t.wings.stoneWing.tag,
      icon: Mountain,
      image: '/photos/pexels-umudicreative-38183818.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'garden',
      title: t.wings.gardenWing.title,
      desc: t.wings.gardenWing.desc,
      tag: t.wings.gardenWing.tag,
      icon: Trees,
      image: '/photos/pexels-quang-nguyen-vinh-222549-14025024.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'urban',
      title: t.wings.urbanWing.title,
      desc: t.wings.urbanWing.desc,
      tag: t.wings.urbanWing.tag,
      icon: Building2,
      image: '/photos/pexels-artbovich-7535007.jpg',
      aspect: 'aspect-[16/10]',
    },
  ];

  return (
    <section id="wings" className="py-24 md:py-32 bg-lumera-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <StaggerReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-gold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              {t.wings.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mt-3">
              {t.wings.title}
            </h2>
            <p className="text-base text-white/70 font-light mt-4 leading-relaxed">
              {t.wings.subtitle}
            </p>
          </StaggerReveal>
        </div>

        {/* Wings Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {wings.map((wing, idx) => {
            const IconComp = wing.icon;
            return (
              <StaggerReveal key={wing.id} delay={0.2 * (idx + 1)}>
                <div className="group relative bg-lumera-card rounded-sm overflow-hidden border border-white/10 hover:border-lumera-gold/40 transition-all duration-500 flex flex-col h-full">
                  {/* Image Header */}
                  <div className="relative overflow-hidden">
                    <ParallaxImage
                      src={wing.image}
                      alt={wing.title}
                      aspectRatio={wing.aspect}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lumera-card via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-lumera-gold border border-lumera-gold/30 rounded-sm">
                      {wing.tag}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded text-lumera-gold border border-white/10">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-2xl font-normal text-white group-hover:text-lumera-gold transition-colors">
                          {wing.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                        {wing.desc}
                      </p>
                    </div>

                    <a
                      href="#rooms"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lumera-gold font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Wing Accommodations</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
