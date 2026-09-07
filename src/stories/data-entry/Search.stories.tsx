import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchInput } from '../../components/ui';

const meta: Meta<typeof SearchInput> = {
  title: 'Data Entry/Search',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Search input examples
export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Search...',
    variant: 'full',
  },
  parameters: {
    layout: 'padded',
  },
};

// Search input examples
export const WidthComparison: Story = {
  render: () => (
    <div className="space-y-4 max-w-4xl">
      <div>
        <label className="text-sm font-medium">Compact width (256px)</label>
        <SearchInput variant="default" placeholder="Enter a value" />
      </div>
      <div>
        <label className="text-sm font-medium">Search users</label>
        <SearchInput variant="full" placeholder="Enter a value" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// interactive examples
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
      if (searchValue.trim() && !searchHistory.includes(searchValue)) {
        setSearchHistory(prev => [searchValue, ...prev.slice(0, 4)]);
      }
    };

    const handleClear = () => {
      setValue('');
    };

    return (
      <div className="w-96 space-y-4">
        <SearchInput
          placeholder="Search input examples..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(value);
            }
          }}
          onClear={handleClear}
        />

        {searchHistory.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Search with clear action</h4>
            <div className="space-y-1">
              {searchHistory.map((item, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-sm p-2 rounded hover:bg-muted"
                  onClick={() => setValue(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};