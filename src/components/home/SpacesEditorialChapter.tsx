import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { Compass, Sparkles } from 'lucide-react';

export const SpacesEditorialChapter: React.FC = () => {
  const { language, t } = useLanguage();

  const spaces = [
    {
      num: '01',
      title: { en: 'Alpine Stone Chalet Wing', vi: 'Phân Khu Alpine Stone Chalet' },
      subtitle: { en: 'Hand-Cut Stone Masonry & Hydrotherapy', vi: 'Đá Tự Nhiên Chế Tác & Thủy Lực' },
      desc: {
        en: 'Framed by exposed natural masonry and heavy vaulted timber beams, the Alpine Stone Chalet Wing offers high-altitude sanctuary living with in-room sunken Jacuzzis and panoramic mountain window views.',
        vi: 'Không gian tôn vinh mảng tường đá tự nhiên và trần dầm gỗ mộc mạc, trang bị bồn Jacuzzi thủy lực âm sàn và khung cửa sổ ngắm toàn cảnh núi.',
      },
      image: '/photos/pexels-umudicreative-38183824.jpg',
      material: 'RAW STONE & TIMBER',
    },
    {
      num: '02',
      title: { en: 'Tropical Garden Villa Wing', vi: 'Phân Khu Tropical Garden Villa' },
      subtitle: { en: 'Teak Paneling & Bamboo Craft', vi: 'Gỗ Teak Tự Nhiên & Mây Tre Đan' },
      desc: {
        en: 'Rooted in tropical serenity, the Garden Villa Wing features rich teak wall paneling, woven bamboo pendant lamps, and direct sliding door access onto private lush garden patios.',
        vi: 'Sở hữu tinh thần nghỉ dưỡng nhiệt đới, các căn Villa Suite bọc gỗ teak ấm áp, đèn mây tre thủ công và cửa trượt mở ra hiên sân vườn xanh mát.',
      },
      image: '/photos/pexels-quang-nguyen-vinh-222549-14025032.jpg',
      material: 'TEAK & BAMBOO',
    },
    {
      num: '03',
      title: { en: 'Urban Loft Studio Wing', vi: 'Phân Khu Urban Loft Studio' },
      subtitle: { en: 'Contemporary Open-Plan & Dressing Systems', vi: 'Kiến Trúc Mở & Phòng Thay Đồ' },
      desc: {
        en: 'Embodying metropolitan quiet luxury, the Urban Loft Wing showcases integrated walk-in closet dressing suites, houndstooth armchairs, and floor-to-ceiling city window backdrops.',
        vi: 'Thể hiện phong cách quiet luxury thành thị, phân khu Urban Loft nổi bật với phòng thay đồ integrated, ghế bành houndstooth và rèm kính cao kịch trần.',
      },
      image: '/photos/pexels-artbovich-7535013.jpg',
      material: 'MARBLE & GLASS',
    },
  ];

  return (
    <section id="spaces" className="py-24 md:py-36 bg-lumera-cream text-lumera-black relative overflow-hidden border-b border-lumera-sand">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <StaggerReveal>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-lumera-terracotta flex items-center gap-2 mb-3">
              <Compass className="w-3.5 h-3.5" />
              {t.ui.chapter} 02 — {t.ui.spaces}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-lumera-black tracking-tight uppercase">
              {language === 'vi' ? 'Sự Giao Thoa Vật Liệu' : 'Material Convergence'}
            </h2>
            <p className="text-base text-lumera-stone font-light mt-4 leading-relaxed">
              {t.wings.subtitle}
            </p>
          </StaggerReveal>
        </div>

        {/* Editorial Spaces Sequence */}
        <div className="space-y-28">
          {spaces.map((spc, idx) => (
            <div key={spc.num} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Spread (7 columns desktop) */}
              <div className={`lg:col-span-7 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <StaggerReveal delay={0.1}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-lumera-dark shadow-2xl">
                    <img
                      src={spc.image}
                      alt={spc.title[language]}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter brightness-[0.95] hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-lumera-gold text-[10px] font-mono uppercase tracking-widest border border-white/10 rounded-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> {spc.material}
                      </span>
                    </div>
                  </div>
                </StaggerReveal>
              </div>

              {/* Text Narrative (5 columns desktop) */}
              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <StaggerReveal delay={0.25}>
                  <span className="font-mono text-xs text-lumera-terracotta font-semibold tracking-widest uppercase">
                    {t.ui.wing} {spc.num}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-lumera-black tracking-tight mt-1">
                    {spc.title[language]}
                  </h3>
                  <p className="font-serif italic text-base text-lumera-stone font-light pt-1">
                    {spc.subtitle[language]}
                  </p>

                  <p className="text-sm md:text-base text-lumera-stone font-light leading-relaxed mt-4">
                    {spc.desc[language]}
                  </p>
                </StaggerReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
