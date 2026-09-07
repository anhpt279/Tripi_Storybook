import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer, Typography } from '../../components/ui';

const meta: Meta<typeof PageContainer> = {
  title: 'Layout/PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['full', 'centered'],
      description: 'Page container layout variant',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a child element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Page container examples
const ContentAreaMarker = ({
  variant = 'full',
  height = 'h-96'
}: {
  variant?: 'full' | 'centered';
  height?: string;
}) => {
  const widthText = variant === 'full' ? 'Viewport: 1440px, padding: 32px' : 'Width: 768px, Page container examples: 24px';
  const containerClass = variant === 'full' ? 'max-w-full' : 'max-w-[768px] mx-auto';

  return (
    <div className={`${height} w-full bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center ${containerClass}`}>
      <Typography variant="body" className="text-blue-600 text-center">
        Page content<br/>
        {widthText}<br/>
        Page container examples: 40px<br/>
        Page container examples(bg-sidebar)Page container examples(p-2)<br/>
        Page content, Page container examples
      </Typography>
    </div>
  );
};

export const Default: Story = {
  args: {
    children: <ContentAreaMarker />,
  },
};

export const Centered: Story = {
  args: {
    variant: 'centered',
    children: <ContentAreaMarker variant="centered" height="h-80" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Page container examples, 768px, Page content. PageContainer. ',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'full',
    children: <ContentAreaMarker variant="full" height="h-96" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Page container examples, PageContainer. Page content. ',
      },
    },
  },
};