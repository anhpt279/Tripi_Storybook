import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Switch } from '../../components/ui';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default'],
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: { onCheckedChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    checked: false,
  },
};

// Switch examples
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch checked={false} />
        <span>Enable notifications</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={true} />
        <span>Enable notifications</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={false} disabled />
        <span>Enable notifications</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={true} disabled />
        <span>Enable notifications</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example: Enable notifications, Enable notifications. ',
      },
    },
  },
};

// Switch examples
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch size="sm" checked={true} />
        <span>Switch examples (sm)</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="default" checked={true} />
        <span>Switch examples (default)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example: Small, Default. ',
      },
    },
  },
};