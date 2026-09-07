import type { Meta, StoryObj } from '@storybook/react';
import { Info, HelpCircle, Settings, Star, Heart } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button } from '../../components/ui';

const meta = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delayDuration: {
      control: { type: 'number' },
      description: 'The duration from when the mouse enters until the tooltip shows',
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover to view tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a basic tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Get more information</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DifferentPosition: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center min-h-[200px]">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Above</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Shown above</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Shown on the right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Below</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Shown below the trigger</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Shown to the left of the trigger</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">More information</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>This longer tooltip demonstrates how additional context wraps within the content area.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help with this feature</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
            <Star className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add this item to favorites</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
            <Heart className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Like this item</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={1000} skipDelayDuration={300}>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">First option</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>First option</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Second action</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shown after a one-second delay</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const DisabledElement: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled className="pointer-events-none">
            Disabled action
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Button variants</h3>
        <div className="flex gap-4 justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default">Default</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Primary action</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Secondary action</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Secondary action</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">More actions</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Additional actions</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Icon tooltips</h3>
        <div className="flex gap-4 justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get help</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm-icon" allowNoTooltip={true}>
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Information</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Tooltip positions</h3>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">Above</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Shown above the trigger</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Shown to the right of the trigger</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">Below</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Shown below the trigger</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Shown to the left of the trigger</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};