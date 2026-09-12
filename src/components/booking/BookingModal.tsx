import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { ROOMS_DATA } from '../../content/rooms';
import { X, Calendar, Users, CheckCircle2, ArrowRight, ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../utils/assets';

export const BookingModal: React.FC = () => {
  const { bookingState, closeBooking, setStep, updateBooking, submitEnquiry, resetBooking } = useBooking();
  const { language, t } = useLanguage();

  if (!bookingState.isOpen) return null;

  const selectedRoom = ROOMS_DATA.find((r) => r.id === bookingState.selectedRoomId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-lumera-dark text-white w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl border border-white/10 relative my-8"
        >
          {/* Header Bar */}
          <div className="p-6 bg-lumera-black border-b border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-lumera-gold font-mono block">
                {language === 'vi' ? 'QUY TRÌNH YÊU CẦU ĐẶT PHÒNG' : 'RESERVATION ENQUIRY WIZARD'}
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mt-1">
                {t.booking.title}
              </h3>
            </div>

            <button
              onClick={closeBooking}
              className="p-2 bg-white/10 hover:bg-lumera-gold text-white hover:text-black rounded-full transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          {bookingState.step !== 'confirmation' && (
            <div className="bg-white/5 border-b border-white/10 px-6 py-3 flex items-center justify-between text-xs text-white/60 font-mono">
              <span className={bookingState.step === 'dates' ? 'text-lumera-gold font-bold' : ''}>
                {t.booking.step1}
              </span>
              <span>→</span>
              <span className={bookingState.step === 'room' ? 'text-lumera-gold font-bold' : ''}>
                {t.booking.step2}
              </span>
              <span>→</span>
              <span className={bookingState.step === 'details' ? 'text-lumera-gold font-bold' : ''}>
                {t.booking.step3}
              </span>
            </div>
          )}

          {/* Modal Content Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* STEP 1: DATES & GUESTS */}
            {bookingState.step === 'dates' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-lumera-gold font-semibold block">
                      {t.booking.checkIn}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={bookingState.checkIn}
                        onChange={(e) => updateBooking({ checkIn: e.target.value })}
                        className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-lumera-gold font-semibold block">
                      {t.booking.checkOut}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={bookingState.checkOut}
                        onChange={(e) => updateBooking({ checkOut: e.target.value })}
                        className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                      {t.booking.adults}
                    </label>
                    <select
                      value={bookingState.adults}
                      onChange={(e) => updateBooking({ adults: Number(e.target.value) })}
                      className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                    >
                      <option value={1}>1 {language === 'vi' ? 'Khách' : 'Guest'}</option>
                      <option value={2}>2 {language === 'vi' ? 'Khách' : 'Guests'}</option>
                      <option value={3}>3 {language === 'vi' ? 'Khách' : 'Guests'}</option>
                      <option value={4}>4 {language === 'vi' ? 'Khách' : 'Guests'}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                      {t.booking.children}
                    </label>
                    <select
                      value={bookingState.children}
                      onChange={(e) => updateBooking({ children: Number(e.target.value) })}
                      className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                    >
                      <option value={0}>0 {language === 'vi' ? 'Trẻ em' : 'Children'}</option>
                      <option value={1}>1 {language === 'vi' ? 'Trẻ em' : 'Child'}</option>
                      <option value={2}>2 {language === 'vi' ? 'Trẻ em' : 'Children'}</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded text-xs text-white/70 space-y-1">
                  <span className="font-semibold text-lumera-gold block">{t.rooms.rateNotice}</span>
                  <p>{t.booking.ratesNotice}</p>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep('room')}
                    className="px-6 py-3.5 bg-lumera-gold text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all flex items-center gap-2"
                  >
                    <span>{t.booking.nextStep}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT SUITE WING */}
            {bookingState.step === 'room' && (
              <div className="space-y-6">
                <p className="text-xs text-white/70">{t.booking.selectRoomPrompt}</p>

                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                  {ROOMS_DATA.map((room) => {
                    const isSelected = bookingState.selectedRoomId === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => updateBooking({ selectedRoomId: room.id })}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-lumera-black border-lumera-gold shadow-lg scale-[1.01]'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={getAssetUrl(room.heroPhoto)}
                            alt={room.name[language]}
                            className="w-20 h-16 object-cover rounded-sm border border-white/10"
                          />
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-lumera-gold font-mono">
                              {room.wingId.toUpperCase()} {t.ui.wing}
                            </span>
                            <h4 className="font-serif text-lg font-normal text-white">
                              {room.name[language]}
                            </h4>
                            <p className="text-xs text-white/60 font-light truncate max-w-xs md:max-w-md">
                              {room.subtitle[language]}
                            </p>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="text-xs text-lumera-gold font-mono block">{language === 'vi' ? 'Yêu Cầu Báo Giá' : 'Enquire Rate'}</span>
                          <span className="text-[10px] text-white/40 uppercase">{language === 'vi' ? 'Theo Yêu Cầu' : 'On Request'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setStep('dates')}
                    className="px-5 py-3 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.booking.prevStep}</span>
                  </button>

                  <button
                    disabled={!bookingState.selectedRoomId}
                    onClick={() => setStep('details')}
                    className={`px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all flex items-center gap-2 ${
                      bookingState.selectedRoomId
                        ? 'bg-lumera-gold text-lumera-black'
                        : 'bg-white/20 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    <span>{t.booking.nextStep}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: GUEST CONTACT DETAILS */}
            {bookingState.step === 'details' && (
              <div className="space-y-6">
                {selectedRoom && (
                  <div className="p-3 bg-white/5 border border-white/10 rounded flex items-center gap-3 text-xs">
                    <span className="text-lumera-gold font-mono">{language === 'vi' ? 'CĂN SUITE ĐÃ CHỌN:' : 'SELECTED SUITE:'}</span>
                    <span className="font-semibold text-white">{selectedRoom.name[language]}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                      {t.booking.fullName} *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={bookingState.guestName}
                      onChange={(e) => updateBooking({ guestName: e.target.value })}
                      className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                        {t.booking.email} *
                      </label>
                      <input
                        type="email"
                        placeholder="eleanor@example.com"
                        value={bookingState.guestEmail}
                        onChange={(e) => updateBooking({ guestEmail: e.target.value })}
                        className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                        {t.booking.phone}
                      </label>
                      <input
                        type="tel"
                        placeholder="+84 ..."
                        value={bookingState.guestPhone}
                        onChange={(e) => updateBooking({ guestPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-white/80 font-semibold block">
                      {t.booking.specialRequests}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={language === 'vi' ? 'Yêu cầu xe đón tiễn, chế độ ăn uống, đặt nôi trẻ em...' : 'Arrival transfer preferences, dietary needs, crib placement...'}
                      value={bookingState.specialRequests}
                      onChange={(e) => updateBooking({ specialRequests: e.target.value })}
                      className="w-full px-4 py-3 bg-lumera-black border border-white/20 rounded text-white text-sm focus:border-lumera-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setStep('room')}
                    className="px-5 py-3 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.booking.prevStep}</span>
                  </button>

                  <button
                    disabled={!bookingState.guestName || !bookingState.guestEmail}
                    onClick={submitEnquiry}
                    className={`px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl ${
                      bookingState.guestName && bookingState.guestEmail
                        ? 'bg-lumera-gold text-lumera-black hover:bg-lumera-gold-hover'
                        : 'bg-white/20 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    <span>{t.booking.submitEnquiry}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONFIRMATION VOUCHER */}
            {bookingState.step === 'confirmation' && (
              <div className="space-y-6 text-center py-4">
                <div className="inline-flex p-4 bg-lumera-gold/10 text-lumera-gold rounded-full border border-lumera-gold/30">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div>
                  <h4 className="font-serif text-3xl font-normal text-white">
                    {t.booking.successTitle}
                  </h4>
                  <p className="text-xs text-white/70 font-mono mt-2">
                    {t.booking.successMsg}{' '}
                    <span className="text-lumera-gold font-bold">{bookingState.bookingReference}</span>
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-sm text-left max-w-md mx-auto space-y-3 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">{language === 'vi' ? 'Tên Khách Hàng:' : 'Guest Name:'}</span>
                    <span className="font-semibold text-white">{bookingState.guestName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">{language === 'vi' ? 'Thời Gian Lưu Trú:' : 'Dates Requested:'}</span>
                    <span className="font-semibold text-white">{bookingState.checkIn} → {bookingState.checkOut}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">{language === 'vi' ? 'Hạng Phòng Suite:' : 'Suite Category:'}</span>
                    <span className="font-semibold text-lumera-gold">{selectedRoom?.name[language] || 'Sanctuary Suite'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">{language === 'vi' ? 'Trạng Thái Báo Giá:' : 'Rate Status:'}</span>
                    <span className="font-semibold text-white">{language === 'vi' ? 'Đang Chờ Báo Giá Tùy Chỉnh' : 'Bespoke Quotation Pending'}</span>
                  </div>
                </div>

                <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed">
                  {t.booking.successNote}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      resetBooking();
                      closeBooking();
                    }}
                    className="px-8 py-3.5 bg-lumera-gold text-lumera-black text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all"
                  >
                    {t.booking.closeModal}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
