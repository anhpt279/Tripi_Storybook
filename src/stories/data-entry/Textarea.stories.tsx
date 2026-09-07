import type { Meta, StoryObj } from '@storybook/react';

import { Textarea, Label } from '../../components/ui';

const meta = {
  title: 'Data Entry/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
    },
    cols: {
      control: { type: 'number', min: 10, max: 100 },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Write a comment...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" placeholder="Write a comment..." {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter a value',
    disabled: true,
  },
};

export const WithRows: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="comment">Comment</Label>
      <Textarea
        id="comment"
        placeholder="Write a comment..."
        rows={6}
        {...args}
      />
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="feedback" required>feedback</Label>
      <Textarea
        id="feedback"
        placeholder="Enter a required comment..."
        required
        {...args}
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="message-error" required>Comment</Label>
      <Textarea
        id="message-error"
        placeholder="Enter a value"
        className="border-destructive"
        required
      />
      <p className="text-sm text-destructive">Comment</p>
    </div>
  ),
};