import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CitySelect, type CitySelectValue } from '../../components/ui/data-entry/city-select';

const meta: Meta<typeof CitySelect> = {
  title: 'Data Entry/CitySelect',
  component: CitySelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'location selector Select location selector Cascader Select a location（Select a location, location selector）. Select a location. ',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'radio' },
      options: ['province', 'city', 'area'],
      description: 'Example: province（location selector）, city（location selector）, area（location selector）',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Example description',
    },
    width: {
      control: { type: 'radio' },
      options: ['auto', 'full'],
      description: 'Example description',
    },
    changeOnSelect: {
      control: { type: 'boolean' },
      description: 'Select a location. Select a location',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// location selector
const ControlledTemplate = (args: any) => {
  const [value, setValue] = useState<CitySelectValue>({});

  return (
    <div className="w-96">
      <CitySelect
        {...args}
        value={value}
        onValueChange={setValue}
      />
      <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
        <div className="font-medium mb-2">Example: </div>
        <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};

// Basic usage
export const Default: Story = {
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: 'Enter a value',
    width: 'auto',
  },
};

// location selector
export const ProvinceOnly: Story = {
  render: ControlledTemplate,
  args: {
    level: 'province',
    placeholder: 'Enter a value',
    width: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Select Select a location. ',
      },
    },
  },
};

// location selector
export const CityLevel: Story = {
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: 'Enter a value',
    width: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Cascader Select a location. ',
      },
    },
  },
};

// Sample label (Select a location)
export const AreaLevel: Story = {
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: 'Enter a value',
    width: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Cascader Select a location. ',
      },
    },
  },
};

// location selector
export const FullWidth: Story = {
  render: ControlledTemplate,
  args: {
    level: 'area',
    width: 'full',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. ',
      },
    },
  },
};

// location selector
export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    level: 'area',
    disabled: true,
    width: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. ',
      },
    },
  },
};

// location selector
export const WithDefaultValue: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<CitySelectValue>({
      province: { code: '110000', name: 'location selector' },
      city: { code: '110100', name: 'location selector' },
      area: { code: '110101', name: 'location selector' },
    });

    return (
      <div className="w-96">
        <CitySelect
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
          <div className="font-medium mb-2">Example: </div>
          <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>
        </div>
      </div>
    );
  },
  args: {
    level: 'area',
    width: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. ',
      },
    },
  },
};

// Sample label (Select a location)
export const CitySelectionWithChangeOnSelect: Story = {
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: 'Enter a value',
    width: 'auto',
    changeOnSelect: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'location selector"location selector"Select a location. location selector changeOnSelect Select a location. location selector（Select a location）, location selector"location selector"Select a location. Select a location"location selector → location selector"Select a location. ',
      },
    },
  },
};