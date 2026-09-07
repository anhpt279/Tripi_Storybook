import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TagsInput } from '../../components/ui/data-entry/tags-input';

const meta: Meta<typeof TagsInput> = {
  title: 'Data Entry/TagsInput',
  component: TagsInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Add skills. Add skills, Add skills. ',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Enter tags separated by commas.',
    },
    maxTags: {
      control: { type: 'number' },
      description: 'Enter tags separated by commas.',
    },
    duplicateCheck: {
      control: { type: 'boolean' },
      description: 'Enter tags separated by commas.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Enter tags separated by commas.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage（Tags input examples）
export const Default: Story = {
  render: (args) => {
    const [tags, setTags] = useState<string[]>([]);

    return (
      <div className="w-80">
        <TagsInput
          {...args}
          value={tags}
          onChange={setTags}
        />
      </div>
    );
  },
  args: {
    placeholder: 'Tags input examples...',
  },
};

// Tags input examples
export const Controlled: Story = {
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);

    return (
      <div className="w-80">
        <TagsInput
          {...args}
          value={tags}
          onChange={setTags}
        />
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">Example: </p>
          <pre className="text-xs bg-gray-100 p-2 rounded mt-2">
            {JSON.stringify(tags, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  args: {
    placeholder: 'Tags input examples...',
  },
};

// Tags input examples
export const BasicUsage: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);

    return (
      <div className="w-80">
        <TagsInput
          value={tags}
          onChange={setTags}
          placeholder="Tags input examples..."
        />
      </div>
    );
  },
};

// Tags input examples
export const MaxTags: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['JavaScript', 'React']);

    return (
      <div className="w-80">
        <TagsInput
          value={tags}
          onChange={setTags}
          maxTags={5}
          placeholder="5..."
        />
        <p className="text-sm text-muted-foreground mt-2">
          Tags input examples {tags.length}/5 Tags input examples
        </p>
      </div>
    );
  },
};

// Tags input examples
export const AllowDuplicates: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['test']);

    return (
      <div className="w-80">
        <TagsInput
          value={tags}
          onChange={setTags}
          duplicateCheck={false}
          placeholder="Tags input examples..."
        />
        <p className="text-sm text-muted-foreground mt-2">
          Tags input examples "test" - Tags input examples
        </p>
      </div>
    );
  },
};

// Tags input examples
export const Disabled: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Disabled']);

    return (
      <div className="w-80">
        <TagsInput
          disabled
          value={tags}
          onChange={setTags}
          placeholder="Tags input examples..."
        />
      </div>
    );
  },
};

// Tags input examples
export const WithCallbacks: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['Tags input examples']);
    const [events, setEvents] = useState<string[]>([]);

    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), event]); // 5
    };

    return (
      <div className="w-80">
        <TagsInput
          value={tags}
          onChange={setTags}
          onTagAdd={(tag) => addEvent(`Tags input examples: ${tag}`)}
          onTagRemove={(tag, index) => addEvent(`Tags input examples: ${tag} (Tags input examples ${index})`)}
          placeholder="Tags input examples..."
        />
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Example: </p>
          <div className="text-xs bg-gray-100 p-2 rounded space-y-1">
            {events.length === 0 ? (
              <p className="text-muted-foreground">Add skills</p>
            ) : (
              events.map((event, index) => (
                <div key={index}>{event}</div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  },
};

// Tags input examples
export const WithInitialTags: Story = {
  args: {
    value: ['Frontend', 'React', 'TypeScript', 'Tailwind CSS'],
    placeholder: 'Tags input examples...',
  },
};