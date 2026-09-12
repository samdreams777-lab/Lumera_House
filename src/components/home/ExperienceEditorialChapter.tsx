import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { Sparkles, Bath, Trees, Flame, Shirt, Laptop, ShowerHead } from 'lucide-react';

export const ExperienceEditorialChapter: React.FC = () => {
  const { language, t } = useLanguage();

  const experiences = [
    {
      icon: Bath,
      title: { en: 'In-Room Hydrotherapy Jacuzzi', vi: 'Bồn Tắm Thủy Lực Jacuzzi Trong Phòng' },
      desc: { en: 'Sunken stone Jacuzzi tubs for therapeutic bathing overlooking scenic mountain slopes.', vi: 'Bồn Jacuzzi âm sàn bọc đá mộc mạc cho trải nghiệm thư giãn riêng tư hướng tầm nhìn núi.' },
      photo: '/photos/pexels-umudicreative-38183818.jpg',
    },
    {
      icon: Trees,
      title: { en: 'Private Garden Patio Access', vi: 'Hiên Sân Vườn Nhiệt Đới Riêng Biệt' },
      desc: { en: 'Ground-floor villa suites featuring direct sliding door access to tropical greenery.', vi: 'Căn Villa Suite tầng trệt sở hữu lối đi riêng mở thẳng ra khoảng sân vườn xanh mát.' },
      photo: '/photos/pexels-quang-nguyen-vinh-222549-14025032.jpg',
    },
    {
      icon: Flame,
      title: { en: 'Architectural Lounge & Hearth', vi: 'Sảnh Đón Tiếp & Lò Sưởi Nghệ Thuật' },
      desc: { en: 'Double-height lobby lounge featuring grid pendant lights, timber niches, and open hearth.', vi: 'Sảnh cao trần với hệ thống đèn thả nghệ thuật, ô trang trí đố gỗ và không gian sưởi ấm.' },
      photo: '/photos/pexels-misbaa-eri-426041722-36354488.jpg',
    },
    {
      icon: Shirt,
      title: { en: 'Walk-In Dressing Suites', vi: 'Hệ Thống Phòng Thay Đồ Integrated' },
      desc: { en: 'Custom walk-in closet systems with mirrored wardrobes, velvet ottomans, and track lighting.', vi: 'Hệ thống tủ phòng thay đồ mở với tủ gương, ghế đôn nhung và hệ đèn ray.' },
      photo: '/photos/pexels-artbovich-7535008.jpg',
    },
    {
      icon: Laptop,
      title: { en: 'Executive Study Consoles', vi: 'Bàn Làm Việc Executive Niche' },
      desc: { en: 'Tailored study desks with ambient backlighting, luggage benches, and power hubs.', vi: 'Góc làm việc riêng biệt với đèn hắt hậu ấm áp, kệ hành lý và cổng kết nối.' },
      photo: '/photos/pexels-khojiakbar-teshaboev-2154965416-34618647.jpg',
    },
    {
      icon: ShowerHead,
      title: { en: 'Master Marble En-Suite Baths', vi: 'Phòng Tắm Marble Travertine Cao Cấp' },
      desc: { en: 'Floor-to-ceiling grey and travertine marble with rain showers, circular halo mirrors, and double vanities.', vi: 'Phòng tắm bọc đá marble xám và travertine kịch trần với vách tắm rain shower và gương tròn hắt sáng.' },
      photo: '/photos/pexels-artbovich-6587905.jpg',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-36 bg-lumera-black text-white relative overflow-hidden border-b border-white/10">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <StaggerReveal>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-lumera-gold flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {t.ui.chapter} 03 — {t.ui.experience}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight uppercase">
              {t.amenities.title}
            </h2>
            <p className="text-base text-lumera-cream/70 font-light mt-4 leading-relaxed">
              {t.amenities.subtitle}
            </p>
          </StaggerReveal>
        </div>

        {/* Editorial Photo-Text Experience Grid (2 Columns desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {experiences.map((exp, idx) => {
            const IconComp = exp.icon;

            return (
              <StaggerReveal key={idx} delay={0.1 * (idx % 2)}>
                <div className="group space-y-5 p-6 rounded-md bg-white/[0.02] border border-white/10 hover:border-lumera-gold/40 transition-all duration-500">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-lumera-dark">
                    <img
                      src={exp.photo}
                      alt={exp.title[language]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 z-20">
                      <span className="p-2.5 bg-black/70 backdrop-blur-md rounded-full text-lumera-gold border border-white/20 inline-block">
                        <IconComp className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-white group-hover:text-lumera-gold transition-colors duration-300">
                      {exp.title[language]}
                    </h3>
                    <p className="text-xs md:text-sm text-lumera-cream/75 font-light leading-relaxed">
                      {exp.desc[language]}
                    </p>
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
