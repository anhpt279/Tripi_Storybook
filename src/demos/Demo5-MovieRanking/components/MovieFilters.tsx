import React from 'react';
import { FilterGroup } from '../../../components/ui';
import { MovieCategory, FilterState } from '../types';

interface MovieFiltersProps {
  categories: MovieCategory[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export const MovieFilters: React.FC<MovieFiltersProps> = ({
  categories,
  filters,
  onFiltersChange,
}) => {
  const handleCategoryChange = (selectedValues: string[]) => {
    // No items yet. Add one to get started.
    const newCategory = selectedValues.length > 0 ? selectedValues[0] : 'all';
    onFiltersChange({
      ...filters,
      category: newCategory,
    });
  };

  // Convert categories into FilterGroup options
  const filterOptions = categories.map(category => ({
    value: category.value,
    label: category.name,
    disabled: false,
  }));

  return (
      <FilterGroup 
        options={filterOptions}
        selectedValues={[filters.category]}
        onSelectedValuesChange={handleCategoryChange}
        allowMultiple={false}
        orientation="horizontal"
        size="default"
      />
  );
}; 