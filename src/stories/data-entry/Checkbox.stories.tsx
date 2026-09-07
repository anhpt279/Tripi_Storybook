import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Checkbox, CheckboxLabel } from '../../components/ui';

const meta = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default（Basic usage）
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="default" {...args} />
      <CheckboxLabel htmlFor="default">
        Receive product updates
      </CheckboxLabel>
    </div>
  ),
};

// Checkbox examples
export const Examples: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      newsletter: true,
      marketing: false,
      analytics: true,
      essential: true,
    });

    const handlePreferenceChange = (key: string, checked: boolean) => {
      setPreferences(prev => ({
        ...prev,
        [key]: checked,
      }));
    };

    return (
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Receive product updates</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="newsletter"
                checked={preferences.newsletter}
                onCheckedChange={(checked) => handlePreferenceChange('newsletter', checked as boolean)}
              />
              <CheckboxLabel htmlFor="newsletter">
                Receive product updates
              </CheckboxLabel>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) => handlePreferenceChange('marketing', checked as boolean)}
              />
              <CheckboxLabel htmlFor="marketing">
                Receive product updates
              </CheckboxLabel>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) => handlePreferenceChange('analytics', checked as boolean)}
              />
              <CheckboxLabel htmlFor="analytics">
                Receive product updates
              </CheckboxLabel>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="essential"
                checked={preferences.essential}
                disabled
              />
              <CheckboxLabel htmlFor="essential">
                Sample label (Receive product updates)
              </CheckboxLabel>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Receive product updates</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-0.5" />
              <CheckboxLabel htmlFor="terms">
                Receive product updates<a href="#" className="text-primary underline">Receive product updates</a>Receive product updates<a href="#" className="text-primary underline">Receive product updates</a>
              </CheckboxLabel>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox id="updates" className="mt-0.5" />
              <CheckboxLabel htmlFor="updates">
                Receive product updates
              </CheckboxLabel>
            </div>
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Example: </h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>Checkbox examples: {preferences.newsletter ? 'Checkbox examples' : 'Checkbox examples'}</li>
            <li>Checkbox examples: {preferences.marketing ? 'Checkbox examples' : 'Checkbox examples'}</li>
            <li>Checkbox examples: {preferences.analytics ? 'Checkbox examples' : 'Checkbox examples'}</li>
            <li>Checkbox examples: {preferences.essential ? 'Checkbox examples' : 'Checkbox examples'}</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Receive product updates. ',
      },
    },
  },
};