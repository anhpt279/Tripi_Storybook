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
import type { WorkExperience, ResumeListKey } from '../types';
import { DynamicListSection, YearMonthSelector } from '../components';

interface WorkExperienceSectionProps {
  items: WorkExperience[];
  onAdd: (listKey: ResumeListKey, itemType: 'workExperience') => void;
  onUpdate: (listKey: ResumeListKey, id: string, field: string, value: any) => void;
  onRemove: (listKey: ResumeListKey, id: string) => void;
  hasItemContent: (item: WorkExperience) => boolean;
  newlyAddedIds?: Set<string>;
  deletingIds?: Set<string>;
}

export const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  items,
  onAdd,
  onUpdate,
  onRemove,
  hasItemContent,
  newlyAddedIds,
  deletingIds
}) => {
  const renderWorkExperienceItem = (item: WorkExperience, _index: number) => (
    <div className="space-y-4">
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.organization}
            onChange={(e) => onUpdate('workExperiences', item.id, 'organization', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.title}
            onChange={(e) => onUpdate('workExperiences', item.id, 'title', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <YearMonthSelector
            value={item.startDate}
            onChange={(value) => onUpdate('workExperiences', item.id, 'startDate', value)}
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <YearMonthSelector
            value={item.endDate}
            onChange={(value) => onUpdate('workExperiences', item.id, 'endDate', value)}
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <CitySelect
            value={item.city}
            onValueChange={(value) => onUpdate('workExperiences', item.id, 'city', value)}
            placeholder="Enter details"
            width="full"
            level="city"
            changeOnSelect={true}
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.department}
            onChange={(e) => onUpdate('workExperiences', item.id, 'department', e.target.value)}
            placeholder="Enter relevant data"
          />
        </FormItem>
      </FormRow>
      
      {/* Use a 1:2 label-to-field layout */}
      <div className="grid grid-cols-3 gap-4">
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <SelectContainer width="full">
            <Select
              value={item.type}
              onValueChange={(value) => onUpdate('workExperiences', item.id, 'type', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Enter details" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
                <SelectItem value="Sample value">Enter details</SelectItem>
              </SelectContent>
            </Select>
          </SelectContainer>
        </FormItem>
        
        <FormItem className="col-span-2">
          <FormLabel>Enter details</FormLabel>
          <TagsInput
            value={item.achievements}
            onChange={(achievements) => onUpdate('workExperiences', item.id, 'achievements', achievements)}
            placeholder="Add an item, such as a title or description..."
          />
        </FormItem>
      </div>
    </div>
  );

  return (
    <DynamicListSection
      title="Additional information"
      items={items}
      onAdd={() => onAdd('workExperiences', 'workExperience')}
      onRemove={(id) => onRemove('workExperiences', id)}
      hasItemContent={hasItemContent}
      renderItem={renderWorkExperienceItem}
      emptyMessage="No items yet. Add one to get started."
      newlyAddedIds={newlyAddedIds}
      deletingIds={deletingIds}
    />
  );
}; 