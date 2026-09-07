import * as React from 'react';
import { useMemo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContainer,
} from './select';
import { Cascader, type CascaderOption, type CascaderValue } from './cascader';
import { cn } from '@/lib/utils';
  // Implementation detail
import levelData from '@province-city-china/level';
  // Implementation detail
const citySelectVariants = cva('', {
  variants: {
    level: {
      province: '', // Text
      city: '',     // Text
      area: '',     // Text（Text）
    },
  },
  defaultVariants: {
    level: 'area',
  },
});
  // Implementation detail
interface RegionData {
  code: string;
  name: string;
  children?: RegionData[];
}
  // Implementation detail
interface CitySelectValue {
  province?: { code: string; name: string };
  city?: { code: string; name: string };
  area?: { code: string; name: string };
}

// Component Props
interface CitySelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof citySelectVariants> {
  value?: CitySelectValue;
  onValueChange?: (value: CitySelectValue) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: 'auto' | 'full';
  allowClear?: boolean;
  /** Selected province, city, and area values. */
  changeOnSelect?: boolean;
}
  // Implementation detail
const transformRegionDataToCascaderOptions = (data: RegionData[]): CascaderOption[] => {
  return data.map(item => ({
    value: item.code,
    label: item.name,
    children: item.children ? transformRegionDataToCascaderOptions(item.children) : undefined,
  }));
};
  // Implementation detail
const transformCascaderValueToCitySelectValue = (
  cascaderValue: CascaderValue, 
  options: CascaderOption[]
): CitySelectValue => {
  const result: CitySelectValue = {};
  
  if (cascaderValue.length > 0) {
  // Implementation detail
    const province = options.find(opt => opt.value === cascaderValue[0]);
    if (province) {
      result.province = { code: province.value, name: province.label };
  // Implementation detail
      if (cascaderValue.length > 1 && province.children) {
        const city = province.children.find(opt => opt.value === cascaderValue[1]);
        if (city) {
          result.city = { code: city.value, name: city.label };
  // Implementation detail
          if (cascaderValue.length > 2 && city.children) {
            const area = city.children.find(opt => opt.value === cascaderValue[2]);
            if (area) {
              result.area = { code: area.value, name: area.label };
            }
          }
        }
      }
    }
  }
  
  return result;
};
  // Implementation detail
const transformCitySelectValueToCascaderValue = (citySelectValue: CitySelectValue): CascaderValue => {
  const result: CascaderValue = [];
  
  if (citySelectValue.province) {
    result.push(citySelectValue.province.code);
    
    if (citySelectValue.city) {
      result.push(citySelectValue.city.code);
      
      if (citySelectValue.area) {
        result.push(citySelectValue.area.code);
      }
    }
  }
  
  return result;
};
  // Implementation detail
const ProvinceSelect: React.FC<{
  value?: CitySelectValue;
  onValueChange?: (value: CitySelectValue) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: 'auto' | 'full';
  className?: string;
}> = ({
  value,
  onValueChange,
  placeholder = 'Select an option',
  disabled = false,
  width = 'auto',
  className,
}) => {
  // Implementation detail
  const provinces = useMemo(() => {
    return (levelData as RegionData[]).map(province => ({
      code: province.code,
      name: province.name,
    }));
  }, []);
  // Implementation detail
  const handleProvinceSelect = (provinceCode: string) => {
    const province = provinces.find(p => p.code === provinceCode);
    if (province) {
      onValueChange?.({
        province: { code: province.code, name: province.name }
      });
    }
  };

  const currentValue = value?.province?.code || '';
  const displayValue = value?.province?.name || '';

  return (
    <div className={cn('relative', className)}>
      <SelectContainer width={width}>
        <Select value={currentValue} onValueChange={handleProvinceSelect} disabled={disabled}>
          <SelectTrigger width={width}>
            <SelectValue placeholder={displayValue || placeholder} />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((province) => (
              <SelectItem key={province.code} value={province.code}>
                {province.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SelectContainer>
    </div>
  );
};
  // Implementation detail
const CascadeSelect: React.FC<{
  value?: CitySelectValue;
  onValueChange?: (value: CitySelectValue) => void;
  level: 'city' | 'area';
  placeholder?: string;
  disabled?: boolean;
  width?: 'auto' | 'full';
  allowClear?: boolean;
  changeOnSelect?: boolean;
  className?: string;
}> = ({
  value,
  onValueChange,
  level,
  placeholder = 'Select an option',
  disabled = false,
  width = 'auto',
  allowClear = true,
  changeOnSelect = false,
  className,
}) => {
  // Implementation detail
  const cascaderOptions = useMemo(() => {
    return transformRegionDataToCascaderOptions(levelData as RegionData[]);
  }, []);
  // Implementation detail
  const cascaderValue = useMemo(() => {
    return transformCitySelectValueToCascaderValue(value || {});
  }, [value]);
  // Implementation detail
  const maxLevel = level === 'city' ? 2 : 3;
  // Implementation detail
  const handleCascaderChange = React.useCallback((
    newCascaderValue: CascaderValue, 
    _selectedOptions: CascaderOption[]
  ) => {
    const newCitySelectValue = transformCascaderValueToCitySelectValue(newCascaderValue, cascaderOptions);
  // Implementation detail
    const limitedValue: CitySelectValue = {};
    if (newCitySelectValue.province) {
      limitedValue.province = newCitySelectValue.province;
      
      if (newCitySelectValue.city) {
        limitedValue.city = newCitySelectValue.city;
        
        if (level === 'area' && newCitySelectValue.area) {
          limitedValue.area = newCitySelectValue.area;
        }
      }
    }
    
    onValueChange?.(limitedValue);
  }, [cascaderOptions, onValueChange, level]);

  return (
    <Cascader
      options={cascaderOptions}
      value={cascaderValue}
      onChange={handleCascaderChange}
      placeholder={placeholder}
      disabled={disabled}
      width={width === 'full' ? 'fill' : width}
      maxLevel={maxLevel}
      allowClear={allowClear}
      changeOnSelect={changeOnSelect}
      className={className}
    />
  );
};
  // Implementation detail
const CitySelect = React.forwardRef<
  HTMLDivElement,
  CitySelectProps
>(({ 
  className, 
  value = {}, 
  onValueChange, 
  level = 'area', 
  placeholder = 'Select an option',
  disabled = false,
  width = 'auto',
  allowClear = true,
  changeOnSelect = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(citySelectVariants({ level }), className)}
      {...props}
    >
      {level === 'province' ? (
        <ProvinceSelect
          value={value}
          onValueChange={onValueChange}
          placeholder={placeholder}
          disabled={disabled}
          width={width}
          className={className}
        />
      ) : (
        <CascadeSelect
          value={value}
          onValueChange={onValueChange}
          level={level as 'city' | 'area'}
          placeholder={placeholder}
          disabled={disabled}
          width={width}
          allowClear={allowClear}
          changeOnSelect={changeOnSelect}
          className={className}
        />
      )}
    </div>
  );
});

CitySelect.displayName = 'CitySelect';

export { CitySelect, type CitySelectProps, type CitySelectValue }; 