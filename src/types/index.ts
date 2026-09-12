export type Language = 'en' | 'vi';

export type CategoryId = 'all' | 'lobby' | 'stone' | 'suites' | 'urban' | 'bedroom' | 'bathrooms';

export type ViewId = 'cover' | 'stay' | 'spaces' | 'experience' | 'gallery' | 'location' | 'faq';

export interface PhotoItem {
  id: string;
  filename: string;
  src: string;
  category: CategoryId;
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  orientation: 'landscape' | 'portrait';
  heroQuality: boolean;
  roomCardSuitable: boolean;
}

export interface Room {
  id: string;
  wingId: 'stone' | 'garden' | 'urban';
  name: {
    en: string;
    vi: string;
  };
  subtitle: {
    en: string;
    vi: string;
  };
  tagline: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  atmosphere: {
    en: string;
    vi: string;
  };
  heroPhoto: string;
  galleryPhotos: string[];
  features: {
    en: string[];
    vi: string[];
  };
  bedType: {
    en: string;
    vi: string;
  };
  capacityNotice?: {
    en: string;
    vi: string;
  };
}

export interface BookingState {
  isOpen: boolean;
  step: 'dates' | 'guests' | 'room' | 'details' | 'confirmation';
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  selectedRoomId: string | null;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  bookingReference: string | null;
}
