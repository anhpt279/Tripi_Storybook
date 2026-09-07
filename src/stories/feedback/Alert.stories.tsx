import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui';

const meta: Meta<typeof Alert> = {
  title: 'FEEDBACK/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'destructive', 'success', 'warning'],
    },
    showIcon: {
      control: { type: 'boolean' },
    },
    closable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Alert examples
export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Information alert</AlertTitle>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </>
    ),
  },
};

// Different alert types
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert showIcon>
        <AlertTitle>Information alert（Default）</AlertTitle>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </Alert>

      <Alert variant="success" showIcon>
        <AlertTitle>Your changes have been saved.</AlertTitle>
        <AlertDescription>Alert examples！Your changes have been saved. </AlertDescription>
      </Alert>

      <Alert variant="warning" showIcon>
        <AlertTitle>Your changes have been saved.</AlertTitle>
        <AlertDescription>Example: Your changes have been saved. </AlertDescription>
      </Alert>

      <Alert variant="destructive" showIcon>
        <AlertTitle>Your changes have been saved.</AlertTitle>
        <AlertDescription>Example: Your changes have been saved. </AlertDescription>
      </Alert>
    </div>
  ),
};

// Alert examples
export const WithIcon: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="success" showIcon>
        <AlertTitle>Your changes have been saved.</AlertTitle>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </Alert>

      <Alert variant="warning" showIcon>
        <AlertTitle>Your changes have been saved.</AlertTitle>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </Alert>
    </div>
  ),
};

// Alert examples
export const Closable: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      { id: 1, type: 'info' as const, title: 'Account notice', content: 'Alert examples X Your changes have been saved. ' },
      { id: 2, type: 'success' as const, title: 'Account notice', content: 'Your changes have been saved. ' },
      { id: 3, type: 'warning' as const, title: 'Account notice', content: 'Your changes have been saved. ' },
    ]);

    const removeAlert = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.type}
            showIcon
            onClose={() => removeAlert(alert.id)}
          >
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.content}</AlertDescription>
          </Alert>
        ))}
        {alerts.length === 0 && (
          <p className="text-muted-foreground text-center py-8">
            Your changes have been saved. Your changes have been saved.
          </p>
        )}
      </div>
    );
  },
};

// Sample label (Your changes have been saved.)
export const OnlyDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" showIcon>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </Alert>

      <Alert variant="success" showIcon>
        <AlertDescription>Alert examples！</AlertDescription>
      </Alert>

      <Alert variant="warning" showIcon onClose={() => console.log('Alert examples')}>
        <AlertDescription>Your changes have been saved. </AlertDescription>
      </Alert>
    </div>
  ),
};