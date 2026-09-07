import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Button, Typography } from '../../components/ui';
import { useState } from 'react';

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Modal title',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
      description: 'Modal size',
    },
    children: {
      control: 'text',
      description: 'Modal content',
    },
    footer: {
      control: false,
      description: 'Modal footer content (Modal examples)',
    },
    open: {
      control: 'boolean',
      description: 'Open and close state',
    },
    onOpenChange: {
      action: 'opened/closed',
      description: 'Open and close state',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Modal examples
const ContentAreaMarker = ({ height = 'h-24' }: { height?: string }) => (
  <div className={`${height} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`}>
              <Typography variant="body" className="text-purple-600">
      content area
    </Typography>
  </div>
);

export const Default: Story = {
  args: {
    title: 'Example title',
    children: <ContentAreaMarker />,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal content</Button>
        <Modal {...args} open={open} onOpenChange={setOpen}>
          {args.children}
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal content</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Modal examples"
          size="sm"
          footer={
            <>
              <Button variant="outline">Cancel</Button>
              <Button>Modal content</Button>
            </>
          }
        >
          <ContentAreaMarker height="h-16" />
        </Modal>
      </>
    );
  },
};

export const Medium: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal content</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Modal examples"
          size="md"
          footer={
            <>
              <Button variant="outline">Cancel</Button>
              <Button>Modal content</Button>
            </>
          }
        >
          <ContentAreaMarker height="h-20" />
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal content</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Modal examples"
          size="lg"
          footer={
            <>
              <Button variant="outline">Cancel</Button>
              <Button>Modal content</Button>
            </>
          }
        >
          <ContentAreaMarker height="h-32" />
        </Modal>
      </>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal content</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Modal examples"
          size="md"
        >
          <ContentAreaMarker height="h-24" />
        </Modal>
      </>
    );
  },
};
