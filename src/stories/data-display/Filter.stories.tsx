import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FilterGroup, type FilterOption } from '../../components/ui';

const meta: Meta<typeof FilterGroup> = {
  title: 'Data Display/Filter',
  component: FilterGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'default', 'lg'],
    },
    allowMultiple: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// sample
export const Default: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const options: FilterOption[] = [
      { value: 'all', label: 'All' },
      { value: 'pending', label: 'Pending' },
      { value: 'processing', label: 'Pending' },
      { value: 'completed', label: 'Pending' },
      { value: 'cancelled', label: 'Pending' },
    ];

    return (
      <div className="w-96">
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            {...args}
            options={options}
            selectedValues={selectedValues}
            onSelectedValuesChange={setSelectedValues}
          />
        </div>
        <div className="text-xs text-muted-foreground">
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}
        </div>
      </div>
    );
  },
  args: {
    orientation: 'horizontal',
    size: 'default',
    allowMultiple: true,
  },
};

// sample
export const SingleSelect: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['medium']);

    const options: FilterOption[] = [
      { value: 'low', label: 'Pending' },
      { value: 'medium', label: 'Pending' },
      { value: 'high', label: 'Pending' },
      { value: 'urgent', label: 'Pending' },
    ];

    return (
      <div className="w-96">
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Priority filter</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues}
            onSelectedValuesChange={setSelectedValues}
            allowMultiple={false}
          />
        </div>
        <div className="text-xs text-muted-foreground">
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}
        </div>
      </div>
    );
  },
};

// sample
export const Sizes: Story = {
  render: () => {
    const [selectedValues1, setSelectedValues1] = useState<string[]>(['frontend']);
    const [selectedValues2, setSelectedValues2] = useState<string[]>(['backend']);
    const [selectedValues3, setSelectedValues3] = useState<string[]>(['mobile']);

    const options: FilterOption[] = [
      { value: 'frontend', label: 'Pending' },
      { value: 'backend', label: 'Pending' },
      { value: 'mobile', label: 'Pending' },
      { value: 'devops', label: 'DevOps' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues1}
            onSelectedValuesChange={setSelectedValues1}
            size="sm"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues2}
            onSelectedValuesChange={setSelectedValues2}
            size="default"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues3}
            onSelectedValuesChange={setSelectedValues3}
            size="lg"
          />
        </div>
      </div>
    );
  },
};

// sample
export const VerticalLayout: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['design', 'development']);

    const options: FilterOption[] = [
      { value: 'design', label: 'Pending' },
      { value: 'development', label: 'Pending' },
      { value: 'testing', label: 'Pending' },
      { value: 'deployment', label: 'Pending' },
      { value: 'maintenance', label: 'Pending' },
    ];

    return (
      <div className="w-48">
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues}
            onSelectedValuesChange={setSelectedValues}
            orientation="vertical"
          />
        </div>
        <div className="text-xs text-muted-foreground">
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}
        </div>
      </div>
    );
  },
};

// sample
export const WithDisabledOptions: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['active']);

    const options: FilterOption[] = [
      { value: 'active', label: 'Pending' },
      { value: 'inactive', label: 'Pending' },
      { value: 'pending', label: 'Pending', disabled: true },
      { value: 'suspended', label: 'Pending', disabled: true },
      { value: 'archived', label: 'Pending' },
    ];

    return (
      <div className="w-96">
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Order status</h3>
          <FilterGroup
            options={options}
            selectedValues={selectedValues}
            onSelectedValuesChange={setSelectedValues}
          />
        </div>
        <div className="text-xs text-muted-foreground">
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}
        </div>
      </div>
    );
  },
};