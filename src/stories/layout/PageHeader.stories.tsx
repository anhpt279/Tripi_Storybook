import type { Meta, StoryObj } from '@storybook/react';
import { PageHeaderWrapper, Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui';

const meta = {
  title: 'Layout/PageHeader',
  component: PageHeaderWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['title-only', 'title-with-actions', 'title-with-toolbar'],
    },
    showBack: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PageHeaderWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Title only - Simplest usage
export const TitleOnly: Story = {
  args: {
    variant: 'title-only',
    title: 'Account settings',
    containerClassName: 'p-6',
  },
};

// Title with back button
export const TitleWithBack: Story = {
  args: {
    variant: 'title-only',
    title: 'Page with back button',
    showBack: true,
    onBackClick: () => alert('Back button clicked'),
    containerClassName: 'p-6',
  },
};

// Title + Header with actions
export const TitleWithActions: Story = {
  args: {
    variant: 'title-with-actions',
    title: 'Account settings',
    showBack: true,
    actions: (
      <>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Cancel</Button>
      </>
    ),
    containerClassName: 'p-6',
  },
};

// Title + Sample label (Cancel)
export const TitleWithToolbar: Story = {
  args: {
    variant: 'title-with-toolbar',
    title: 'Account settings',
    showBack: true,
    filters: (
      <>
        <Input placeholder="Header with actions..." className="w-64" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Enter a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Cancel</SelectItem>
            <SelectItem value="processing">Cancel</SelectItem>
            <SelectItem value="completed">Cancel</SelectItem>
            <SelectItem value="cancelled">Cancel</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Enter a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Cancel</SelectItem>
            <SelectItem value="week">Cancel</SelectItem>
            <SelectItem value="month">Cancel</SelectItem>
            <SelectItem value="quarter">Cancel</SelectItem>
          </SelectContent>
        </Select>
      </>
    ),
    toolbarActions: (
      <>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="outline" size="sm">Settings</Button>
        <Button size="sm">Cancel</Button>
      </>
    ),
    containerClassName: 'p-6',
    headerClassName: 'space-y-4',
  },
};