import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/base/button';
import { Toaster, toast } from '@/components/ui/feedback/toast';

const meta: Meta = {
  title: 'Feedback/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() => toast('A default notification')}
      >
        Show default Toast
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast('Task complete', {
            description: 'Your file was uploaded successfully',
          })
        }
      >
        With description Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast.success('Action successful', {
            description: 'Your settings have been saved',
          })
        }
      >
        Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        variant="destructive"
        onClick={() =>
          toast.error('Request failed', {
            description: 'Please check your connection and try again.',
          })
        }
      >
        Error Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast.warning('Request failed', {
            description: 'Please check your connection and try again.',
          })
        }
      >
        Warning Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast.info('Information', {
            description: 'Please check your connection and try again.！',
          })
        }
      >
        Information Toast
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast.loading('Loading data...', {
            duration: 2000,
          })
        }
      >
        Loading Toast
      </Button>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast('Request failed', {
            description: 'The operation is still in progress.',
            action: {
              label: 'View details',
              onClick: () => {
                console.log('Request failed');
                toast.success('Request failed');
              },
            },
          })
        }
      >
        Notification
      </Button>
    </div>
  ),
};

export const PromiseToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() => {
          const promise = new Promise<string>((resolve: (value: string) => void, reject: (reason?: string) => void) => {
            setTimeout(() => {
              if (Math.random() > 0.5) {
                resolve('Request failed');
              } else {
                reject('Request failed');
              }
            }, 2000);
          });

          toast.promise(promise, {
            loading: 'Loading...',
            success: 'sample！',
            error: 'Request failed',
          });
        }}
      >
        Promise Toast
      </Button>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() =>
          toast('Loading 10000ms...', {
            duration: 10000,
          })
        }
      >
        Please check your connection and try again.
      </Button>
    </div>
  ),
};

export const MultipleToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <Button
        onClick={() => {
          toast.success('Request failed');
          setTimeout(() => toast.error('Request failed'), 500);
          setTimeout(() => toast.warning('Request failed'), 1000);
        }}
      >
        Multiple Toasts
      </Button>
    </div>
  ),
};

export const DismissAll: Story = {
  render: () => (
    <div className="space-y-4 flex gap-4">
      <Button
        onClick={() => {
          toast('sample 1');
          toast('sample 2');
          toast('sample 3');
        }}
      >
        Show multiple Toasts
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.dismiss()}
      >
        Dismiss all
      </Button>
    </div>
  ),
};