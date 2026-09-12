import React, { useState } from 'react';
import { ROOMS_DATA } from '../../content/rooms';
import { Room } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { StaggerReveal } from '../visual/StaggerReveal';
import { ParallaxImage } from '../visual/ParallaxImage';
import { RoomDetailModal } from '../rooms/RoomDetailModal';
import { Calendar, Eye, Check, ShieldAlert } from 'lucide-react';

export const FeaturedRooms: React.FC = () => {
  const { language, t } = useLanguage();
  const { openBooking } = useBooking();
  const [selectedWingFilter, setSelectedWingFilter] = useState<'all' | 'stone' | 'garden' | 'urban'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const filteredRooms = selectedWingFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.wingId === selectedWingFilter);

  return (
    <section id="rooms" className="py-24 md:py-32 bg-lumera-cream text-lumera-black relative border-b border-lumera-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <StaggerReveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lumera-terracotta">
              {t.rooms.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-lumera-black tracking-tight mt-3">
              {t.rooms.title}
            </h2>
            <p className="text-base text-lumera-stone font-light mt-3 leading-relaxed">
              {t.rooms.subtitle}
            </p>
          </StaggerReveal>

          {/* Wing Filter Tabs */}
          <StaggerReveal delay={0.2} className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: t.rooms.filterAll },
              { id: 'stone', label: t.rooms.filterStone },
              { id: 'garden', label: t.rooms.filterGarden },
              { id: 'urban', label: t.rooms.filterUrban },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedWingFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  selectedWingFilter === tab.id
                    ? 'bg-lumera-black text-white shadow-md'
                    : 'bg-lumera-sand text-lumera-stone hover:bg-lumera-taupe hover:text-lumera-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </StaggerReveal>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredRooms.map((room, idx) => (
            <StaggerReveal key={room.id} delay={0.15 * (idx + 1)}>
              <div className="group bg-white rounded-sm overflow-hidden border border-lumera-taupe/60 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                {/* Room Image Container */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => setActiveModalRoom(room)}>
                  <ParallaxImage
                    src={room.heroPhoto}
                    alt={room.name[language]}
                    aspectRatio="aspect-[16/10]"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs uppercase tracking-widest rounded-sm">
                      <Eye className="w-4 h-4 text-lumera-gold" />
                      {t.rooms.viewDetails}
                    </span>
                  </div>

                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-lumera-black/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-lumera-gold rounded-sm border border-white/10">
                    {room.wingId.toUpperCase()} WING
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3
                      onClick={() => setActiveModalRoom(room)}
                      className="font-serif text-2xl md:text-3xl font-normal text-lumera-black hover:text-lumera-terracotta transition-colors cursor-pointer"
                    >
                      {room.name[language]}
                    </h3>
                    <p className="text-xs text-lumera-terracotta font-mono uppercase tracking-wider">
                      {room.subtitle[language]}
                    </p>
                    <p className="text-sm text-lumera-stone font-light leading-relaxed">
                      {room.tagline[language]}
                    </p>

                    {/* Features Snippet */}
                    <div className="pt-3 border-t border-lumera-sand">
                      <span className="text-[11px] uppercase tracking-wider text-lumera-black font-semibold block mb-2">
                        {t.rooms.featuresTitle}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-lumera-stone">
                        {room.features[language].slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-lumera-terracotta flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Rates Notice & Action Bar */}
                  <div className="pt-4 border-t border-lumera-sand flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="text-[11px] uppercase tracking-wider text-lumera-stone font-mono block">
                        PRICING & AVAILABILITY
                      </span>
                      <span className="font-serif text-sm font-semibold text-lumera-black">
                        {t.rooms.rateNotice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalRoom(room)}
                        className="px-4 py-2.5 bg-lumera-sand hover:bg-lumera-taupe text-lumera-black text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                      >
                        {t.rooms.viewDetails}
                      </button>

                      <button
                        onClick={() => openBooking(room.id)}
                        className="px-4 py-2.5 bg-lumera-black hover:bg-lumera-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 shadow-md"
                      >
                        <Calendar className="w-3.5 h-3.5 text-lumera-gold" />
                        <span>{t.rooms.enquire}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerReveal>
          ))}
        </div>
      </div>

      {/* Room Detail Modal Overlay */}
      <RoomDetailModal
        room={activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
      />
    </section>
  );
};
