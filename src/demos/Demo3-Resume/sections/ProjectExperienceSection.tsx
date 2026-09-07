import React from 'react';
import {
  FormRow,
  FormItem,
  FormLabel,
  Input,
  TagsInput
} from '../../../components/ui';
import type { ProjectExperience, ResumeListKey } from '../types';
import { DynamicListSection, YearMonthSelector } from '../components';

interface ProjectExperienceSectionProps {
  items: ProjectExperience[];
  onAdd: (listKey: ResumeListKey, itemType: 'projectExperience') => void;
  onUpdate: (listKey: ResumeListKey, id: string, field: string, value: any) => void;
  onRemove: (listKey: ResumeListKey, id: string) => void;
  hasItemContent: (item: ProjectExperience) => boolean;
  newlyAddedIds?: Set<string>;
  deletingIds?: Set<string>;
}

export const ProjectExperienceSection: React.FC<ProjectExperienceSectionProps> = ({
  items,
  onAdd,
  onUpdate,
  onRemove,
  hasItemContent,
  newlyAddedIds,
  deletingIds
}) => {
  const renderProjectExperienceItem = (item: ProjectExperience, _index: number) => (
    <div className="space-y-4">
      {/* Documentation：label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.organization}
            onChange={(e) => onUpdate('projectExperiences', item.id, 'organization', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.role}
            onChange={(e) => onUpdate('projectExperiences', item.id, 'role', e.target.value)}
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
            onChange={(value) => onUpdate('projectExperiences', item.id, 'startDate', value)}
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <YearMonthSelector
            value={item.endDate}
            onChange={(value) => onUpdate('projectExperiences', item.id, 'endDate', value)}
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation：related content */}
      <FormRow columns={1}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <TagsInput
            value={item.achievements}
            onChange={(achievements) => onUpdate('projectExperiences', item.id, 'achievements', achievements)}
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
      onAdd={() => onAdd('projectExperiences', 'projectExperience')}
      onRemove={(id) => onRemove('projectExperiences', id)}
      hasItemContent={hasItemContent}
      renderItem={renderProjectExperienceItem}
      emptyMessage="No items yet. Add one to get started."
      newlyAddedIds={newlyAddedIds}
      deletingIds={deletingIds}
    />
  );
}; 