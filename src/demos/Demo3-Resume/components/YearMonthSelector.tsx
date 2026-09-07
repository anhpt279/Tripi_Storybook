import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectContainer
} from '../../../components/ui';

interface YearMonthSelectorProps {
  value: string; // Expected format: "2025-05"
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const YearMonthSelector: React.FC<YearMonthSelectorProps> = ({ 
  value, 
  onChange,
  disabled = false,
  className
}) => {
  // Implementation note
  const [year, month] = value ? value.split('-') : ['', ''];
  
  // Build the year and month options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  
  // Implementation note
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  
  const handleYearChange = (newYear: string) => {
    const newMonth = month || '01';
    onChange(`${newYear}-${newMonth}`);
  };
  
  const handleMonthChange = (newMonth: string) => {
    const newYear = year || currentYear.toString();
    onChange(`${newYear}-${newMonth}`);
  };
  
  return (
    <div className={`flex gap-2 w-full ${className || ''}`}>
      <div className="flex-1">
        <SelectContainer width="full">
          <Select 
            value={year} 
            onValueChange={handleYearChange}
            disabled={disabled}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((yearOption) => (
                <SelectItem key={yearOption} value={yearOption.toString()}>
                  {yearOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectContainer>
      </div>
      
      <div className="flex-1">
        <SelectContainer width="full">
          <Select 
            value={month} 
            onValueChange={handleMonthChange}
            disabled={disabled}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((monthOption) => (
                <SelectItem key={monthOption.value} value={monthOption.value}>
                  {monthOption.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectContainer>
      </div>
    </div>
  );
}; 