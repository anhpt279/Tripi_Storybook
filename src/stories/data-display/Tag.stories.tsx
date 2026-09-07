import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Tag } from '../../components/ui';

const meta = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'destructive'],
    },
    removable: {
      control: { type: 'boolean' },
    },
    onRemove: { action: 'remove' },
  },
  args: {
    onRemove: fn(),
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Featured',
    variant: 'default',
  },
};

export const Removable: Story = {
  args: {
    children: 'Featured',
    variant: 'primary',
    removable: true,
    onRemove: fn(),
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Tag',
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Recommended</h3>
        <div className="flex gap-2">
          <Tag variant="default">Default</Tag>
          <Tag variant="primary">Recommended</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="destructive">Error</Tag>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Recommended</h3>
        <div className="flex gap-2">
          <Tag variant="primary" onRemove={fn()}>JavaScript</Tag>
          <Tag variant="success" onRemove={fn()}>Recommended</Tag>
          <Tag variant="warning" onRemove={fn()}>Recommended</Tag>
          <Tag variant="destructive" onRemove={fn()}>Recommended</Tag>
        </div>
      </div>
    </div>
  ),
};

export const WithLongText: Story = {
  args: {
    children: 'Featured',
    variant: 'primary',
  },
};