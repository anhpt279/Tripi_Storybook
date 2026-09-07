import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownContainer,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  Button
} from '@/components/ui';
import {
  User,
  Settings,
  ChevronDown,
  Edit,
  Copy
} from 'lucide-react';

const meta: Meta<typeof DropdownTrigger> = {
  title: 'BASE/Dropdown',
  component: DropdownTrigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'select' },
      options: ['auto', 'full'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Dropdown component
export const Default: Story = {
  render: (args) => (
    <DropdownContainer>
      <Dropdown>
        <DropdownTrigger {...args}>
          Dropdown
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </DropdownContainer>
  ),
  args: {
    width: 'auto',
    variant: 'default',
    placeholder: 'Please select',
  },
};

// Trigger width examples
export const TriggerWidthVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full" style={{ width: '400px' }}>
      <div className="border border-dashed border-gray-300 p-4">
        <label className="text-sm font-medium mb-2 block">width="auto" (min-w-[180px])</label>
        <DropdownContainer width="auto">
          <Dropdown>
            <DropdownTrigger width="auto">Auto Width</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
        <p className="text-xs text-muted-foreground mt-2">Minimum width: 180px</p>
      </div>

      <div className="border border-dashed border-gray-300 p-4">
        <label className="text-sm font-medium mb-2 block">width="full"</label>
        <DropdownContainer width="full">
          <Dropdown>
            <DropdownTrigger width="full">Full Width</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
        <p className="text-xs text-muted-foreground mt-2">Trigger fills the container width</p>
      </div>
    </div>
  ),
};

// Trigger variant
export const TriggerVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">variant="default"</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger variant="default">Default Variant</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">variant="ghost"</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger variant="ghost">Ghost Variant</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>
    </div>
  ),
};

// Trigger width examples
export const TriggerIconAndSuffix: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Select an option</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger>No Icon</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Select an option</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger icon={<User className="h-4 w-4" />}>
              With Icon
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Select an option</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger suffix={<ChevronDown className="h-4 w-4" />}>
              With Suffix
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Icon and suffix</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger
              icon={<User className="h-4 w-4" />}
              suffix={<ChevronDown className="h-4 w-4" />}
            >
              Icon + Suffix
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>
    </div>
  ),
};

// asChild variant
export const AsChildVariant: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">asChild={false} (default)</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger>Default Trigger</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">asChild={true}</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger asChild>
              <Button variant="outline">
                Custom Button Trigger
              </Button>
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      </div>
    </div>
  ),
};

// Content Dropdown examples
export const ContentSizeVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full" style={{ width: '600px' }}>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">size="sm" (min-w-[8rem])</label>
          <DropdownContainer>
            <Dropdown>
              <DropdownTrigger>Small</DropdownTrigger>
              <DropdownContent size="sm">
                <DropdownItem>Short</DropdownItem>
                <DropdownItem>Option</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </DropdownContainer>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">size="md" (min-w-[12rem])</label>
          <DropdownContainer>
            <Dropdown>
              <DropdownTrigger>Medium</DropdownTrigger>
              <DropdownContent size="md">
                <DropdownItem>Medium Option</DropdownItem>
                <DropdownItem>Another Option</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </DropdownContainer>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">size="lg" (min-w-[16rem])</label>
          <DropdownContainer>
            <Dropdown>
              <DropdownTrigger>Large</DropdownTrigger>
              <DropdownContent size="lg">
                <DropdownItem>Large Option with More Dropdown examples</DropdownItem>
                <DropdownItem>Another Longer Option</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </DropdownContainer>
        </div>
      </div>

      <div className="border border-dashed border-gray-300 p-4">
        <label className="text-sm font-medium mb-2 block">size="auto" (w-auto)</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger>Auto Size</DropdownTrigger>
            <DropdownContent size="auto">
              <DropdownItem>Select an option</DropdownItem>
              <DropdownItem>Select an option</DropdownItem>
              <DropdownItem>Select an option</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
        <p className="text-xs text-muted-foreground mt-2">Select an option</p>
      </div>

      <div className="border border-dashed border-gray-300 p-4">
        <label className="text-sm font-medium mb-2 block">size="full" (w-full)</label>
        <DropdownContainer>
          <Dropdown>
            <DropdownTrigger>Full Width</DropdownTrigger>
            <DropdownContent size="full">
              <DropdownItem>Dropdown examples 1</DropdownItem>
              <DropdownItem>Second option</DropdownItem>
              <DropdownItem>Dropdown examples 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
        <p className="text-xs text-muted-foreground mt-2">Select an option</p>
      </div>
    </div>
  ),
};

// Item variant
export const ItemVariants: Story = {
  render: () => (
    <DropdownContainer>
      <Dropdown>
        <DropdownTrigger>Item Variants</DropdownTrigger>
        <DropdownContent>
          <DropdownItem variant="default">Default Item</DropdownItem>
          <DropdownItem variant="destructive">Destructive Item</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </DropdownContainer>
  ),
};

// Item Dropdown examples
export const ItemIconAndSuffix: Story = {
  render: () => (
    <DropdownContainer>
      <Dropdown>
        <DropdownTrigger>Item Icons</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Select an option</DropdownItem>
          <DropdownItem icon={<Edit className="h-4 w-4" />}>
            Select an option
          </DropdownItem>
          <DropdownItem suffix={<ChevronDown className="h-4 w-4" />}>
            Select an option
          </DropdownItem>
          <DropdownItem
            icon={<Copy className="h-4 w-4" />}
            suffix={<Settings className="h-4 w-4" />}
          >
            Icon and suffix
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </DropdownContainer>
  ),
};

// Item Dropdown examples
export const ItemDisabledState: Story = {
  render: () => (
    <DropdownContainer>
      <Dropdown>
        <DropdownTrigger>Disabled Items</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Select an option</DropdownItem>
          <DropdownItem disabled>Select an option</DropdownItem>
          <DropdownItem disabled icon={<Edit className="h-4 w-4" />}>
            Icon and suffix
          </DropdownItem>
          <DropdownItem disabled variant="destructive">
            Icon and suffix
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </DropdownContainer>
  ),
};

// Content Dropdown examples
export const ContentComposition: Story = {
  render: () => (
    <DropdownContainer>
      <Dropdown>
        <DropdownTrigger>Content Elements</DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>group label</DropdownLabel>
          <DropdownItem>Select an option</DropdownItem>
          <DropdownItem>Select an option</DropdownItem>
          <DropdownSeparator />
          <DropdownLabel>Select an option</DropdownLabel>
          <DropdownItem variant="destructive">Select an option</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </DropdownContainer>
  ),
};