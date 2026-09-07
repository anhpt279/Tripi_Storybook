import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectContainer,
  MultiSelectTrigger,
  MultiSelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '../../components/ui';
import { Settings, Globe, Building2, Mail } from 'lucide-react';

const meta = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Multiple select with groups
export const Default: Story = {
  render: () => (
    <SelectContainer>
      <Select>
        <SelectTrigger display="text-only">
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};

// Select variants
export const SingleWithIcon: Story = {
  render: () => (
    <SelectContainer>
      <Select>
        <SelectTrigger display="with-icon" icon={<Settings className="h-4 w-4" />}>
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="basic">Configuration option</SelectItem>
          <SelectItem value="advanced">Configuration option</SelectItem>
          <SelectItem value="system">Configuration option</SelectItem>
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};

// Select variants
export const MultipleTextOnly: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const options = [
      { value: 'frontend', label: 'Frontend sample' },
      { value: 'backend', label: 'Backend sample' },
      { value: 'fullstack', label: 'Full Stack sample' },
      { value: 'mobile', label: 'Example option' },
      { value: 'devops', label: 'DevOps sample' },
      { value: 'design', label: 'UI/UX sample' },
    ];

    const selectedLabels = options.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);

    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };

    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };

    return (
      <SelectContainer>
        <Select open={isOpen} onOpenChange={setIsOpen}>
          <MultiSelectTrigger
            display="text-only"
            selectedValues={selectedValues}
            selectedLabels={selectedLabels}
            onRemoveValue={handleRemove}
            placeholder="Enter a value"
            maxDisplay={2}
          />
          <SelectContent>
            {options.map((option) => (
              <MultiSelectItem
                key={option.value}
                value={option.value}
                selected={selectedValues.includes(option.value)}
                onToggle={handleToggle}
              >
                {option.label}
              </MultiSelectItem>
            ))}
          </SelectContent>
        </Select>
      </SelectContainer>
    );
  },
};

// Select variants
export const WithGroups: Story = {
  render: () => (
    <SelectContainer>
      <Select>
        <SelectTrigger display="with-icon" icon={<Building2 className="h-4 w-4" />}>
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Configuration option</SelectLabel>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Configuration option</SelectLabel>
            <SelectItem value="nodejs">Node.js</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="go">Go</SelectItem>
            <SelectItem value="java">Java</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Configuration option</SelectLabel>
            <SelectItem value="mysql">MySQL</SelectItem>
            <SelectItem value="postgresql">PostgreSQL</SelectItem>
            <SelectItem value="mongodb">MongoDB</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};

// Select variants
export const MultipleWithGroups: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['email', 'push']);
    const [isOpen, setIsOpen] = useState(false);

    const options = {
      'Channels': [
        { value: 'email', label: 'Email' },
        { value: 'sms', label: 'SMS' },
        { value: 'push', label: 'Push notifications' },
      ],
      'Frequency': [
        { value: 'realtime', label: 'Real-time' },
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
      ],
      'Topics': [
        { value: 'system', label: 'System' },
        { value: 'security', label: 'Security' },
        { value: 'marketing', label: 'Marketing' },
      ],
    };

    const allOptions = Object.values(options).flat();
    const selectedLabels = allOptions.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);

    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };

    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };

    return (
      <SelectContainer>
        <Select open={isOpen} onOpenChange={setIsOpen}>
          <MultiSelectTrigger
            display="with-icon"
            icon={<Mail className="h-4 w-4" />}
            selectedValues={selectedValues}
            selectedLabels={selectedLabels}
            onRemoveValue={handleRemove}
            placeholder="Enter a value"
            maxDisplay={2}
          />
          <SelectContent>
            {Object.entries(options).map(([groupName, groupOptions], groupIndex) => (
              <div key={groupName}>
                {groupIndex > 0 && <SelectSeparator />}
                <SelectGroup>
                  <SelectLabel>{groupName}</SelectLabel>
                  {groupOptions.map((option) => (
                    <MultiSelectItem
                      key={option.value}
                      value={option.value}
                      selected={selectedValues.includes(option.value)}
                      onToggle={handleToggle}
                    >
                      {option.label}
                    </MultiSelectItem>
                  ))}
                </SelectGroup>
              </div>
            ))}
          </SelectContent>
        </Select>
      </SelectContainer>
    );
  },
};

// sample
export const LongList: Story = {
  render: () => (
    <SelectContainer>
      <Select>
        <SelectTrigger display="with-icon" icon={<Globe className="h-4 w-4" />}>
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 20 }, (_, i) => (
            <SelectItem key={i} value={`country-${i}`}>
              sample {i + 1} - sample
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};

// sample
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <SelectContainer>
        <Select disabled>
          <SelectTrigger display="text-only">
            <SelectValue placeholder="Enter a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </SelectContainer>

      <SelectContainer>
        <Select disabled>
          <MultiSelectTrigger
            display="with-icon"
            icon={<Settings className="h-4 w-4" />}
            selectedValues={['option1', 'option2']}
            selectedLabels={{ option1: 'Option 1', option2: 'Option 2' }}
            placeholder="Enter a value"
          />
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </SelectContainer>
    </div>
  ),
};

// sample
export const DisabledItems: Story = {
  render: () => (
    <SelectContainer>
      <Select>
        <SelectTrigger display="text-only">
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Configuration option</SelectItem>
          <SelectItem value="option2" disabled>
            Configuration option
          </SelectItem>
          <SelectItem value="option3">Configuration option</SelectItem>
          <SelectItem value="option4" disabled>
            Configuration option
          </SelectItem>
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};

// sample
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <SelectContainer width="full">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Enter a value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sample">Configuration option</SelectItem>
          <SelectItem value="sample">Configuration option</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
          <SelectItem value="sample">Configuration option</SelectItem>
        </SelectContent>
      </Select>
    </SelectContainer>
  ),
};