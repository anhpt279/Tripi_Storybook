import React, { useState } from 'react';
import { 
  Sidebar,
  PageContainer,
  PageHeaderWrapper,
  Table, 
  TableWrapper, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell,
  StatusCell,
  ActionButtonsCell,
  IdCell,
  NameCell,
  Button,
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectContainer,
  MultiSelectTrigger,
  MultiSelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '../../components/ui';
import { useResponsiveSidebar } from '@/lib/utils';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Implementation note
const mockUsers = [
  {
    id: 1,
    name: 'Zhang San',
    email: 'zhangsan@example.com',
    role: 'Administrator',
    status: 'active',
    createTime: '2024-01-15',
    lastLogin: '2024-01-20 14:30'
  },
  {
    id: 2,
    name: 'Li Si',
    email: 'lisi@example.com',
    role: 'Manager',
    status: 'inactive',
    createTime: '2024-01-10',
    lastLogin: '2024-01-18 09:15'
  },
  {
    id: 3,
    name: 'Wang Wu',
    email: 'wangwu@example.com',
    role: 'Analyst',
    status: 'active',
    createTime: '2024-01-05',
    lastLogin: '2024-01-19 16:45'
  },
  {
    id: 4,
    name: 'Zhao Liu',
    email: 'zhaoliu@example.com',
    role: 'Editor',
    status: 'pending',
    createTime: '2024-01-12',
    lastLogin: 'Not available'
  },
  {
    id: 5,
    name: 'Qian Qi',
    email: 'qianqi@example.com',
    role: 'Viewer',
    status: 'active',
    createTime: '2024-01-08',
    lastLogin: '2024-01-20 11:20'
  }
];

// Implementation note
const chartDatasets = {
  '7Text': [
    { date: '1.14', desktop: 320, mobile: 180 },
    { date: '1.15', desktop: 385, mobile: 220 },
    { date: '1.16', desktop: 410, mobile: 250 },
    { date: '1.17', desktop: 380, mobile: 200 },
    { date: '1.18', desktop: 420, mobile: 280 },
    { date: '1.19', desktop: 450, mobile: 320 },
    { date: '1.20', desktop: 480, mobile: 350 }
  ],
  '30 days': [
    { date: '12.22', desktop: 280, mobile: 150 },
    { date: '12.24', desktop: 245, mobile: 135 },
    { date: '12.26', desktop: 290, mobile: 165 },
    { date: '12.28', desktop: 310, mobile: 175 },
    { date: '12.30', desktop: 325, mobile: 185 },
    { date: '1.1', desktop: 295, mobile: 160 },
    { date: '1.3', desktop: 340, mobile: 195 },
    { date: '1.5', desktop: 385, mobile: 220 },
    { date: '1.7', desktop: 365, mobile: 210 },
    { date: '1.9', desktop: 395, mobile: 235 },
    { date: '1.11', desktop: 420, mobile: 245 },
    { date: '1.13', desktop: 415, mobile: 250 },
    { date: '1.15', desktop: 435, mobile: 265 },
    { date: '1.17', desktop: 440, mobile: 275 },
    { date: '1.19', desktop: 460, mobile: 285 },
    { date: '1.21', desktop: 450, mobile: 295 }
  ],
  '3Text': [
    { date: 'October', desktop: 780, mobile: 485 },
    { date: 'November', desktop: 820, mobile: 510 },
    { date: 'November', desktop: 865, mobile: 535 },
    { date: 'November', desktop: 920, mobile: 580 },
    { date: 'December', desktop: 955, mobile: 615 },
    { date: 'December', desktop: 1010, mobile: 650 },
    { date: 'December', desktop: 1050, mobile: 680 },
    { date: 'January', desktop: 1150, mobile: 745 },
    { date: 'January', desktop: 1220, mobile: 785 },
    { date: 'January', desktop: 1284, mobile: 820 }
  ]
};

// Implementation note - Implementation noteTagImplementation notevariant
const getStatusVariant = (status: string): 'success' | 'warning' | 'destructive' | 'default' => {
  switch (status) {
    case 'active':
      return 'success';
    case 'inactive':
      return 'destructive';
    case 'pending':
      return 'warning';
    default:
      return 'default';
  }
};

// Implementation note
const getStatusText = (status: string): string => {
  switch (status) {
    case 'active':
      return 'Active';
    case 'inactive':
      return 'Inactive';
    case 'pending':
      return 'Pending';
    default:
      return status;
  }
};

// Implementation note
const departmentOptions = [
  { value: 'tech', label: 'Technology' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'product', label: 'Product' },
  { value: 'operations', label: 'Operations' },
];

// Implementation note
const departmentLabels = departmentOptions.reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {} as Record<string, string>);

