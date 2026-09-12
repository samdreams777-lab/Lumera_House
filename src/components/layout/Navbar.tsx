import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { ViewId } from '../../types';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onSelectView }) => {
  const { language, setLanguage, t } = useLanguage();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const viewLinks: { id: ViewId; label: string }[] = [
    { id: 'cover', label: t.ui.cover },
    { id: 'stay', label: t.ui.stay },
    { id: 'spaces', label: t.ui.spaces },
    { id: 'experience', label: t.ui.experience },
    { id: 'gallery', label: t.ui.gallery },
    { id: 'location', label: t.ui.arrivals },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || activeView !== 'cover'
            ? 'bg-lumera-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl text-white'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with 3D Metallic Gold Title */}
          <button
            onClick={() => onSelectView('cover')}
            className="group flex flex-col items-start text-left focus:outline-none"
          >
            <span
              className="font-serif text-xl md:text-2xl tracking-[0.25em] font-semibold uppercase select-none"
              style={{
                background: 'linear-gradient(135deg, #FFF3C4 0%, #F5D061 25%, #C69438 55%, #F5D061 80%, #3B2206 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))',
              }}
            >
              LUMERA HOUSE
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-lumera-gold/90 font-mono font-light">
              {t.nav.subtitle}
            </span>
          </button>

          {/* Quiet Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {viewLinks.map((link) => {
              const isActive = activeView === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => onSelectView(link.id)}
                  className={`text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300 font-medium py-1.5 px-2.5 rounded-md relative group ${
                    isActive
                      ? 'text-lumera-gold bg-white/10 shadow-sm border border-lumera-gold/30'
                      : 'text-white/80 hover:text-lumera-gold hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Language Switcher (Slightly rounded-md, not pill/oval) */}
            <div className="flex items-center bg-white/10 rounded-md p-1 border border-white/15 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider rounded-md transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-lumera-gold text-lumera-black font-semibold shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
                title="English Version"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('vi')}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider rounded-md transition-all duration-300 ${
                  language === 'vi'
                    ? 'bg-lumera-gold text-lumera-black font-semibold shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Phiên bản Tiếng Việt"
              >
                VI
              </button>
            </div>

            {/* Booking CTA Button (Subtle medium rounded-md) */}
            <button
              onClick={() => openBooking()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-lumera-gold hover:bg-lumera-gold-hover text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-md transition-all duration-300 shadow-lg hover:shadow-lumera-gold/20 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span>{t.ui.reserve}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="px-2.5 py-1 text-xs font-mono font-bold text-lumera-gold border border-lumera-gold/40 rounded-md"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-lumera-gold transition-colors focus:outline-none rounded-md"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-lumera-black/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col space-y-5">
              {viewLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onSelectView(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-serif text-3xl tracking-wide transition-colors py-1 ${
                    activeView === link.id ? 'text-lumera-gold font-normal' : 'text-white hover:text-lumera-gold'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{language === 'vi' ? 'Ngôn ngữ:' : 'Language:'}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3.5 py-1.5 text-xs font-mono rounded-md ${
                      language === 'en' ? 'bg-lumera-gold text-black font-bold' : 'bg-white/10'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('vi')}
                    className={`px-3.5 py-1.5 text-xs font-mono rounded-md ${
                      language === 'vi' ? 'bg-lumera-gold text-black font-bold' : 'bg-white/10'
                    }`}
                  >
                    VI
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-3.5 bg-lumera-gold text-lumera-black text-xs font-semibold uppercase tracking-[0.25em] rounded-md text-center shadow-lg"
              >
                {t.hero.ctaReserve}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
