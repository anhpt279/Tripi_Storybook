import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem, RadioGroupLabel } from '../../components/ui';

const meta = {
  title: 'Data Entry/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'cards'],
      description: 'variant：Radio group examples',
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Example: Radio group examples',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Radio group examples（Default）
export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option1" {...args}>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option1" id="option1" />
        <span>Option A</span>
      </RadioGroupLabel>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option2" id="option2" />
        <span>Option A</span>
      </RadioGroupLabel>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option3" id="option3" />
        <span>Option A</span>
      </RadioGroupLabel>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Option A. ',
      },
    },
  },
};

// Radio group examples
export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option1" layout="horizontal" {...args}>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option1" id="horizontal-option1" />
        <span>Option A</span>
      </RadioGroupLabel>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option2" id="horizontal-option2" />
        <span>Option A</span>
      </RadioGroupLabel>
      <RadioGroupLabel variant="default">
        <RadioGroupItem value="option3" id="horizontal-option3" />
        <span>Option A</span>
      </RadioGroupLabel>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Option A. ',
      },
    },
  },
};

// Radio group examples
export const Cards: Story = {
  render: (args) => (
    <div className="w-full max-w-2xl">
      <RadioGroup defaultValue="pro" variant="cards" {...args}>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="starter" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Starter Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="pro" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Pro Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="enterprise" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Enterprise Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Option A. ',
      },
    },
  },
};

// Radio group examples - Radio group examples
export const CardsHorizontal: Story = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <RadioGroup defaultValue="pro" variant="cards" layout="horizontal" {...args}>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="starter" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Starter Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="pro" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Pro Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
        <RadioGroupLabel variant="cards">
          <RadioGroupItem value="enterprise" />
          <div className="grid gap-1 font-normal">
            <div className="font-medium">Enterprise Plan</div>
            <div className="text-muted-foreground text-xs leading-snug">
              Option A
            </div>
          </div>
        </RadioGroupLabel>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Option A, Option A. ',
      },
    },
  },
};

// Radio group examples
export const WithDisabledOptions: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Radio group examples - Radio group examples</h3>
        <RadioGroup defaultValue="option1">
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option1" id="simple-option1" />
            <span>Option A</span>
          </RadioGroupLabel>
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option2" id="simple-option2" disabled />
            <span className="text-muted-foreground">Option A</span>
          </RadioGroupLabel>
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option3" id="simple-option3" />
            <span>Option A</span>
          </RadioGroupLabel>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Radio group examples - Radio group examples</h3>
        <RadioGroup defaultValue="option1" layout="horizontal">
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option1" id="horizontal-simple-option1" />
            <span>Option A</span>
          </RadioGroupLabel>
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option2" id="horizontal-simple-option2" disabled />
            <span className="text-muted-foreground">Option A</span>
          </RadioGroupLabel>
          <RadioGroupLabel variant="default">
            <RadioGroupItem value="option3" id="horizontal-simple-option3" />
            <span>Option A</span>
          </RadioGroupLabel>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Radio group examples - Radio group examples</h3>
        <div className="w-full max-w-md">
          <RadioGroup defaultValue="plan1" variant="cards">
            <RadioGroupLabel variant="cards">
              <RadioGroupItem value="plan1" />
              <div className="grid gap-1 font-normal">
                <div className="font-medium">Option A</div>
                <div className="text-muted-foreground text-xs">Option A</div>
              </div>
            </RadioGroupLabel>
            <RadioGroupLabel variant="cards">
              <RadioGroupItem value="plan2" disabled />
              <div className="grid gap-1 font-normal">
                <div className="font-medium text-muted-foreground">Option A</div>
                <div className="text-muted-foreground text-xs">Option A</div>
              </div>
            </RadioGroupLabel>
            <RadioGroupLabel variant="cards">
              <RadioGroupItem value="plan3" />
              <div className="grid gap-1 font-normal">
                <div className="font-medium">Option A</div>
                <div className="text-muted-foreground text-xs">Option A</div>
              </div>
            </RadioGroupLabel>
          </RadioGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Option A. ',
      },
    },
  },
};