import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button, Popconfirm } from '../../../components/ui';

interface DeleteButtonProps {
  hasContent: boolean;
  onDelete: () => void;
  itemIndex?: number;
  confirmMessage?: string;
  className?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  hasContent,
  onDelete,
  itemIndex: _itemIndex,
  confirmMessage = 'Are you sure you want to remove this item?',
  className,
}) => {
  const baseClassName = `transition-opacity opacity-0 group-hover:opacity-100 ${className || ''}`;

  if (hasContent) {
    return (
      <Popconfirm
        description={confirmMessage}
        onConfirm={onDelete}
        confirmText="Are you sure you want to remove this item?"
        cancelText="Cancel"
      >
        <Button
          variant="ghost"
          size="sm-icon"
          className={baseClassName}
          allowNoTooltip={true}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </Popconfirm>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm-icon"
      onClick={onDelete}
      className={baseClassName}
      tooltip="Remove item"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};
