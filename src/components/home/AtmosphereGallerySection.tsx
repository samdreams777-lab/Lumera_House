import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../../content/gallery';
import { PhotoItem, CategoryId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { FullscreenGalleryModal } from '../gallery/FullscreenGalleryModal';
import { Camera, Maximize2, Sparkles, Layers, ArrowUpRight, Grid, X } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

interface IndexChapter {
  id: CategoryId;
  num: string;
  name: { en: string; vi: string };
  count: number;
  coverPhoto: string;
  desc: { en: string; vi: string };
}

export const AtmosphereGallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeChapterId, setActiveChapterId] = useState<CategoryId | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [hoveredIndexKey, setHoveredIndexKey] = useState<string | null>(null);

  const indexChapters: IndexChapter[] = [
    {
      id: 'lobby',
      num: '01',
      name: { en: 'Lobby & Lounge', vi: 'Sảnh & Lounge' },
      count: 7,
      coverPhoto: '/photos/pexels-misbaa-eri-426041722-36354488.jpg',
      desc: { en: 'Architectural dusk facade, courtyard lawn, timber entrance portal & hearth lounge.', vi: 'Mặt tiền kiến trúc lúc hoàng hôn, thảm cỏ sân trong, cổng vào bằng gỗ và không gian lounge bên khu vực sưởi.' },
    },
    {
      id: 'stone',
      num: '02',
      name: { en: 'Stone Suites', vi: 'Stone Suites' },
      count: 6,
      coverPhoto: '/photos/pexels-umudicreative-38183818.jpg',
      desc: { en: 'Exposed natural stone masonry, vaulted timber beams & in-room hydrotherapy Jacuzzis.', vi: 'Tường đá tự nhiên nguyên bản, hệ xà gỗ vòm và bồn Jacuzzi thủy liệu pháp riêng trong phòng.' },
    },
    {
      id: 'suites',
      num: '03',
      name: { en: 'Garden Suites', vi: 'Garden Suites' },
      count: 6,
      coverPhoto: '/photos/pexels-quang-nguyen-vinh-222549-14025024.jpg',
      desc: { en: 'Teak timber wall paneling, handcrafted bamboo pendant lamps & private patio access.', vi: 'Hệ ốp tường gỗ teak, đèn tre thủ công và lối đi riêng ra sân vườn.' },
    },
    {
      id: 'urban',
      num: '04',
      name: { en: 'Urban Loft', vi: 'Urban Loft' },
      count: 4,
      coverPhoto: '/photos/pexels-khojiakbar-teshaboev-2154965416-34559240.jpg',
      desc: { en: 'Contemporary city-view studios, houndstooth armchairs & floor-to-ceiling drapery.', vi: 'Không gian đương đại hướng thành phố, ghế bành họa tiết houndstooth và rèm cửa cao từ sàn đến trần.' },
    },
    {
      id: 'bedroom',
      num: '05',
      name: { en: 'Bedrooms', vi: 'Phòng ngủ' },
      count: 5,
      coverPhoto: '/photos/pexels-artbovich-7535007.jpg',
      desc: { en: 'Master bedrooms, open wardrobe dressing systems & high vaulted ceiling twin layouts.', vi: 'Phòng ngủ chính, hệ tủ dressing mở và bố trí giường đôi dưới những trần cao dạng vòm.' },
    },
    {
      id: 'bathrooms',
      num: '06',
      name: { en: 'Bathrooms', vi: 'Phòng tắm' },
      count: 4,
      coverPhoto: '/photos/pexels-artbovich-6587905.jpg',
      desc: { en: 'Grey marble tiles, circular halo mirrors, travertine double vanities & rain showers.', vi: 'Đá marble xám, gương halo tròn, bàn lavabo đôi bằng travertine và vòi sen mưa.' },
    },
  ];

  const activeChapterObj = indexChapters.find((c) => c.id === activeChapterId);
  const activePhotos = activeChapterId
    ? GALLERY_PHOTOS.filter((p) => p.category === activeChapterId)
    : [];

  return (
    <section id="gallery" className="py-24 md:py-36 bg-lumera-cream text-lumera-black relative overflow-hidden border-b border-lumera-sand">
      {/* Decorative Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-lumera-sand/60 pb-8">
          <StaggerReveal className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-lumera-terracotta flex items-center gap-2 mb-3">
              <Camera className="w-3.5 h-3.5" />
              {t.ui.chapter} 04 — {t.gallery.tag}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-lumera-black tracking-tight uppercase">
              {t.gallery.title}
            </h2>
            <p className="text-base text-lumera-stone font-light mt-3 leading-relaxed">
              {t.gallery.subtitle}
            </p>
          </StaggerReveal>

          {activeChapterId && (
            <StaggerReveal delay={0.2}>
              <button
                onClick={() => setActiveChapterId(null)}
                className="px-4 py-2 bg-lumera-black text-lumera-cream text-xs font-mono uppercase tracking-widest rounded-md shadow-md flex items-center gap-2 hover:bg-lumera-terracotta transition-colors duration-300"
              >
                <X className="w-3.5 h-3.5 text-lumera-gold" />
                <span>{t.ui.returnCovers}</span>
              </button>
            </StaggerReveal>
          )}
        </div>

        {/* MODE A: 6 VISUAL INDEX COVERS LANDING GRID */}
        {!activeChapterId ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indexChapters.map((chap, idx) => (
              <StaggerReveal key={chap.id} delay={0.06 * idx}>
                <div
                  onClick={() => setActiveChapterId(chap.id)}
                  className="group relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer bg-lumera-dark shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 ring-1 ring-black/10"
                >
                  <img
                    src={getAssetUrl(chap.coverPhoto)}
                    alt={chap.name[language]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out filter brightness-[0.85] group-hover:brightness-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
                    <span className="font-mono text-xs text-lumera-gold tracking-widest font-semibold uppercase px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md border border-white/10">
                      {t.ui.chapter} {chap.num}
                    </span>
                    <span className="font-mono text-[10px] text-white/90 tracking-widest uppercase px-2.5 py-1 bg-lumera-gold/90 text-black font-semibold rounded-md">
                      {chap.count} {t.ui.photographs}
                    </span>
                  </div>

                  {/* Bottom Text Narrative */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 space-y-2">
                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-white group-hover:text-lumera-gold transition-colors duration-300">
                      {chap.name[language]}
                    </h3>
                    <p className="text-xs text-lumera-cream/80 font-light line-clamp-2 leading-relaxed">
                      {chap.desc[language]}
                    </p>

                    <div className="pt-3 flex items-center justify-between text-[10px] font-mono text-lumera-gold uppercase tracking-widest border-t border-white/15">
                      <span>{t.ui.openChapter} {chap.num}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </StaggerReveal>
            ))}
          </div>
        ) : (
          /* MODE B: DEDICATED VISUAL CHAPTER FOCUS CARDS GRID */
          <div className="space-y-8 animate-fadeIn">
            {/* Active Chapter Sub-Header */}
            <div className="bg-lumera-black text-white p-6 md:p-8 rounded-md flex flex-col md:flex-row md:items-end justify-between gap-6 border border-lumera-gold/30 shadow-2xl">
              <div className="space-y-2">
                <span className="font-mono text-xs text-lumera-gold tracking-widest uppercase flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-lumera-gold" /> {t.ui.chapter} {activeChapterObj?.num} • {t.ui.activeCollection}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-normal text-white">
                  {activeChapterObj?.name[language]}
                </h3>
                <p className="text-xs md:text-sm text-lumera-cream/80 font-light leading-relaxed max-w-2xl">
                  {activeChapterObj?.desc[language]}
                </p>
              </div>

              <div className="shrink-0 font-mono text-xs text-lumera-gold uppercase tracking-widest bg-white/10 px-4 py-2 border border-white/15 rounded-md">
                {activePhotos.length} {t.ui.auditedPhotographs}
              </div>
            </div>

            {/* Focus Cards Interactive Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              onMouseLeave={() => setHoveredIndexKey(null)}
            >
              {activePhotos.map((photo, idx) => {
                const itemKey = `${photo.id}`;
                const isHovered = hoveredIndexKey === itemKey;
                const isAnyHovered = hoveredIndexKey !== null;

                return (
                  <StaggerReveal key={photo.id} delay={0.04 * idx}>
                    <div
                      onMouseEnter={() => setHoveredIndexKey(itemKey)}
                      onClick={() => setSelectedPhoto(photo)}
                      className={`group relative rounded-md overflow-hidden cursor-pointer transition-all duration-500 ease-out transform ${
                        isHovered
                          ? 'scale-[1.025] z-20 shadow-2xl ring-2 ring-lumera-gold/70 brightness-105'
                          : isAnyHovered
                          ? 'scale-[0.975] opacity-45 blur-[2.5px] grayscale-[25%] z-0'
                          : 'scale-100 opacity-100 shadow-md hover:shadow-xl z-10'
                      }`}
                      style={{ willChange: 'transform, filter, opacity' }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-lumera-dark">
                        <img
                          src={getAssetUrl(photo.src)}
                          alt={photo.title[language]}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                        />

                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isHovered
                            ? 'bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-100'
                            : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80'
                        }`} />

                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                          {photo.heroQuality && (
                            <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-lumera-gold/90 text-black font-semibold rounded-md shadow-sm flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" /> {t.ui.coreAsset}
                            </span>
                          )}
                          <button
                            aria-label="Expand Photo"
                            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                              isHovered 
                                ? 'bg-lumera-gold text-black scale-110 shadow-lg ring-1 ring-white' 
                                : 'bg-black/40 text-white/80 border border-white/20'
                            }`}
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-md text-lumera-cream border border-white/10 rounded-md">
                            {photo.category}
                          </span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end transform transition-transform duration-300">
                          <h4 className={`font-serif text-lg md:text-xl font-normal text-white transition-all duration-300 ${
                            isHovered ? 'text-lumera-gold translate-y-0' : 'translate-y-1'
                          }`}>
                            {photo.title[language]}
                          </h4>
                          
                          <p className={`text-xs text-lumera-cream/80 font-light mt-1.5 line-clamp-2 leading-relaxed transition-all duration-300 ${
                            isHovered ? 'opacity-100 max-h-16 translate-y-0' : 'opacity-0 max-h-0 translate-y-2 pointer-events-none'
                          }`}>
                            {photo.description[language]}
                          </p>

                          <div className={`mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-lumera-gold/90 uppercase tracking-wider transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <span>{t.ui.clickHiRes}</span>
                            <span>{photo.orientation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerReveal>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <FullscreenGalleryModal
        photo={selectedPhoto}
        photosList={activePhotos.length > 0 ? activePhotos : GALLERY_PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(p) => setSelectedPhoto(p)}
      />
    </section>
  );
};
