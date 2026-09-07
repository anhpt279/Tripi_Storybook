// Implementation note
export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time: string;
  price: {
    min: number;
    currency: string;
  };
  hasParking: boolean;
  isFeatured?: boolean;
}

// Implementation note
export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  description: string;
  socialLinks: {
    spotify?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    twitter?: string;
  };
}

// Implementation note
export interface FilterState {
  location: string;
  date: string;
  hasParking: boolean;
  priceRange: string;
} 