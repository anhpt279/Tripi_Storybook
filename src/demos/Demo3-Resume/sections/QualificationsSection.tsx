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
  Typography
} from '../../../components/ui';
import type { 
  Award, 
  Paper, 
  Repository, 
  Patent, 
  SocialMedia,
  ResumeListKey 
} from '../types';
import { DynamicListSection, YearMonthSelector } from '../components';

interface QualificationsSectionProps {
  awards: Award[];
  papers: Paper[];
  repositories: Repository[];
  patents: Patent[];
  socialMedia: SocialMedia[];
  onAdd: (listKey: ResumeListKey, itemType: any) => void;
  onUpdate: (listKey: ResumeListKey, id: string, field: string, value: any) => void;
  onRemove: (listKey: ResumeListKey, id: string) => void;
  hasItemContent: (item: any) => boolean;
  newlyAddedIds?: Set<string>;
  deletingIds?: Set<string>;
}

export const QualificationsSection: React.FC<QualificationsSectionProps> = ({
  awards,
  papers,
  repositories,
  patents,
  socialMedia,
  onAdd,
  onUpdate,
  onRemove,
  hasItemContent,
  newlyAddedIds,
  deletingIds
}) => {
  // Implementation note
  const renderAwardItem = (item: Award, _index: number) => (
    <FormRow columns={3}>
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.name}
          onChange={(e) => onUpdate('awards', item.id, 'name', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.issuer}
          onChange={(e) => onUpdate('awards', item.id, 'issuer', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <YearMonthSelector
          value={item.date}
          onChange={(value) => onUpdate('awards', item.id, 'date', value)}
        />
      </FormItem>
    </FormRow>
  );

  // Implementation note
  const renderPaperItem = (item: Paper, _index: number) => (
    <div className="space-y-4">
      <FormRow columns={1}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.title}
            onChange={(e) => onUpdate('papers', item.id, 'title', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
      </FormRow>
      
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.journal}
            onChange={(e) => onUpdate('papers', item.id, 'journal', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            type="number"
            value={item.authorRank}
            onChange={(e) => onUpdate('papers', item.id, 'authorRank', parseInt(e.target.value) || 1)}
            placeholder="Enter details"
            min="1"
          />
        </FormItem>
      </FormRow>
      
      <FormRow columns={1}>
        <FormItem>
          <FormLabel>Enter details</FormLabel>
          <Input
            value={item.link}
            onChange={(e) => onUpdate('papers', item.id, 'link', e.target.value)}
            placeholder="Enter details"
          />
        </FormItem>
      </FormRow>
    </div>
  );

  // Implementation note
  const renderRepositoryItem = (item: Repository, _index: number) => (
    <FormRow columns={2}>
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <SelectContainer width="full">
          <Select
            value={item.type}
            onValueChange={(value) => onUpdate('repositories', item.id, 'type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Enter details" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="github">GitHub</SelectItem>
              <SelectItem value="gitlab">GitLab</SelectItem>
              <SelectItem value="gitee">Gitee</SelectItem>
              <SelectItem value="bitbucket">Bitbucket</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </SelectContainer>
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.url}
          onChange={(e) => onUpdate('repositories', item.id, 'url', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
    </FormRow>
  );

  // Implementation note
  const renderPatentItem = (item: Patent, _index: number) => (
    <FormRow columns={2}>
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.name}
          onChange={(e) => onUpdate('patents', item.id, 'name', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.number}
          onChange={(e) => onUpdate('patents', item.id, 'number', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
    </FormRow>
  );

  // Implementation note
  const renderSocialMediaItem = (item: SocialMedia, _index: number) => (
    <FormRow columns={3}>
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <SelectContainer width="full">
          <Select
            value={item.platform}
            onValueChange={(value) => onUpdate('socialMedia', item.id, 'platform', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Enter details" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sample value">Enter details</SelectItem>
              <SelectItem value="Sample value">Enter details</SelectItem>
              <SelectItem value="LinkedIn">LinkedIn</SelectItem>
              <SelectItem value="Twitter">Twitter</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="Sample value">Enter details</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </SelectContainer>
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.account}
          onChange={(e) => onUpdate('socialMedia', item.id, 'account', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
      
      <FormItem>
        <FormLabel>Enter details</FormLabel>
        <Input
          value={item.link}
          onChange={(e) => onUpdate('socialMedia', item.id, 'link', e.target.value)}
          placeholder="Enter details"
        />
      </FormItem>
    </FormRow>
  );

  return (
    <div>
      <div className="mb-6">
        <Typography variant="h2">Enter details</Typography>
      </div>

      <div className="space-y-10">
        {/* Documentation */}
        <DynamicListSection
          title="Additional information"
          items={awards}
          onAdd={() => onAdd('awards', 'award')}
          onRemove={(id) => onRemove('awards', id)}
          hasItemContent={hasItemContent}
          renderItem={renderAwardItem}
          emptyMessage="No items yet. Add one to get started."
          newlyAddedIds={newlyAddedIds}
          deletingIds={deletingIds}
        />

        {/* Documentation */}
        <DynamicListSection
          title="Additional information"
          items={papers}
          onAdd={() => onAdd('papers', 'paper')}
          onRemove={(id) => onRemove('papers', id)}
          hasItemContent={hasItemContent}
          renderItem={renderPaperItem}
          emptyMessage="No items yet. Add one to get started."
          newlyAddedIds={newlyAddedIds}
          deletingIds={deletingIds}
        />

        {/* Documentation */}
        <DynamicListSection
          title="Additional information"
          items={repositories}
          onAdd={() => onAdd('repositories', 'repository')}
          onRemove={(id) => onRemove('repositories', id)}
          hasItemContent={hasItemContent}
          renderItem={renderRepositoryItem}
          emptyMessage="No items yet. Add one to get started."
          newlyAddedIds={newlyAddedIds}
          deletingIds={deletingIds}
        />

        {/* Documentation */}
        <DynamicListSection
          title="Additional information"
          items={patents}
          onAdd={() => onAdd('patents', 'patent')}
          onRemove={(id) => onRemove('patents', id)}
          hasItemContent={hasItemContent}
          renderItem={renderPatentItem}
          emptyMessage="No items yet. Add one to get started."
          newlyAddedIds={newlyAddedIds}
          deletingIds={deletingIds}
        />

        {/* Documentation */}
        <DynamicListSection
          title="Additional information"
          items={socialMedia}
          onAdd={() => onAdd('socialMedia', 'socialMedia')}
          onRemove={(id) => onRemove('socialMedia', id)}
          hasItemContent={hasItemContent}
          renderItem={renderSocialMediaItem}
          emptyMessage="No items yet. Add one to get started."
          newlyAddedIds={newlyAddedIds}
          deletingIds={deletingIds}
        />
      </div>
    </div>
  );
}; 