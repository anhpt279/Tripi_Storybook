import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Sidebar } from '../../components/ui';

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed',
    },
    className: {
      control: 'text',
      description: 'Sidebar examples CSS Sidebar examples',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsed: false,
  },
  render: (args) => {
    const [collapsed, setCollapsed] = useState(args.collapsed || false);

    return (
      <div className="flex h-screen w-full bg-background">
        <div>
          <Sidebar
            {...args}
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
          />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-medium mb-4">Navigation preview</h1>
          <p className="text-muted-foreground">
            Navigation preview. Sidebar examples Sidebar Navigation preview.
          </p>
          <p className="text-muted-foreground mt-2">
            Sidebar examples{collapsed ? 'Logo Sidebar examples' : 'Sidebar examples'}Sidebar examples{collapsed ? 'Sidebar examples' : 'Sidebar examples'}Navigation preview.
          </p>
          <p className="text-muted-foreground mt-2">
            Example: {collapsed ? 'Sidebar examples' : 'Sidebar examples'}
          </p>
        </div>
      </div>
    );
  },
};