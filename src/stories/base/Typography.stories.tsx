import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../components/ui';

const meta: Meta<typeof Typography> = {
  title: 'Base/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'body', 'muted'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Readable interface copy. ',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1">H1 page-level primary heading - used for page headings</Typography>
      <Typography variant="h2">H2 secondary heading - used for page headings</Typography>
      <Typography variant="h3">H3 tertiary heading - used for page headings</Typography>
      <Typography variant="body">Body Readable interface copy. Readable interface copy. </Typography>
      <Typography variant="muted">Muted Readable interface copy. </Typography>
    </div>
  ),
};

export const FontSizeSystem: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">sample (Tailwind classes)</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">xs</span>
          <span className="text-xs">12px - compact supporting text</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">sm</span>
          <span className="text-sm">sample (14px) - used for page headings</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">base</span>
          <span className="text-base">sample (16px) - used for page headings</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">lg</span>
          <span className="text-lg">sample (18px) - used for page headings</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono w-20 text-center">xl</span>
          <span className="text-xl">sample (20px) - used for page headings</span>
        </div>
      </div>
    </div>
  ),
};

export const LineHeightDemo: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">leading-none - headings with tight line height</h4>
        <p className="text-sm leading-none border-l-4 border-primary/30 pl-4">
          Readable interface copy.
          Readable interface copy.
          Readable interface copy.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">1.5 line height - readable body copy</h4>
        <p className="text-sm leading-normal border-l-4 border-green-200 pl-4">
          1.5 line height.
          Readable interface copy.
          Readable interface copy.
        </p>
      </div>
    </div>
  ),
}

export const TypographyDemo: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="space-y-4">
        <Typography variant="h1" className="leading-none">Page heading</Typography>
        <Typography variant="body">Readable interface copy. H1, H2. </Typography>
        <Typography variant="body" className="leading-normal">
          Readable interface copy. H1, H2, H3.
        </Typography>

        <Typography variant="h2" className="leading-none">Section heading</Typography>
        <Typography variant="body" className="leading-normal">
          5, xs to xl,
          Readable interface copy. sample
          Readable interface copy.
        </Typography>

        <Typography variant="h3" className="leading-none">Card heading</Typography>
        <Typography variant="body" className="leading-normal">
          Readable interface copy with consistent line height.
        </Typography>

        <Typography variant="muted" className="leading-none">
          Readable interface copy.
        </Typography>
      </div>
    </div>
  ),
}