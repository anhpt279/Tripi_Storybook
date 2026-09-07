import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Steps, type StepItem } from '../../components/ui';

const meta = {
  title: 'Navigation/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    clickable: {
      control: 'boolean',
    },
    current: {
      control: { type: 'number', min: 0, max: 4 },
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSteps: StepItem[] = [
  {
    id: 'step1',
    title: 'Personal information',
    description: 'Enter your basic information',
  },
  {
    id: 'step2',
    title: 'Contact information',
    description: 'Provide a phone number and email',
  },
  {
    id: 'step3',
    title: 'Identity verification',
    description: 'Upload an identity document',
  },
  {
    id: 'step4',
    title: 'Complete registration',
    description: 'Confirm and submit information',
  },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    current: 1,
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Steps {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    size: 'sm',
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Steps {...args} />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    clickable: true,
  },
  render: (args) => {
    const [current, setCurrent] = useState(args.current || 0);

    return (
      <div className="w-full max-w-4xl">
        <Steps
          {...args}
          current={current}
          onStepClick={(step) => setCurrent(step)}
        />
      </div>
    );
  },
};

export const WithCustomStatus: Story = {
  args: {
    steps: [
      {
        id: 'step1',
        title: 'Order confirmation',
        description: 'Confirm order information',
        status: 'completed',
      },
      {
        id: 'step2',
        title: 'Payment',
        description: 'Choose a payment method',
        status: 'current',
      },
      {
        id: 'step3',
        title: 'Delivery',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
      {
        id: 'step4',
        title: 'Done',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
    ],
  },
  render: (args) => (
    <div className="w-full max-w-4xl">
      <Steps {...args} />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    steps: [
      {
        id: 'step1',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'completed',
      },
      {
        id: 'step2',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'error',
      },
      {
        id: 'step3',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
    ],
  },
};



export const LongProcess: Story = {
  args: {
    steps: [
      {
        id: 'step1',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
      },
      {
        id: 'step2',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
      },
      {
        id: 'step3',
        title: 'Review details',
        description: 'UI/UX design',
      },
      {
        id: 'step4',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
      },
      {
        id: 'step5',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
      },
      {
        id: 'step6',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
      },
    ],
    current: 3,
    size: 'sm',
  },
};

export const Interactive: Story = {
  args: {
    steps: basicSteps,
  },
  render: () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
      if (current < basicSteps.length - 1) {
        setCurrent(current + 1);
      }
    };

    const handlePrev = () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    };

    const handleStepClick = (step: number) => {
      setCurrent(step);
    };

    return (
      <div className="space-y-8">
        <Steps
          steps={basicSteps}
          current={current}
          clickable
          onStepClick={handleStepClick}
        />
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Continue
          </button>
          <button
            onClick={handleNext}
            disabled={current === basicSteps.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            Continue
          </button>
        </div>
        <div className="text-center text-sm text-gray-600">
          sample: {current + 1} / {basicSteps.length}
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  args: {
    steps: basicSteps,
  },
  render: () => {
    return (
      <div className="space-y-12 max-w-4xl">
        <div>
          <h3 className="text-lg font-medium mb-4">Continue</h3>
          <Steps steps={basicSteps} current={1} />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Continue</h3>
          <Steps steps={basicSteps} current={1} size="sm" />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Continue</h3>
          <Steps
            steps={[
              { id: '1', title: 'Review details', description: 'Confirm the information before continuing.', status: 'completed' },
              { id: '2', title: 'Review details', description: 'Confirm the information before continuing.', status: 'current' },
              { id: '3', title: 'Review details', description: 'Confirm the information before continuing.', status: 'error' },
              { id: '4', title: 'Review details', description: 'Confirm the information before continuing.', status: 'pending' },
            ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Continue</h3>
          <Steps
            steps={[
              { id: '1', title: 'Review details' },
              { id: '2', title: 'Review details' },
              { id: '3', title: 'Review details' },
              { id: '4', title: 'Review details' },
            ]}
            current={2}
          />
        </div>
      </div>
    );
  },
};

// sample
export const Vertical: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="max-w-md">
      <Steps {...args} />
    </div>
  ),
};

export const VerticalSmall: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    size: 'sm',
  },
  render: (args) => (
    <div className="max-w-md">
      <Steps {...args} />
    </div>
  ),
};

export const VerticalClickable: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    clickable: true,
  },
  render: (args) => {
    const [current, setCurrent] = useState(args.current || 0);

    return (
      <div className="max-w-md">
        <Steps
          {...args}
          current={current}
          onStepClick={(step) => setCurrent(step)}
        />
      </div>
    );
  },
};

export const VerticalWithCustomStatus: Story = {
  args: {
    steps: [
      {
        id: 'step1',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'completed',
      },
      {
        id: 'step2',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'completed',
      },
      {
        id: 'step3',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'current',
      },
      {
        id: 'step4',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
      {
        id: 'step5',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
    ],
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="max-w-md">
      <Steps {...args} />
    </div>
  ),
};

export const VerticalWithError: Story = {
  args: {
    steps: [
      {
        id: 'step1',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'completed',
      },
      {
        id: 'step2',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'error',
      },
      {
        id: 'step3',
        title: 'Review details',
        description: 'Confirm the information before continuing.',
        status: 'pending',
      },
    ],
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="max-w-md">
      <Steps {...args} />
    </div>
  ),
};