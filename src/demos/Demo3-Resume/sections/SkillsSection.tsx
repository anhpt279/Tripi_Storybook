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
  TagsInput
} from '../../../components/ui';
import type { InterestSkill, WorkSkill } from '../types';
import { ResumeFormSection } from '../components';

interface SkillsSectionProps {
  interestSkillData: InterestSkill;
  workSkillData: WorkSkill;
  onUpdateInterestSkill: (field: keyof InterestSkill, value: string[]) => void;
  onUpdateWorkSkill: (field: keyof WorkSkill, value: string | string[]) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  interestSkillData,
  workSkillData,
  onUpdateInterestSkill,
  onUpdateWorkSkill
}) => {
  return (
    <div className="space-y-10">
      {/* Documentation */}
      <ResumeFormSection title="Interests and skills">
        <FormRow columns={1} spacing="lg">
          <FormItem>
            <FormLabel>Interests</FormLabel>
            <TagsInput
              value={interestSkillData.interests}
              onChange={(interests) => onUpdateInterestSkill('interests', interests)}
              placeholder="For example: photography, hiking, or reading..."
            />
          </FormItem>
          
          <FormItem>
            <FormLabel>Technical skills</FormLabel>
            <TagsInput
              value={interestSkillData.skills}
              onChange={(skills) => onUpdateInterestSkill('skills', skills)}
              placeholder="For example: JavaScript, Python, or SQL..."
            />
          </FormItem>
        </FormRow>
      </ResumeFormSection>

      {/* Documentation */}
      <ResumeFormSection title="Professional skills">
        <FormRow columns={2}>
          <FormItem>
            <FormLabel>Skill name</FormLabel>
            <Input
              value={workSkillData.name}
              onChange={(e) => onUpdateWorkSkill('name', e.target.value)}
              placeholder="Enter a skill"
            />
          </FormItem>
          
          <FormItem>
            <FormLabel>Proficiency</FormLabel>
            <SelectContainer width="full">
              <Select
                value={workSkillData.proficiency}
                onValueChange={(value) => onUpdateWorkSkill('proficiency', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select proficiency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </SelectContainer>
          </FormItem>
        </FormRow>
        
        <FormRow columns={1}>
          <FormItem>
            <FormLabel>Soft skills</FormLabel>
            <TagsInput
              value={workSkillData.softSkills}
              onChange={(softSkills) => onUpdateWorkSkill('softSkills', softSkills)}
              placeholder="For example: communication, leadership..."
            />
          </FormItem>
        </FormRow>
      </ResumeFormSection>
    </div>
  );
}; 