import type { Meta, StoryObj } from '@storybook/react';
import { Demo } from '../../demos/Demo1-DataAnalyticsDashboard/Demo1-DataAnalyticsDashboard';

const meta = {
  title: 'Demos/01-DataAnalyticsDashboard',
  component: Demo,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Data analytics dashboard',
  render: () => <Demo />,
};