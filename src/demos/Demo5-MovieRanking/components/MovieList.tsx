import React from 'react';
import { Typography, Skeleton } from '../../../components/ui';
import { Film } from 'lucide-react';
import { MovieCard } from './MovieCard';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
  onMovieClick?: (movieId: string) => void;
  showTitle?: boolean;
  title?: string;
  isLoading?: boolean;
}

// Movie card skeleton component
const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg border border-block-layout-border bg-block-layout p-6">
      <div className="flex gap-3">
        {/* Poster skeleton */}
        <Skeleton className="w-16 h-20 rounded-md flex-shrink-0" />
        
        {/* Documentation */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title */}
          <Skeleton className="h-5 w-3/4" />
          
          {/* Documentation */}
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-3 w-16" />
          
          {/* Documentation */}
          <Skeleton className="h-3 w-1/2" />
          
          {/* Documentation */}
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
          
          {/* Documentation */}
          <div className="flex gap-1 pt-1">
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MovieList: React.FC<MovieListProps> = ({
  movies,
  onMovieClick,
  showTitle = true,
  title = 'No movies found',
  isLoading = false,
}) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <Film className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <Typography variant="h3" className="mb-2">Enter details</Typography>
        <Typography variant="muted">Enter details</Typography>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <Typography variant="h2" className="mb-4">
          {title}
        </Typography>
      )}
      
      <div className="grid gap-4">
        {isLoading ? (
          Array.from({ length: 4 }, (_, index) => (
            <MovieCardSkeleton key={index} />
          ))
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={onMovieClick}
            />
          ))
        )}
      </div>
    </div>
  );
}; 