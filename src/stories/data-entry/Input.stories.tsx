import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../components/ui';

const meta = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name...',
  },
};

// Input examples
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="space-y-2">
        <div className="text-sm font-medium">Small</div>
        <Input inputSize="sm" placeholder="Enter a value" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Default</div>
        <Input inputSize="default" placeholder="Enter a value" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Large</div>
        <Input inputSize="lg" placeholder="Enter a value" />
      </div>
    </div>
  ),
};

// Input examples
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input type="text" placeholder="Enter a value" />
      <Input type="email" placeholder="Enter a value" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Enter a value" />
      <Input type="tel" placeholder="Enter a value" />
      <Input type="url" placeholder="Enter a value" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter a value',
    disabled: true,
  },
};