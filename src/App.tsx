import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ViewId } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { BrandPhilosophy } from './components/home/BrandPhilosophy';
import { StayEditorialChapter } from './components/home/StayEditorialChapter';
import { SpacesEditorialChapter } from './components/home/SpacesEditorialChapter';
import { ExperienceEditorialChapter } from './components/home/ExperienceEditorialChapter';
import { AtmosphereGallerySection } from './components/home/AtmosphereGallerySection';
import { LocationSection } from './components/home/LocationSection';
import { FAQSection } from './components/home/FAQSection';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';

export const AppContent: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewId>('cover');

  useEffect(() => {
    // Scroll to top on view change
    window.scrollTo(0, 0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || activeView === 'cover') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [activeView]);

  return (
    <div className={`min-h-screen flex flex-col bg-lumera-black text-white selection:bg-lumera-gold selection:text-lumera-black ${
      activeView === 'cover' ? 'h-screen overflow-hidden' : ''
    }`}>
      <Navbar activeView={activeView} onSelectView={setActiveView} />

      <main className="flex-1">
        {activeView === 'cover' && (
          <HeroSection onSelectView={setActiveView} />
        )}

        {activeView === 'stay' && (
          <div className="pt-20">
            <StayEditorialChapter />
          </div>
        )}

        {activeView === 'spaces' && (
          <div className="pt-20">
            <SpacesEditorialChapter />
            <BrandPhilosophy />
          </div>
        )}

        {activeView === 'experience' && (
          <div className="pt-20">
            <ExperienceEditorialChapter />
          </div>
        )}

        {activeView === 'gallery' && (
          <div className="pt-20">
            <AtmosphereGallerySection />
          </div>
        )}

        {activeView === 'location' && (
          <div className="pt-20">
            <LocationSection />
          </div>
        )}

        {activeView === 'faq' && (
          <div className="pt-20">
            <FAQSection />
          </div>
        )}
      </main>

      {activeView !== 'cover' && <Footer />}
      <BookingModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </LanguageProvider>
  );
};

export default App;
