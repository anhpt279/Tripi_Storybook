import type { Meta, StoryObj } from '@storybook/react';
import { BlockLayout, Typography } from '../../components/ui';

const meta: Meta<typeof BlockLayout> = {
  title: 'Layout/BlockLayout',
  component: BlockLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['sm', 'default'],
      description: 'A reusable content container with consistent padding and shadow.',
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm'],
      description: 'A reusable content container with consistent padding and shadow.',
    },
    rounded: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      description: 'A reusable content container with consistent padding and shadow.',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// sample
const ContentAreaMarker = ({
  padding = 'default',
  height = 'h-24'
}: {
  padding?: 'sm' | 'default';
  height?: string;
}) => {
  const paddingText = padding === 'sm' ? '16px' : '24px';
  return (
    <div className={`${height} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`}>
              <Typography variant="body" className="text-purple-600 text-center">
        content area<br/>
        Padding: {paddingText}<br/>
        A reusable content panel with consistent spacing.
      </Typography>
    </div>
  );
};

export const Default: Story = {
  args: {
    children: <ContentAreaMarker />,
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: <ContentAreaMarker padding="sm" height="h-20" />,
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'default',
    children: <ContentAreaMarker padding="default" height="h-24" />,
  },
};

export const NoShadow: Story = {
  args: {
    shadow: 'none',
    children: <ContentAreaMarker height="h-20" />,
  },
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Typography variant="body" className="mb-2 font-medium">rounded-md</Typography>
        <BlockLayout rounded="md">
          <ContentAreaMarker height="h-16" />
        </BlockLayout>
      </div>
      <div>
        <Typography variant="body" className="mb-2 font-medium">rounded-lg (Default)</Typography>
        <BlockLayout rounded="lg">
          <ContentAreaMarker height="h-16" />
        </BlockLayout>
      </div>
    </div>
  ),
};

export const ReferenceStyle: Story = {
  args: {
    padding: 'default',
    shadow: 'sm',
    rounded: 'lg',
    children: (
      <div>
        <div className="flex flex-col space-y-1.5">
          <div className="text-sm text-muted-foreground">Total Revenue</div>
          <div className="font-medium tracking-tight text-3xl">$15,231.89</div>
          <div className="text-sm text-muted-foreground">+20.1% from last month</div>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Content panel with rounded border, themed background, and subtle shadow',
      },
    },
  },
};

export const NestedContainers: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <Typography variant="h3">main container (24px Padding)</Typography>
        <BlockLayout padding="sm" shadow="none" rounded="lg">
          <div className="space-y-2">
            <Typography variant="body">sample (16px Padding)</Typography>
            <ContentAreaMarker padding="sm" height="h-16" />
          </div>
        </BlockLayout>
      </div>
    ),
  },
};