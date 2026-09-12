import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { ParallaxImage } from '../visual/ParallaxImage';
import { Sparkles, Waves, Trees, Flame, Shirt, ShieldCheck, Bath } from 'lucide-react';

export const AmenitiesGrid: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.amenities.item1Title,
      desc: t.amenities.item1Desc,
      icon: Waves,
      photo: '/photos/pexels-umudicreative-38183818.jpg',
    },
    {
      title: t.amenities.item2Title,
      desc: t.amenities.item2Desc,
      icon: Trees,
      photo: '/photos/pexels-quang-nguyen-vinh-222549-14025032.jpg',
    },
    {
      title: t.amenities.item3Title,
      desc: t.amenities.item3Desc,
      icon: Flame,
      photo: '/photos/pexels-misbaa-eri-426041722-36354488.jpg',
    },
    {
      title: t.amenities.item4Title,
      desc: t.amenities.item4Desc,
      icon: Shirt,
      photo: '/photos/pexels-artbovich-7535008.jpg',
    },
    {
      title: t.amenities.item5Title,
      desc: t.amenities.item5Desc,
      icon: ShieldCheck,
      photo: '/photos/pexels-misbaa-eri-426041722-36354489.jpg',
    },
    {
      title: t.amenities.item6Title,
      desc: t.amenities.item6Desc,
      icon: Bath,
      photo: '/photos/pexels-artbovich-6444967.jpg',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-lumera-dark text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <StaggerReveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-gold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t.amenities.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mt-3">
            {t.amenities.title}
          </h2>
          <p className="text-base text-white/70 font-light mt-3 leading-relaxed">
            {t.amenities.subtitle}
          </p>
        </StaggerReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <StaggerReveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="group bg-lumera-card rounded-sm overflow-hidden border border-white/10 hover:border-lumera-gold/40 transition-all duration-500 h-full flex flex-col justify-between">
                  <div className="relative overflow-hidden">
                    <ParallaxImage
                      src={item.photo}
                      alt={item.title}
                      aspectRatio="aspect-[4/3]"
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lumera-card via-black/20 to-transparent" />
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 text-lumera-gold">
                        <IconComp className="w-5 h-5 flex-shrink-0" />
                        <h3 className="font-serif text-xl font-normal text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-white/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[10px] uppercase tracking-widest text-lumera-gold/80 font-mono">
                      VERIFIED VISUAL AMENITY
                    </div>
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
