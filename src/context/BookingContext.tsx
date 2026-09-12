import React, { createContext, useContext, useState } from 'react';
import { BookingState } from '../types';

interface BookingContextType {
  bookingState: BookingState;
  openBooking: (roomId?: string) => void;
  closeBooking: () => void;
  setStep: (step: BookingState['step']) => void;
  updateBooking: (data: Partial<BookingState>) => void;
  submitEnquiry: () => void;
  resetBooking: () => void;
}

const initialBookingState: BookingState = {
  isOpen: false,
  step: 'dates',
  checkIn: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
  checkOut: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
  adults: 2,
  children: 0,
  selectedRoomId: null,
  guestName: '',
  guestEmail: '',
  guestPhone: '',
  specialRequests: '',
  bookingReference: null,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingState, setBookingState] = useState<BookingState>(initialBookingState);

  const openBooking = (roomId?: string) => {
    setBookingState((prev) => ({
      ...prev,
      isOpen: true,
      step: roomId ? 'dates' : prev.step,
      selectedRoomId: roomId || prev.selectedRoomId,
    }));
  };

  const closeBooking = () => {
    setBookingState((prev) => ({ ...prev, isOpen: false }));
  };

  const setStep = (step: BookingState['step']) => {
    setBookingState((prev) => ({ ...prev, step }));
  };

  const updateBooking = (data: Partial<BookingState>) => {
    setBookingState((prev) => ({ ...prev, ...data }));
  };

  const submitEnquiry = () => {
    const refCode = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingState((prev) => ({
      ...prev,
      step: 'confirmation',
      bookingReference: refCode,
    }));
  };

  const resetBooking = () => {
    setBookingState(initialBookingState);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingState,
        openBooking,
        closeBooking,
        setStep,
        updateBooking,
        submitEnquiry,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
