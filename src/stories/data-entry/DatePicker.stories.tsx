import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker, DateRangePicker } from '../../components/ui';
import type { DateRange } from 'react-day-picker';

const meta = {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Select a date or date range using the calendar.',
    },
    disabled: {
      control: 'boolean',
      description: 'Select a date or date range using the calendar.',
    },
    formatStr: {
      control: 'text',
      description: 'Select a date or date range using the calendar.',
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Select a date or date range using the calendar.',
    },
    showDropdowns: {
      control: 'boolean',
      description: 'Select a date or date range using the calendar.',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// sample - sample
export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <DatePicker
        {...args}
        value={date}
        onChange={setDate}
      />
    );
  },
  args: {
    placeholder: 'Enter a value',
    width: 'auto',
    showDropdowns: true,
  },
};

// sample
export const RangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

    return (
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        placeholder="Enter a value"
        width="auto"
        showDropdowns={true}
      />
    );
  },
};

// sample
export const Examples: Story = {
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>(undefined);
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

    return (
      <div className="space-y-6 w-full max-w-lg">
        <div>
          <h3 className="text-sm font-medium mb-2">Single date</h3>
          <DatePicker
            value={date1}
            onChange={setDate1}
            placeholder="Enter a value"
            width="auto"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Date range</h3>
          <DatePicker
            value={date2}
            onChange={setDate2}
            placeholder="Enter a value"
            width="auto"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Full-width picker</h3>
          <DatePicker
            disabled
            placeholder="Enter a value"
            width="auto"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Custom date format</h3>
          <DatePicker
            value={date1}
            onChange={setDate1}
            placeholder="Enter a value"
            width="full"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Disabled picker</h3>
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            placeholder="Enter a value"
            width="auto"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Calendar dropdowns</h3>
          <DatePicker
            value={date1}
            onChange={setDate1}
            placeholder="Enter a value"
            showDropdowns={false}
            width="auto"
          />
        </div>
      </div>
    );
  },
};