import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    defaultValue: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Tabs Component
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-2">
        <h3 className="text-lg font-medium">Account information</h3>
        <p className="text-sm text-muted-foreground">
          Overview.
        </p>
        <div className="space-y-2">
          <div>
            <label className="text-sm font-medium">Username</label>
            <input className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="user@Tab examples.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Display name</label>
            <input className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="Username" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-2">
        <h3 className="text-lg font-medium">Password settings</h3>
        <p className="text-sm text-muted-foreground">
          Overview.
        </p>
        <div className="space-y-2">
          <div>
            <label className="text-sm font-medium">Current password</label>
            <input type="password" className="w-full mt-1 px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="text-sm font-medium">New password</label>
            <input type="password" className="w-full mt-1 px-3 py-2 border rounded-md" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Three-tab Tab examples
export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-primary">Overview</h4>
              <p className="text-2xl font-medium">12,345</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-green-600">Overview</h4>
              <p className="text-2xl font-medium">8,921</p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Overview</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Overview</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Overview</span>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <span>Overview</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Tab examples
export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="flex space-x-6">
      <TabsList className="flex flex-col h-fit">
        <TabsTrigger value="general" className="w-full justify-start">Overview</TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">Overview</TabsTrigger>
        <TabsTrigger value="appearance" className="w-full justify-start">Overview</TabsTrigger>
        <TabsTrigger value="advanced" className="w-full justify-start">Overview</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="general" className="space-y-4 mt-0">
          <div>
            <h3 className="text-lg font-medium">Overview</h3>
            <p className="text-sm text-muted-foreground">Overview. </p>
            <div className="space-y-3 mt-4">
              <div>
                <label className="text-sm font-medium">Overview</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>Overview</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Overview</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>Tab examples (GMT+8)</option>
                  <option>Tab examples (GMT-5)</option>
                </select>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="space-y-4 mt-0">
          <div>
            <h3 className="text-lg font-medium">Overview</h3>
            <p className="text-sm text-muted-foreground">Overview. </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <span>Overview</span>
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span>Overview</span>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4 mt-0">
          <div>
            <h3 className="text-lg font-medium">Overview</h3>
            <p className="text-sm text-muted-foreground">Overview. </p>
            <div className="space-y-3 mt-4">
              <div>
                <label className="text-sm font-medium">Overview</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md">
                  <option>Overview</option>
                  <option>Overview</option>
                  <option>Overview</option>
                </select>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4 mt-0">
          <div>
            <h3 className="text-lg font-medium">Overview</h3>
            <p className="text-sm text-muted-foreground">Overview. </p>
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <span>Overview</span>
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span>Overview</span>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

// Tab examples
export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Overview</TabsTrigger>
        <TabsTrigger value="tab3">Overview</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Overview.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Overview</h3>
          <p className="text-sm text-muted-foreground">
            Overview.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Tab examples
export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Overview</TabsTrigger>
          <TabsTrigger value="orders">Overview</TabsTrigger>
          <TabsTrigger value="customers">Overview</TabsTrigger>
          <TabsTrigger value="reports">Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Overview</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Tab examples A</h4>
                <p className="text-sm text-muted-foreground">Overview</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Tab examples B</h4>
                <p className="text-sm text-muted-foreground">Overview</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Tab examples C</h4>
                <p className="text-sm text-muted-foreground">Overview</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Overview</h3>
            <p className="text-muted-foreground">Overview. </p>
          </div>
        </TabsContent>
        <TabsContent value="customers" className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Overview</h3>
            <p className="text-muted-foreground">Overview. </p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Overview</h3>
            <p className="text-muted-foreground">Overview. </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};