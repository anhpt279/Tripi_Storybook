import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';

const meta = {
  title: 'Feedback/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Sides: Story = {
  render: () => {
    const sides = ['top', 'right', 'bottom', 'left'] as const;

    return (
      <div className="flex flex-wrap gap-2">
        {sides.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Sheet from {side}</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the {side}.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-muted-foreground">
                Sheet content goes here.
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open controlled sheet</Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Controlled sheet</SheetTitle>
              <SheetDescription>
                Open state is managed with React state.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4 text-sm text-muted-foreground">
              Use the close button or click outside to dismiss.
            </div>
            <SheetFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </>
    );
  },
};
