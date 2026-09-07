import React, { useState } from 'react';
import {
  TopNav,
  PageContainer,
  PageHeaderWrapper,
} from '../../components/ui';
import { MovieFilters, MovieList, WeeklyRankingSidebar } from './components';
import { FilterState } from './types';
import { mockMovies, movieCategories, weeklyRanking } from './mockData';

export const Demo5: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Event handlers
  const handleFiltersChange = (newFilters: FilterState) => {
    // Show loading state
    setIsLoading(true);
    
    // Simulate network request delay
    setTimeout(() => {
      setFilters(newFilters);
      setIsLoading(false);
    }, 300);
  };

  const handleMovieClick = (movieId: string) => {
    console.log('Selected movie:', movieId);
    // Navigate to the movie details page here
  };

  const handleWeeklyRankingClick = (itemId: string) => {
    console.log('Selected weekly ranking item:', itemId);
    // Navigate to the corresponding movie page here
  };

  const handleTopNavAction = (action: string) => {
    console.log('TopNav action:', action);
  };

  // Filter movie list
  const filteredMovies = mockMovies.filter(movie => {
    if (filters.category === 'all') {
      return true;
    }
    
    // Implementation note
    const categoryMap: Record<string, string[]> = {
      drama: ['Drama'],
      comedy: ['Comedy'],
      action: ['Action'],
      scifi: ['Science fiction'],
      animation: ['Animation'],
      romance: ['Romance'],
      thriller: ['Thriller'],
      fantasy: ['Fantasy'],
      crime: ['Crime'],
      family: ['Family'],
      war: ['War'],
      history: ['History'],
      western: ['Western'],
      musical: ['Musical'],
      sport: ['Sports'],
      documentary: ['Documentary'],
      short: ['Short film'],
      adult: ['Adult'],
      gay: ['LGBTQ+'],
    };
    
    const selectedGenres = categoryMap[filters.category] || [];
    return selectedGenres.some(genre => movie.genres.includes(genre));
  });

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Documentation */}
      <TopNav
        isLoggedIn={true}
        avatarFallback="U"
        userName="User"
        onHelpClick={() => handleTopNavAction('help')}
        onAvatarClick={() => handleTopNavAction('profile')}
        onLogoClick={() => handleTopNavAction('home')}
      />
      
      {/* Documentation */}
      <div className="flex-1 overflow-auto">
        <PageContainer variant="full" padding="nav-layout">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Documentation：Text */}
            <div className="flex-1 lg:flex-[2] flex flex-col space-y-6">
              {/* Documentation */}
              <PageHeaderWrapper
                variant="title-with-toolbar"
                title="Movie ranking"
                filters={
                  <MovieFilters
                    categories={movieCategories}
                    filters={filters}
                    onFiltersChange={handleFiltersChange}
                  />
                }
              />
              
              {/* Documentation */}
              <div className="flex-1">
                <MovieList
                  movies={filteredMovies}
                  onMovieClick={handleMovieClick}
                  showTitle={false}
                  isLoading={isLoading}
                />
              </div>
            </div>
            
            {/* Right：Text - Text */}
            <div className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="lg:sticky lg:top-6">
                <WeeklyRankingSidebar
                  rankingData={weeklyRanking}
                  onItemClick={handleWeeklyRankingClick}
                />
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}; 