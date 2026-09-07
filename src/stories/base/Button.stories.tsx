import type { Meta, StoryObj } from '@storybook/react';
import { ArchiveX, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

import { Button, ButtonWithLoading } from '../../components/ui';

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'withicon', 'sm-icon'],
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text shown when the button is hovered',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button variants
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>
        <Plus className="h-4 w-4" />
        Create task
      </Button>
      <Button variant="outline">
        <Plus className="h-4 w-4" />
        Add project
      </Button>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button size="sm-icon" variant="ghost" tooltip="Archive item">
        <ArchiveX className="h-4 w-4" />
      </Button>
      <Button size="sm-icon" variant="ghost" tooltip="Delete item">
        <Trash2 className="h-4 w-4" />
      </Button>
      <Button size="withicon" variant="ghost" tooltip="Archive item">
        <ArchiveX className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <ButtonWithLoading loading>Loading</ButtonWithLoading>
    </div>
  ),
};

// ButtonWithLoading sample
export const LoadingButton: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
      setIsLoading(true);
      // Simulate an asynchronous submit action.
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <ButtonWithLoading loading loadingText="Saving...">Save</ButtonWithLoading>
          <ButtonWithLoading loading={false}>Continue</ButtonWithLoading>
          <ButtonWithLoading loading variant="secondary">Sync data</ButtonWithLoading>
          <ButtonWithLoading loading variant="outline" loadingText="Publishing...">Publish</ButtonWithLoading>
        </div>

        <div className="border-t pt-4">
          <div className="flex gap-2 items-center">
            <ButtonWithLoading
              loading={isLoading}
              onClick={handleSubmit}
              loadingText="Submitting..."
            >
              Submit form
            </ButtonWithLoading>
            <Button
              variant="outline"
              onClick={() => setIsLoading(false)}
              disabled={!isLoading}
              size="sm"
            >
              Cancel
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            The loading state resets after 2 seconds.
          </p>
        </div>
      </div>
    );
  },
};

export const LoadingSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonWithLoading loading size="sm" loadingText="Small">Small</ButtonWithLoading>
      <ButtonWithLoading loading size="default" loadingText="Default">Default</ButtonWithLoading>
      <ButtonWithLoading loading size="lg" loadingText="Large">Large</ButtonWithLoading>
    </div>
  ),
};