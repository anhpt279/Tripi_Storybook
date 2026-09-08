import type { Meta, StoryObj } from '@storybook/react';
import { VNUITServices } from '../../demos/VNU-IT-Services/VNU-IT-Services';

const meta = {
  title: 'Demos/VNU IT Services',
  component: VNUITServices,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof VNUITServices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'VNU IT Services',
};