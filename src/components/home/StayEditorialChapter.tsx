import React, { useState } from 'react';
import { ROOMS_DATA } from '../../content/rooms';
import { Room } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { RoomDetailModal } from '../rooms/RoomDetailModal';
import { ArrowUpRight, Sparkles, Bed, Layers, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

export const StayEditorialChapter: React.FC = () => {
  const { language, t } = useLanguage();
  const { openBooking } = useBooking();
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const [selectedModalRoom, setSelectedModalRoom] = useState<Room | null>(null);

  const roomNav = [
    { num: '01', key: 'STONE', name: ROOMS_DATA[0].name[language] },
    { num: '02', key: 'GARDEN', name: ROOMS_DATA[1].name[language] },
    { num: '03', key: 'URBAN', name: ROOMS_DATA[2].name[language] },
    { num: '04', key: 'SANCTUARY', name: ROOMS_DATA[3].name[language] },
  ];

  return (
    <section id="stay" className="py-24 md:py-36 bg-lumera-black text-white relative overflow-hidden border-b border-white/10">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/15 pb-8">
          <StaggerReveal className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-lumera-gold flex items-center gap-2 mb-3">
              <Layers className="w-3.5 h-3.5" />
              {t.ui.chapter} 01 — {t.rooms.title.toUpperCase()}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight uppercase">
              {t.wings.title}
            </h2>
            <p className="text-base text-lumera-cream/70 font-light mt-3 leading-relaxed">
              {t.rooms.subtitle}
            </p>
          </StaggerReveal>

          {/* Sticky/Persistent Editorial Room Navigation */}
          <StaggerReveal delay={0.2} className="flex flex-wrap items-center gap-2 md:gap-3">
            {roomNav.map((nav, idx) => (
              <button
                key={nav.key}
                onClick={() => setActiveRoomIndex(idx)}
                className={`px-4 py-2 text-[11px] font-mono uppercase tracking-widest rounded-md transition-all duration-300 flex items-center gap-2 ${
                  activeRoomIndex === idx
                    ? 'bg-lumera-gold text-lumera-black font-semibold shadow-xl scale-105 ring-1 ring-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                <span className="opacity-60">{nav.num}</span>
                <span>{nav.key}</span>
              </button>
            ))}
          </StaggerReveal>
        </div>

        {/* Room Editorial Spread Sequence */}
        <div className="space-y-32">
          {ROOMS_DATA.map((room, idx) => {
            const isSelected = activeRoomIndex === idx;

            return (
              <div
                key={room.id}
                id={`room-chapter-${idx}`}
                className={`transition-all duration-700 ${
                  isSelected ? 'opacity-100 ring-1 ring-lumera-gold/30 p-4 md:p-8 rounded-sm bg-white/[0.02]' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Large Editorial Photography Spread (7 columns desktop) */}
                  <div className={`lg:col-span-7 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      onClick={() => setSelectedModalRoom(room)}
                      className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-md cursor-pointer bg-lumera-dark shadow-2xl"
                    >
                      <img
                        src={getAssetUrl(room.heroPhoto)}
                        alt={room.name[language]}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.9] group-hover:brightness-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                        <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-lumera-gold text-[10px] font-mono uppercase tracking-widest border border-white/15 rounded-md flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" /> 0{idx + 1} • {room.wingId.toUpperCase()} {t.ui.wing}
                        </span>
                      </div>

                      {/* Bottom Overlay Action */}
                      <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-lumera-cream/90 flex items-center gap-2">
                          <Bed className="w-3.5 h-3.5 text-lumera-gold" />
                          {room.bedType[language]}
                        </span>

                        <span className="px-4 py-2 bg-lumera-gold text-lumera-black text-[10px] font-semibold uppercase tracking-widest rounded-md flex items-center gap-1 group-hover:bg-white transition-colors duration-300">
                          {t.ui.inspectSuite} <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Room Editorial Typography & Details (5 columns desktop) */}
                  <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-lumera-gold tracking-widest uppercase flex items-center gap-2">
                        {t.ui.suiteChapter} 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                        {room.name[language]}
                      </h3>
                      <p className="font-serif italic text-lg text-lumera-cream/80 font-light pt-1">
                        {room.subtitle[language]}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-lumera-cream/70 font-light leading-relaxed">
                      {room.description[language]}
                    </p>

                    {/* Verified Features Bullets */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {room.features[language].slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-lumera-cream/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lumera-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Suite Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setSelectedModalRoom(room)}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] border border-white/20 rounded-md transition-all duration-300 flex items-center gap-2"
                      >
                        <span>{t.ui.discoverSuite}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-lumera-gold" />
                      </button>

                      <button
                        onClick={() => openBooking(room.id)}
                        className="px-6 py-3 bg-lumera-gold hover:bg-lumera-gold-hover text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-md shadow-lg transition-all duration-300"
                      >
                        {t.ui.reserveSuite}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dedicated Room Detail Modal */}
      <RoomDetailModal
        room={selectedModalRoom}
        onClose={() => setSelectedModalRoom(null)}
      />
    </section>
  );
};
