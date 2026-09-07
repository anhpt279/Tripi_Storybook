import type { Meta, StoryObj } from '@storybook/react';
import { Demo3Resume } from '../../demos/Demo3-Resume/Demo3-Resume';

const meta = {
  title: 'Demos/03-Resume',
  component: Demo3Resume,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Demo3Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Resume builder',
  render: () => <Demo3Resume />,
};