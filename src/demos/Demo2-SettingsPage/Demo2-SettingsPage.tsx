import React, { useState } from 'react';
import { 
  TopNav,
  PageContainer,
  PageHeaderWrapper,
  Typography,
  Switch,
  Input,
  BlockLayout,
  Button,
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectContainer
} from '../../components/ui';
import {
  FormSection,
  FormItem,
  FormLabel,
  FormControl
} from '../../components/ui/data-entry/form';

// Implementation note
interface BaseSetting {
  id: string;
  title: string;
  description: string;
}

interface SectionSetting extends BaseSetting {
  type: 'section';
}

interface SwitchSetting extends BaseSetting {
  type: 'switch';
  defaultValue: boolean;
}

interface SelectSetting extends BaseSetting {
  type: 'select';
  defaultValue: string;
  options: { value: string; label: string; }[];
}

type Setting = SectionSetting | SwitchSetting | SelectSetting;

interface SettingsGroup {
  title: string;
  settings: Setting[];
}

// Implementation note
const settingsGroups: SettingsGroup[] = [
  {
    title: 'Profile',
    settings: [
      {
        id: 'profile',
        type: 'section',
        title: 'Personal information',
        description: 'Manage your profile details and contact information.',
      },
    ]
  },
  {
    title: 'Notifications',
    settings: [
      {
        id: 'email-notifications',
        type: 'switch',
        title: 'Email notifications',
        description: 'Receive updates and account activity by email.',
        defaultValue: true,
      },
      {
        id: 'push-notifications',
        type: 'switch',
        title: 'Push notifications',
        description: 'Receive alerts from the application on your device.',
        defaultValue: false,
      },
      {
        id: 'sms-notifications',
        type: 'switch',
        title: 'SMS notifications',
        description: 'Receive important account alerts by text message.',
        defaultValue: true,
      },
    ]
  },
  {
    title: 'Privacy',
    settings: [
      {
        id: 'profile-visibility',
        type: 'select',
        title: 'Profile visibility',
        description: 'Choose who can view your profile.',
        options: [
          { value: 'public', label: 'Everyone' },
          { value: 'friends', label: 'Friends only' },
          { value: 'private', label: 'Only me' },
        ],
        defaultValue: 'friends',
      },
      {
        id: 'activity-status',
        type: 'switch',
        title: 'Activity status',
        description: 'Show when you are active.',
        defaultValue: false,
      },
      {
        id: 'search-indexing',
        type: 'switch',
        title: 'Search indexing',
        description: 'Allow your profile to appear in search results.',
        defaultValue: true,
      },
    ]
  },
  {
    title: 'Security',
    settings: [
      {
        id: 'two-factor',
        type: 'switch',
        title: 'Two-factor authentication',
        description: 'Add an extra layer of security to your account.',
        defaultValue: false,
      },
      {
        id: 'login-alerts',
        type: 'switch',
        title: 'Login alerts',
        description: 'Notify me when a new login is detected.',
        defaultValue: true,
      },
    ]
  },
  {
    title: 'Preferences',
    settings: [
      {
        id: 'language',
        type: 'select',
        title: 'Language',
        description: 'Choose the language used throughout the application.',
        options: [
          { value: 'zh-CN', label: 'Chinese (Simplified)' },
          { value: 'zh-TW', label: 'Chinese (Traditional)' },
          { value: 'en', label: 'English' },
          { value: 'ja', label: 'Japanese' },
        ],
        defaultValue: 'zh-CN',
      },
      {
        id: 'timezone',
        type: 'select',
        title: 'Time zone',
        description: 'Set the time zone used for dates and notifications.',
        options: [
          { value: 'Asia/Shanghai', label: 'Shanghai (UTC+8)' },
          { value: 'Asia/Tokyo', label: 'Tokyo (UTC+9)' },
          { value: 'America/New_York', label: 'New York (UTC-5)' },
          { value: 'Europe/London', label: 'London (UTC+0)' },
        ],
        defaultValue: 'Asia/Shanghai',
      },
      {
        id: 'auto-save',
        type: 'switch',
        title: 'Auto-save',
        description: 'Save changes automatically as you work.',
        defaultValue: true,
      },
    ]
  }
];

