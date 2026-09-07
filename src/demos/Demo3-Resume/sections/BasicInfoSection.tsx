import React from 'react';
import { CheckCircle } from 'lucide-react';
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
  Typography
} from '../../../components/ui';
import type { BasicInfo } from '../types';
import type { CitySelectValue } from '../../../components/ui/data-entry/city-select';
import { ResumeFormSection } from '../components';

interface BasicInfoSectionProps {
  data: BasicInfo;
  onUpdate: (field: keyof BasicInfo, value: string | CitySelectValue) => void;
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  data,
  onUpdate
}) => {
  return (
    <ResumeFormSection title="Basic information">
      {/* label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Full name</FormLabel>
          <Input
            value={data.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            placeholder="Enter your full name"
            disabled={data.isNameVerified}
          />
          {data.isNameVerified && (
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-muted-foreground" />
              <Typography variant="muted" className="text-xs text-muted-foreground">
                Name verified
              </Typography>
            </div>
          )}
        </FormItem>
        
        <FormItem>
          <FormLabel>Gender</FormLabel>
          <SelectContainer width="full">
            <Select
              value={data.gender}
              onValueChange={(value) => onUpdate('gender', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
                <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </SelectContainer>
        </FormItem>
      </FormRow>
      
      {/* label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Phone number</FormLabel>
          <Input
            value={data.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            placeholder="Enter your phone number"
            disabled={data.isPhoneVerified}
          />
          {data.isPhoneVerified && (
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-muted-foreground" />
              <Typography variant="muted" className="text-xs text-muted-foreground">
                Phone number verified
              </Typography>
            </div>
          )}
        </FormItem>
        
        <FormItem>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            placeholder="Enter your email address"
          />
        </FormItem>
      </FormRow>
      
      {/* label and value */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Current city</FormLabel>
          <CitySelect
            value={data.city}
            onValueChange={(value) => onUpdate('city', value)}
            placeholder="Select your city"
            width="full"
            level="city"
            changeOnSelect={true}
          />
        </FormItem>
        
        <FormItem>
          <FormLabel>Hometown</FormLabel>
          <Input
            value={data.hometown}
            onChange={(e) => onUpdate('hometown', e.target.value)}
            placeholder="Enter your hometown"
          />
        </FormItem>
      </FormRow>
      
      {/* Documentation */}
      <FormRow columns={2}>
        <FormItem>
          <FormLabel>Expected salary per month</FormLabel>
          <Input
            value={data.expectedSalary}
            onChange={(e) => onUpdate('expectedSalary', e.target.value)}
            placeholder="For example: 30000, 30k, or 20k-40k"
          />
        </FormItem>
        <FormItem>
          {/* No items yet. Add one to get started. */}
        </FormItem>
      </FormRow>
    </ResumeFormSection>
  );
}; 