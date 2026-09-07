import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../components/ui';

const meta = {
  title: 'Base/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label text',
  },
};

// Label with required-field styling
export const RequiredWithDot: Story = {
  args: {
    children: 'Email address',
    required: true,
  },
};