export const Demo2: React.FC = () => {
  const [settings, setSettings] = useState<Record<string, any>>(() => {
    // Implementation note
    const initialSettings: Record<string, any> = {};
    settingsGroups.forEach(group => {
      group.settings.forEach(setting => {
        if (setting.type === 'switch' || setting.type === 'select') {
          initialSettings[setting.id] = setting.defaultValue;
        }
      });
    });
    return initialSettings;
  });

  // Implementation note
  const [profileData, setProfileData] = useState({
    name: 'shadcn',
    email: 'm@example.com',
    phone: '+86 138 0000 0000',
  });

  const handleSwitchChange = (settingId: string, checked: boolean) => {
    setSettings(prev => ({
      ...prev,
      [settingId]: checked
    }));
  };

  const handleSelectChange = (settingId: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [settingId]: value
    }));
  };

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    console.log('Action triggered:', profileData);
    // Implementation note
  };

  const handleResetSettings = () => {
    console.log('Action triggered');
    // Implementation note
    const defaultSettings: Record<string, any> = {};
    settingsGroups.forEach(group => {
      group.settings.forEach(setting => {
        if (setting.type === 'switch' || setting.type === 'select') {
          defaultSettings[setting.id] = setting.defaultValue;
        }
      });
    });
    setSettings(defaultSettings);
  };

  // Implementation note
  const handleHelpClick = () => {
    console.log('Action triggered');
  };

  const handleAvatarClick = () => {
    console.log('Action triggered');
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Documentation */}
      <TopNav
        isLoggedIn={true}
        userName="shadcn"
        avatarFallback="CN"
        onHelpClick={handleHelpClick}
        onAvatarClick={handleAvatarClick}
        onLogoClick={handleLogoClick}
      />
      
      {/* Documentation */}
      <div className="flex-1 overflow-auto">
        <PageContainer variant="centered" padding="nav-layout">
          {/* Documentation */}
          <PageHeaderWrapper
            variant="title-with-actions"
            title="Settings"
            actions={
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleResetSettings}>
                  Reset settings
                </Button>
                <Button onClick={handleSaveProfile}>
                  Save
                </Button>
              </div>
            }
          />

          {/* Documentation */}
          <div className="space-y-8">
            {settingsGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {/* Documentation */}
                <div className="mb-6">
                  <Typography variant="h2">
                    {group.title}
                  </Typography>
                </div>

                {/* Documentation - TextBlockLayoutMedium */}
                <BlockLayout>
                  <div className="space-y-6">
                    {group.settings.map((setting, settingIndex) => {
                      if (setting.type === 'section') {
                        // Implementation note
                        return (
                          <FormSection 
                            key={setting.id}
                            title={setting.title}
                            subtitle={setting.description}
                          >
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input
                                  value={profileData.name}
                                  onChange={(e) => handleProfileChange('name', e.target.value)}
                                  placeholder="Enter username"
                                />
                              </FormControl>
                            </FormItem>
                            
                            <FormItem>
                              <FormLabel>Email address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  value={profileData.email}
                                  onChange={(e) => handleProfileChange('email', e.target.value)}
                                  placeholder="Enter your email address"
                                />
                              </FormControl>
                            </FormItem>
                            
                            <FormItem>
                              <FormLabel>Phone number</FormLabel>
                              <FormControl>
                                <Input
                                  value={profileData.phone}
                                  onChange={(e) => handleProfileChange('phone', e.target.value)}
                                  placeholder="Enter your phone number"
                                />
                              </FormControl>
                            </FormItem>
                          </FormSection>
                        );
                      }

                      if (setting.type === 'switch') {
                        return (
                          <div key={setting.id}>
                            <div className="flex items-center gap-4">
                              <div className="flex-1 space-y-1">
                                <Typography variant="h3">
                                  {setting.title}
                                </Typography>
                                <Typography variant="muted">
                                  {setting.description}
                                </Typography>
                              </div>
                              <Switch
                                checked={settings[setting.id] || false}
                                onCheckedChange={(checked) => handleSwitchChange(setting.id, checked)}
                              />
                            </div>
                            {/* No items yet. Add one to get started. */}
                            {settingIndex < group.settings.length - 1 && (
                              <div className="h-px bg-border mt-6"></div>
                            )}
                          </div>
                        );
                      }

                      if (setting.type === 'select') {
                        const selectSetting = setting as SelectSetting;
                        return (
                          <div key={setting.id}>
                            <div className="flex items-center justify-between">
                              <div className="flex-1 space-y-1 pr-4">
                                <Typography variant="h3">
                                  {setting.title}
                                </Typography>
                                <Typography variant="muted">
                                  {setting.description}
                                </Typography>
                              </div>
                              <div>
                                <SelectContainer>
                                  <Select
                                    value={settings[setting.id] || selectSetting.defaultValue}
                                    onValueChange={(value) => handleSelectChange(setting.id, value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {selectSetting.options.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </SelectContainer>
                              </div>
                            </div>
                            {/* No items yet. Add one to get started. */}
                            {settingIndex < group.settings.length - 1 && (
                              <div className="h-px bg-border mt-6"></div>
                            )}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </BlockLayout>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default Demo2; 