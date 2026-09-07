import React from 'react';
import {
  FormRow,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContainer,
  CitySelect,
  TagsInput
} from '../../../components/ui';
import type { Education, ResumeListKey } from '../types';
import { DynamicListSection, YearMonthSelector } from '../components';

interface EducationSectionProps {
  items: Education[];
  onAdd: (listKey: ResumeListKey, itemType: 'education') => void;
  onUpdate: (listKey: ResumeListKey, id: string, field: string, value: any) => void;
  onRemove: (listKey: ResumeListKey, id: string) => void;
  hasItemContent: (item: Education) => boolean;
  newlyAddedIds?: Set<string>;
  deletingIds?: Set<string>;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  items,
  onAdd,
  onUpdate,
  onRemove,
  hasItemContent,
  newlyAddedIds,
  deletingIds
}) => {
  const renderEducationItem = (item: Education, _index: number) => (
    <div className="space-y-4">
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.school}
            onChange={(e) => onUpdate('educations', item.id, 'school', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.faculty}
            onChange={(e) => onUpdate('educations', item.id, 'faculty', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <SelectContainer width="full">
            <Select
              value={item.degree}
              onValueChange={(value) => onUpdate('educations', item.id, 'degree', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Enter details" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
              </SelectContent>
            </Select>
          </SelectContainer>
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <SelectContainer width="full">
            <Select
              value={item.status}
              onValueChange={(value) => onUpdate('educations', item.id, 'status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Enter details" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
              </SelectContent>
            </Select>
          </SelectContainer>
        </FormItem>
      </FormRow>
      
      {/* Education dates and current status */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <CitySelect
            value={item.city}
            onValueChange={(value) => onUpdate('educations', item.id, 'city', value)}
            placeholder="Enter details"
            width="full"
            level="city"
            changeOnSelect={true}
          />
        </FormItem>
        
        <FormItem>
          {/* Documentation */}
        </FormItem>
      </FormRow>
      
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <YearMonthSelector
            value={item.startDate}
            onChange={(value) => onUpdate('educations', item.id, 'startDate', value)}
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <YearMonthSelector
            value={item.endDate}
            onChange={(value) => onUpdate('educations', item.id, 'endDate', value)}
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation：related content */}
      <FormRow columns={1}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <TagsInput
            value={item.achievements}
            onChange={(achievements) => onUpdate('educations', item.id, 'achievements', achievements)}
            placeholder="Add an item, such as a title or description..."
          />
        </FormItem>
      </FormRow>
    </div>
  );

  return (
    <DynamicListSection
      title="Additional information"
      items={items}
      onAdd={() => onAdd('educations', 'education')}
      onRemove={(id) => onRemove('educations', id)}
      hasItemContent={hasItemContent}
      renderItem={renderEducationItem}
      emptyMessage="No items yet. Add one to get started."
      newlyAddedIds={newlyAddedIds}
      deletingIds={deletingIds}
    />
  );
}; 