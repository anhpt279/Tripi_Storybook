export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;        // Douban rating 0-October
  genres: string[];      // Movie genres
  year: string;
  country: string;
  directors: string[];
  actors: string[];
  description: string;
  isHot?: boolean;       // Featured title flag
  rank?: number;          // Current ranking
  ratingCount?: number;  // Number of ratings
}

export interface MovieCategory {
  id: string;
  name: string;
  value: string;
}

export interface FilterState {
  category: string;
}

export interface WeeklyRankingItem {
  id: string;
  title: string;
  change: number;  // Rank change; positive, negative, or zero
} 