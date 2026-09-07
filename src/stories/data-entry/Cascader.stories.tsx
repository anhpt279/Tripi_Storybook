import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Cascader, type CascaderValue, type CascaderOption } from '../../components/ui/data-entry/cascader';

// sample
const mockOptions: CascaderOption[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    children: [
      {
        value: 'phones',
        label: 'Electronics',
        children: [
          { value: 'iphone', label: 'iPhone' },
          { value: 'samsung', label: 'Samsung' },
          { value: 'huawei', label: 'Huawei' },
        ],
      },
      {
        value: 'computers',
        label: 'Electronics',
        children: [
          { value: 'laptop', label: 'Electronics' },
          { value: 'desktop', label: 'Electronics' },
          { value: 'tablet', label: 'Electronics' },
        ],
      },
      {
        value: 'accessories',
        label: 'Electronics',
        children: [
          { value: 'charger', label: 'Electronics' },
          { value: 'case', label: 'Electronics' },
          { value: 'headphones', label: 'Electronics' },
        ],
      },
    ],
  },
  {
    value: 'clothing',
    label: 'Electronics',
    children: [
      {
        value: 'mens',
        label: 'Electronics',
        children: [
          { value: 'shirts', label: 'Electronics' },
          { value: 'pants', label: 'Electronics' },
          { value: 'shoes', label: 'Electronics' },
        ],
      },
      {
        value: 'womens',
        label: 'Electronics',
        children: [
          { value: 'dresses', label: 'Electronics' },
          { value: 'tops', label: 'Electronics' },
          { value: 'skirts', label: 'Electronics' },
        ],
      },
    ],
  },
  {
    value: 'books',
    label: 'Electronics',
    children: [
      {
        value: 'fiction',
        label: 'Electronics',
        children: [
          { value: 'mystery', label: 'Electronics' },
          { value: 'romance', label: 'Electronics' },
          { value: 'scifi', label: 'Science fiction' },
        ],
      },
      {
        value: 'nonfiction',
        label: 'Electronics',
        children: [
          { value: 'history', label: 'History' },
          { value: 'science', label: 'Electronics' },
          { value: 'biography', label: 'Electronics' },
        ],
      },
    ],
  },
];

// sample
const twoLevelOptions: CascaderOption[] = [
  {
    value: 'frontend',
    label: 'Electronics',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
  {
    value: 'backend',
    label: 'Electronics',
    children: [
      { value: 'nodejs', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
    ],
  },
  {
    value: 'mobile',
    label: 'Electronics',
    children: [
      { value: 'ios', label: 'iOS' },
      { value: 'android', label: 'Android' },
      { value: 'flutter', label: 'Flutter' },
    ],
  },
];

const meta: Meta<typeof Cascader> = {
  title: 'Data Entry/Cascader',
  component: Cascader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Hierarchical selection control for choosing a value from nested options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'radio' },
      options: ['auto', 'fill'],
      description: 'Controls whether the selector uses its content width or fills the container.',
    },
    maxLevel: {
      control: { type: 'radio' },
      options: [2, 3],
      description: 'Limits how many levels of the option tree can be selected.',
    },

    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the selector when the value should not be changed.',
    },
    allowClear: {
      control: { type: 'boolean' },
      description: 'Shows a clear action for the current selection.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Controlled value example
const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState<CascaderValue>([]);

  return (
    <div className="w-96 space-y-4">
      <Cascader
        {...args}
        value={value}
        onChange={(newValue, selectedOptions) => {
          setValue(newValue);
          console.log('Selected path:', newValue);
          console.log('Selected options:', selectedOptions);
        }}
      />
      <div className="p-3 bg-gray-50 rounded text-sm">
        <div className="font-medium mb-2">Selected value</div>
        <pre className="text-xs whitespace-pre-wrap">
          {JSON.stringify({ value, path: value.join(' > ') }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

// Basic usage
export const Default: Story = {
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true,
  },
};

// Two-level option tree
export const TwoLevel: Story = {
  render: ControlledTemplate,
  args: {
    options: twoLevelOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 2,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Limits the selector to two levels of nested options.',
      },
    },
  },
};



// Full-width selector
export const FillWidth: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>([]);

    return (
      <div className="w-full max-w-md space-y-4">
        <Cascader
          {...args}
          value={value}
          onChange={setValue}
        />
        <div className="p-3 bg-gray-50 rounded text-sm">
          <div className="font-medium mb-2">Selected value</div>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify({ value, path: value.join(' > ') }, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'fill',
    maxLevel: 3,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Expands the selector to fill the available container width.',
      },
    },
  },
};

// Disabled selector
export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    disabled: true,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Prevents changes while the selector is disabled.',
      },
    },
  },
};

// Selector without clear action
export const NoClear: Story = {
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Keeps the current selection without rendering a clear action.',
      },
    },
  },
};

// Selector with an initial value
export const WithDefaultValue: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>(['electronics', 'phones', 'iphone']);

    return (
      <div className="w-96 space-y-4">
        <Cascader
          {...args}
          value={value}
          onChange={setValue}
        />
        <div className="p-3 bg-gray-50 rounded text-sm">
          <div className="font-medium mb-2">Selected value</div>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify({ value, path: value.join(' > ') }, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts with a nested product option already selected.',
      },
    },
  },
};

// sample
export const WithDisabledOptions: Story = {
  render: ControlledTemplate,
  args: {
    options: [
      {
        value: 'category1',
        label: 'Electronics',
        children: [
          { value: 'item1', label: 'Item 1' },
          { value: 'item2', label: 'Wireless headphones (disabled)', disabled: true },
          { value: 'item3', label: 'Third option' },
        ],
      },
      {
        value: 'category2',
        label: 'Accessories (disabled)',
        disabled: true,
        children: [
          { value: 'item4', label: 'Item 4' },
          { value: 'item5', label: 'Item 5' },
        ],
      },
      {
        value: 'category3',
        label: 'Electronics',
        children: [
          { value: 'item6', label: 'Item 6' },
          { value: 'item7', label: 'Item 7' },
        ],
      },
    ],
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 2,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates disabled categories and individual options.',
      },
    },
  },
};

// Options with different column lengths
export const DifferentColumnLengths: Story = {
  render: ControlledTemplate,
  args: {
    options: [
      {
        value: 'short',
        label: 'Electronics',
        children: [
          { value: 'short1', label: 'Short item 1' },
          { value: 'short2', label: 'Second option' },
        ],
      },
      {
        value: 'medium',
        label: 'Electronics',
        children: Array.from({ length: 8 }, (_, i) => ({
          value: `medium${i + 1}`,
          label: `Medium option ${i + 1}`,
        })),
      },
      {
        value: 'long',
        label: 'Electronics',
        children: Array.from({ length: 20 }, (_, i) => ({
          value: `long${i + 1}`,
          label: `Long option ${i + 1}`,
          children: i < 3 ? Array.from({ length: 15 }, (_, j) => ({
            value: `long${i + 1}_sub${j + 1}`,
            label: `Sub-option ${i + 1}.${j + 1}`,
          })) : undefined,
        })),
      },
    ],
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates short, medium, and long option columns with nested children.',
      },
    },
  },
};