// Implementation note
const StatCard: React.FC<{
  title: string;
  value: string;
  trend: string;
  trendIcon: React.ReactNode;
  description: string;
  footer: string;
}> = ({ title, value, trend, trendIcon, description, footer }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow @container/card">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-start justify-between">
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="items-center border px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex gap-1 rounded-lg text-xs">
            {trendIcon}
            {trend}
          </div>
        </div>
        <div className="tracking-tight @[250px]/card:text-3xl text-2xl font-medium tabular-nums">{value}</div>
      </div>
      <div className="flex p-6 pt-0 flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {description}
          {trendIcon}
        </div>
        <div className="text-muted-foreground">{footer}</div>
      </div>
    </div>
  );
};

// Implementation note
const TimePeriodToggle: React.FC<{
  selected: string;
  onSelect: (period: string) => void;
}> = ({ selected, onSelect }) => {
  const periods = ['Last 7 days', 'Last 30 days', 'Last 3 months'];

  return (
    <Tabs value={`Text${selected}`} onValueChange={(value) => onSelect(value.replace('Text', ''))}>
      <TabsList>
        {periods.map((period) => (
          <TabsTrigger key={period} value={period} className="font-medium">
            {period}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

// Implementation note
const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up size-3">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const TrendingDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down size-3">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
    <polyline points="16 17 22 17 22 11"></polyline>
  </svg>
);

export const Demo: React.FC = () => {
  const { collapsed, onCollapsedChange } = useResponsiveSidebar('full');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [isDepartmentSelectOpen, setIsDepartmentSelectOpen] = useState(false);
  const [chartPeriod, setChartPeriod] = useState<string>('30 days');

  const handleExport = () => {
    console.log('Action triggered');
  };

  const handleEditUser = (userId: number) => {
    console.log('Action triggered:', userId);
  };

  const handleDeleteUser = (userId: number) => {
    console.log('Action triggered:', userId);
  };

  const handleDepartmentToggle = (value: string, selected: boolean) => {
    if (selected) {
      setSelectedDepartments(prev => [...prev, value]);
    } else {
      setSelectedDepartments(prev => prev.filter(v => v !== value));
    }
  };

  const handleDepartmentRemove = (value: string) => {
    setSelectedDepartments(prev => prev.filter(v => v !== value));
  };

  const currentChartData = chartDatasets[chartPeriod as keyof typeof chartDatasets];

  return (
    <div className="flex h-screen w-full">
      {/* Documentation */}
      <div>
        <Sidebar 
          collapsed={collapsed}
          onCollapsedChange={onCollapsedChange}
        />
      </div>
      
      {/* Documentation */}
      <PageContainer variant="full">
          {/* Documentation */}
          <PageHeaderWrapper
            variant="title-with-toolbar"
            title="Data analytics dashboard"
            filters={
              <>
                <SelectContainer>
                  <Select defaultValue="all-status">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-status" className="font-medium">All statuses</SelectItem>
                      <SelectItem value="active" className="font-medium">Active</SelectItem>
                      <SelectItem value="inactive" className="font-medium">Inactive</SelectItem>
                      <SelectItem value="pending" className="font-medium">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </SelectContainer>
                
                <SelectContainer>
                  <Select open={isDepartmentSelectOpen} onOpenChange={setIsDepartmentSelectOpen}>
                    <MultiSelectTrigger
                      display="text-only"
                      selectedValues={selectedDepartments}
                      selectedLabels={departmentLabels}
                      onRemoveValue={handleDepartmentRemove}
                      placeholder="Filter by department"
                      maxDisplay={2}
                    />
                    <SelectContent>
                      {departmentOptions.map((option) => (
                        <MultiSelectItem
                          key={option.value}
                          value={option.value}
                          selected={selectedDepartments.includes(option.value)}
                          onToggle={handleDepartmentToggle}
                        >
                          {option.label}
                        </MultiSelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </SelectContainer>
                
                <SelectContainer>
                  <Select defaultValue="recent-30">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent-30" className="font-medium">Last 30 days</SelectItem>
                      <SelectItem value="recent-7" className="font-medium">Last 7 days</SelectItem>
                      <SelectItem value="recent-1" className="font-medium">Yesterday</SelectItem>
                      <SelectItem value="custom" className="font-medium">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </SelectContainer>
              </>
            }
            toolbarActions={
              <Button variant="outline" onClick={handleExport}>
                Export
              </Button>
            }
          />
          
          {/* Documentation */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                title="Total users"
                value="1,284"
                trend="+12.5%"
                trendIcon={<TrendingUpIcon />}
                description="Users in the selected period"
                footer="Compared with the previous period"
              />
              
              <StatCard
                title="Active users"
                value="952"
                trend="+8.2%"
                trendIcon={<TrendingUpIcon />}
                description="Users active this week"
                footer="Last 7 days"
              />
              
              <StatCard
                title="Conversion rate"
                value="78.6%"
                trend="-2.1%"
                trendIcon={<TrendingDownIcon />}
                description="Visitors who completed an action"
                footer="30 days"
              />
            </div>
          
          
          {/* Documentation */}
            <div className="rounded-xl border bg-card text-card-foreground shadow @container/card p-6">
              {/* Documentation - Text */}
              <div className="flex items-start justify-between mb-6">
                {/* Documentation */}
                <div className="flex flex-col space-y-1.5">
                  <div className="font-medium leading-none tracking-tight">Visitor activity</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="@[540px]/card:block hidden">Visitor activity for {chartPeriod}</span>
                    <span className="@[540px]/card:hidden">{chartPeriod}</span>
                  </div>
                </div>
                
                {/* Documentation */}
                <div>
                  <TimePeriodToggle 
                    selected={chartPeriod}
                    onSelect={setChartPeriod}
                  />
                </div>
              </div>
              
              {/* Documentation */}
              <div 
                data-chart="visitor-chart" 
                className="flex justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto h-[250px] w-full"
              >
                  <style>{`
                    [data-chart=visitor-chart] {
                      --color-desktop: var(--chart-1);
                      --color-mobile: var(--chart-2);
                    }

                    .dark [data-chart=visitor-chart] {
                      --color-desktop: var(--chart-1);
                      --color-mobile: var(--chart-2);
                    }
                  `}</style>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart 
                      data={currentChartData} 
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1} />
                          <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid horizontal={true} vertical={false} stroke="#ccc" />
                      <XAxis 
                        dataKey="date" 
                        tickLine={false}
                        axisLine={false}
                        dy={8}
                        minTickGap={5}
                        interval="preserveStartEnd"
                      />
                      <Tooltip 
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
                                <div className="font-medium">{label}</div>
                                <div className="grid gap-1.5">
                                  {payload.map((entry, index) => (
                                    <div key={index} className="flex w-full flex-wrap gap-2 items-center">
                                      <div 
                                        className="shrink-0 rounded-[2px] h-2.5 w-2.5" 
                                        style={{ 
                                          backgroundColor: entry.dataKey === 'desktop' ? 'var(--color-desktop)' : 'var(--color-mobile)',
                                          border: `1px solid ${entry.dataKey === 'desktop' ? 'var(--color-desktop)' : 'var(--color-mobile)'}`
                                        }}
                                      />
                                      <div className="flex flex-1 justify-between leading-none items-center">
                                        <div className="grid gap-1.5">
                                          <span className="text-muted-foreground">
                                            {entry.dataKey === 'desktop' ? 'Desktop' : 'Mobile'}
                                          </span>
                                        </div>
                                        <span className="font-mono font-medium tabular-nums text-foreground">
                                          {entry.value}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="mobile"
                        stackId="1"
                        stroke="var(--color-mobile)"
                        fill="url(#fillMobile)"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="desktop"
                        stackId="1"
                        stroke="var(--color-desktop)"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
              </div>
            </div>
          
          {/* Documentation */}
            <div className="space-y-6">
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All users</TabsTrigger>
                  <TabsTrigger value="recent">Recently registered</TabsTrigger>
                  <TabsTrigger value="active">Active users</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive users</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <TableWrapper bordered className="overflow-x-auto">
                    <Table className="min-w-max">
                      <TableHeader>
                        <TableRow>
                          <TableHead cellWidth="fit">ID</TableHead>
                          <TableHead cellWidth="fit">Name</TableHead>
                          <TableHead cellWidth="fit">Email</TableHead>
                          <TableHead cellWidth="fit">Role</TableHead>
                          <TableHead cellWidth="fit">Status</TableHead>
                          <TableHead cellWidth="fit">Created</TableHead>
                          <TableHead cellWidth="fit">Last login</TableHead>
                          <TableHead cellWidth="fit">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockUsers.map((user) => (
                          <TableRow key={user.id}>
                            <IdCell id={user.id} cellWidth="fit" />
                            <NameCell name={user.name} cellWidth="fit" />
                            <TableCell cellWidth="fit">{user.email}</TableCell>
                            <TableCell cellWidth="fit">{user.role}</TableCell>
                            <StatusCell 
                              status={getStatusText(user.status)} 
                              variant={getStatusVariant(user.status)}
                              cellWidth="fit"
                            />
                            <TableCell cellWidth="fit">{user.createTime}</TableCell>
                            <TableCell cellWidth="fit">{user.lastLogin}</TableCell>
                            <ActionButtonsCell
                              cellWidth="fit"
                              actions={[
                                {
                                  label: 'Edit',
                                  onClick: () => handleEditUser(user.id)
                                },
                                {
                                  label: 'Delete',
                                  onClick: () => handleDeleteUser(user.id),
                                  variant: 'destructive'
                                }
                              ]}
                            />
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableWrapper>
                </TabsContent>

                <TabsContent value="recent" className="mt-4">
                  <TableWrapper bordered className="overflow-x-auto">
                    <Table className="min-w-max">
                      <TableHeader>
                        <TableRow>
                          <TableHead cellWidth="fit">ID</TableHead>
                          <TableHead cellWidth="fit">Name</TableHead>
                          <TableHead cellWidth="fit">Registered</TableHead>
                          <TableHead cellWidth="fit">Department</TableHead>
                          <TableHead cellWidth="fit">Status</TableHead>
                          <TableHead cellWidth="fit">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <IdCell id={6} cellWidth="fit" />
                          <NameCell name="Sun Ba" cellWidth="fit" />
                          <TableCell cellWidth="fit">2024-01-21 15:30</TableCell>
                          <TableCell cellWidth="fit">Technology</TableCell>
                          <StatusCell status="Pending" variant="warning" cellWidth="fit" />
                          <ActionButtonsCell
                            cellWidth="fit"
                            actions={[
                              {
                                label: 'Review',
                                onClick: () => console.log('Action triggered')
                              }
                            ]}
                          />
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableWrapper>
                </TabsContent>

                <TabsContent value="active" className="mt-4">
                  <TableWrapper bordered className="overflow-x-auto">
                    <Table className="min-w-max">
                      <TableHeader>
                        <TableRow>
                          <TableHead cellWidth="fit">ID</TableHead>
                          <TableHead cellWidth="fit">Name</TableHead>
                          <TableHead cellWidth="fit">Last login</TableHead>
                          <TableHead cellWidth="fit">Activity</TableHead>
                          <TableHead cellWidth="fit">Status</TableHead>
                          <TableHead cellWidth="fit">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <IdCell id={7} cellWidth="fit" />
                          <NameCell name="Zhou Qi" cellWidth="fit" />
                          <TableCell cellWidth="fit">October</TableCell>
                          <TableCell cellWidth="fit">High</TableCell>
                          <StatusCell status="Active" variant="success" cellWidth="fit" />
                          <ActionButtonsCell
                            cellWidth="fit"
                            actions={[
                              {
                                label: 'View',
                                onClick: () => console.log('Action triggered')
                              }
                            ]}
                          />
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableWrapper>
                </TabsContent>

                <TabsContent value="inactive" className="mt-4">
                  <TableWrapper bordered className="overflow-x-auto">
                    <Table className="min-w-max">
                      <TableHeader>
                        <TableRow>
                          <TableHead cellWidth="fit">ID</TableHead>
                          <TableHead cellWidth="fit">Name</TableHead>
                          <TableHead cellWidth="fit">Registered</TableHead>
                          <TableHead cellWidth="fit">Department</TableHead>
                          <TableHead cellWidth="fit">Status</TableHead>
                          <TableHead cellWidth="fit">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <IdCell id={8} cellWidth="fit" />
                          <NameCell name="Wu Jie" cellWidth="fit" />
                          <TableCell cellWidth="fit">2024-01-20</TableCell>
                          <TableCell cellWidth="fit">Operations</TableCell>
                          <StatusCell status="Inactive" variant="destructive" cellWidth="fit" />
                          <ActionButtonsCell
                            cellWidth="fit"
                            actions={[
                              {
                                label: 'View',
                                onClick: () => console.log('Action triggered')
                              }
                            ]}
                          />
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableWrapper>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </PageContainer>
    </div>
  );
};

export default Demo; 