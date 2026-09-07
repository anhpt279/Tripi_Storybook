import type { Meta } from '@storybook/react';
import { Popconfirm, Button } from '../../components/ui';

const meta: Meta = {
  title: 'Feedback/Popconfirm',
  component: Popconfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Basic usage
export const Default = {
  render: () => (
    <Popconfirm
      title="Confirm deletion"
      description="Are you sure you want to delete this item? "
      onConfirm={() => alert('Deleted')}
    >
      <Button variant="destructive">Delete item</Button>
    </Popconfirm>
  ),
};

// Delete item
export const Placement = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-12 bg-gray-50 rounded-xl">
      <div className="text-center">
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>
        <Popconfirm
          placement="top"
          title="Delete item"
          description="This action cannot be undone."
          onConfirm={() => alert('Delete item')}
        >
          <Button>This action cannot be undone.</Button>
        </Popconfirm>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>
        <Popconfirm
          placement="bottom"
          title="Delete item"
          description="This action cannot be undone."
          onConfirm={() => alert('Delete item')}
        >
          <Button>This action cannot be undone.</Button>
        </Popconfirm>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>
        <Popconfirm
          placement="left"
          title="Delete item"
          description="Delete item"
          onConfirm={() => alert('Delete item')}
        >
          <Button>This action cannot be undone.</Button>
        </Popconfirm>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-sm font-medium">Right</h3>
        <Popconfirm
          placement="right"
          title="Delete item"
          description="Delete item"
          onConfirm={() => alert('Delete item')}
        >
          <Button>This action cannot be undone.</Button>
        </Popconfirm>
      </div>
    </div>
  ),
};