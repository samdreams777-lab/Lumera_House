import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';
import { ShieldCheck, Compass, ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <footer className="bg-lumera-black text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-3xl tracking-[0.25em] text-white">LUMERA HOUSE</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-lumera-gold mt-1">
                {t.nav.subtitle.toUpperCase()}
              </p>
            </div>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-md">
              {t.philosophy.text1}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-lumera-gold/90 font-mono">
              <ShieldCheck className="w-4 h-4 text-lumera-gold" />
              <span>{t.footer.enquiryNotice}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-lumera-gold font-semibold">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#wings" className="hover:text-white transition-colors">
                  {t.nav.wings}
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-white transition-colors">
                  {t.nav.rooms}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {t.nav.amenities}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enquiry & Concierge Action */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-lumera-gold font-semibold">
              {t.booking.title}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {t.booking.subtitle}
            </p>

            <button
              onClick={() => openBooking()}
              className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-lumera-gold text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-lumera-gold-hover transition-all duration-300 shadow-xl"
            >
              <span>{t.nav.bookNow}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="p-4 bg-white/5 border border-white/10 rounded text-xs text-white/60">
              <span className="font-semibold text-white block mb-1">{language === 'vi' ? 'Lưu Ý Về Giá' : 'Rates Notice'}</span>
              <span>{t.rooms.rateNotice}. {language === 'vi' ? 'Thông tin báo giá được gửi khi quý khách chọn ngày.' : 'Exact figures provided upon dates selection.'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white/60 transition-colors">{language === 'vi' ? 'Bảo Mật' : 'Privacy Policy'}</span>
            <span className="hover:text-white/60 transition-colors">{language === 'vi' ? 'Điều Khoản Lưu Trú' : 'Terms of Sanctuary Stay'}</span>
            <span className="hover:text-white/60 transition-colors">{language === 'vi' ? 'Dịch Vụ Lễ Tân' : 'Bespoke Concierge'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
