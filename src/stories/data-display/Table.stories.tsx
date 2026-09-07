import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FileX } from 'lucide-react';

import {
  TableWrapper,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  CheckboxCell,
  CheckboxHeaderCell,
  ActionCell,
  TableEmptyState,
  TablePagination,
  TableWithPagination,
  Button,
  Checkbox,
  Tag,
} from '../../components/ui';
import type { PaginationState } from '../../components/ui';

const meta = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - basic table
export const Default: Story = {
  render: () => (
    <div className="p-6">
      <TableWrapper bordered>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead variant="status">Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell variant="status">
                <Tag variant="success">Active</Tag>
              </TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell variant="status">
                <Tag variant="destructive">Inactive</Tag>
              </TableCell>
              <TableCell>jane@Example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell variant="status">
                <Tag variant="warning">Pending</Tag>
              </TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>Moderator</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  ),
};

// Page-level sticky header table - Example
export const PageStickyHeader: Story = {
  render: () => (
    <div className="p-6">
      {/* Example, sticky */}
      <TableWrapper bordered pageStickyHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Name
              </TableHead>
              <TableHead variant="numeric">
                Email
              </TableHead>
              <TableHead variant="numeric">
                Role
              </TableHead>
              <TableHead>
                Status
              </TableHead>
              <TableHead>
                Created
              </TableHead>
              <TableHead variant="status">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 15 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>Example {i + 1}</TableCell>
                <TableCell variant="numeric">¥{(Math.random() * 1000).toFixed(2)}</TableCell>
                <TableCell variant="numeric">{Math.floor(Math.random() * 500)}</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>2024-{String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-{String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}</TableCell>
                <TableCell variant="status">
                  <Tag variant={
                    i % 3 === 0 ? 'success' :
                    i % 3 === 1 ? 'destructive' :
                    'warning'
                  }>
                    {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}
                  </Tag>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Table with checkboxes and actions - Example
export const WithSelectableRows: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const data = [
      { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: '2', name: 'Jane Smith', email: 'jane@Example.com', role: 'User' },
      { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
      { id: '4', name: 'Alice Brown', email: 'alice@Example.com', role: 'User' },
    ];

    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };

    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };

    return (
      <div className="p-6">
        <TableWrapper bordered>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 p-0 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={(checked) => handleSelectAll(!!checked)}
                      aria-label="Select all"
                    />
                  </div>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  className={selectedRows.includes(item.id) ? "bg-muted/50" : ""}
                >
                  <TableCell className="w-16 p-0 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Checkbox
                        checked={selectedRows.includes(item.id)}
                        onCheckedChange={(checked) => handleRowSelect(item.id, !!checked)}
                        aria-label={`Select ${item.name}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                        Edit
                      </Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                        View
                      </Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
    );
  },
};

// Empty state table
export const EmptyState: Story = {
  render: () => (
    <div className="p-6">
      <TableWrapper bordered>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <TableEmptyState
                  icon={<FileX className="h-10 w-10" />}
                  title="No users found"
                  description="There are no users in your workspace yet. Invite some users to get started."
                  action={
                    <Button>
                      Invite Users
                    </Button>
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  ),
};

// Horizontal scroll - Example
export const HorizontalScroll: Story = {
  render: () => (
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Example - Example</h3>
        <p className="text-sm text-muted-foreground">
          Details. Details.
        </p>
      </div>

      <TableWrapper bordered>
        <Table className="min-w-max">
          <TableHeader>
            <TableRow>
              <TableHead cellWidth="fit">ID</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit" variant="status">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
              <TableHead cellWidth="auto">Details</TableHead>
              <TableHead cellWidth="fit">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 8 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell cellWidth="fit">{1001 + i}</TableCell>
                <TableCell cellWidth="fit">Example{i + 1}</TableCell>
                <TableCell cellWidth="fit">employee{i + 1}@company.com</TableCell>
                <TableCell cellWidth="fit" variant="numeric">{25 + i}</TableCell>
                <TableCell cellWidth="fit">Details</TableCell>
                <TableCell cellWidth="fit">
                  {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}
                </TableCell>
                <TableCell cellWidth="fit">+86 138-{String(1000 + i * 11).padStart(4, '0')}-{String(5678 + i).padStart(4, '0')}</TableCell>
                <TableCell cellWidth="fit" variant="date">2024-0{(i % 6) + 1}-{String(10 + i).padStart(2, '0')}</TableCell>
                <TableCell cellWidth="fit">P{(i % 4) + 6}</TableCell>
                <TableCell cellWidth="fit">
                  {i % 2 === 0 ? 'Example' : 'Example'}
                </TableCell>
                <TableCell cellWidth="fit" variant="status">
                  <Tag variant={
                    i % 3 === 0 ? 'success' :
                    i % 3 === 1 ? 'primary' :
                    'warning'
                  }>
                    {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}
                  </Tag>
                </TableCell>
                <TableCell cellWidth="fit">Example{Math.floor(i / 2) + 1}</TableCell>
                <TableCell cellWidth="fit">Example {String.fromCharCode(65 + (i % 3))}</TableCell>
                <TableCell cellWidth="auto">
                  {i % 2 === 0 ? 'Details' : 'Details'}
                </TableCell>
                <TableCell cellWidth="fit">
                  <div className="flex items-center gap-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Details
                    </Button>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                      Edit
                    </Button>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">
                      Details
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  ),
};


// Column width guide - Example
export const ColumnWidthGuide: Story = {
  render: () => (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Details</h3>

        {/* Example: Example */}
        <div className="mb-6">
          <h4 className="text-md font-medium mb-2">Example: Example ≤ Example</h4>
          <p className="text-sm text-muted-foreground mb-3">Example, auto-width, Details. </p>

          <TableWrapper bordered>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead cellWidth="xs">ID</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="md">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="auto">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell cellWidth="xs">001</TableCell>
                  <TableCell cellWidth="sm">Details</TableCell>
                  <TableCell cellWidth="md">138-0000-0000</TableCell>
                  <TableCell cellWidth="sm">Details</TableCell>
                  <TableCell cellWidth="auto">Details</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* Example: Example */}
        <div>
          <h4 className="text-md font-medium mb-2">Example: Example &gt; Example</h4>
          <p className="text-sm text-muted-foreground mb-3">Use fit-width for compact identifiers and status columns that should stay on one line.</p>

          <TableWrapper bordered>
            <Table className="min-w-max">
              <TableHeader>
                <TableRow>
                  <TableHead cellWidth="fit">ID</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                  <TableHead cellWidth="xl">Details</TableHead>
                  <TableHead cellWidth="fit">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell cellWidth="fit">1001</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="fit">lisi@example.com</TableCell>
                  <TableCell cellWidth="fit">138-1111-1111</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="xl">Details, Details, Example</TableCell>
                  <TableCell cellWidth="fit">
                    <div className="flex items-center gap-1">
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell cellWidth="fit">1002</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="fit">wangwu@example.com</TableCell>
                  <TableCell cellWidth="fit">139-2222-2222</TableCell>
                  <TableCell cellWidth="fit">UIText</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="xl">Details</TableCell>
                  <TableCell cellWidth="fit">
                    <div className="flex items-center gap-1">
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell cellWidth="fit">1003</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="fit">zhaoliu@Example.com</TableCell>
                  <TableCell cellWidth="fit">137-3333-3333</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="fit">Details</TableCell>
                  <TableCell cellWidth="xl">Details, Details, Example</TableCell>
                  <TableCell cellWidth="fit">
                    <div className="flex items-center gap-1">
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableWrapper>
        </div>
      </div>
    </div>
  ),
};

// Left sticky columns - Example
export const LeftStickyColumns: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const data = [
      { id: '1001', name: 'Example', email: 'zhangsan@company.com', phone: '138-0000-0001', department: 'Example', position: 'Example', salary: 'P7', location: 'Example', manager: 'Example', project: 'ItemA', status: 'active', notes: 'Details, Example' },
      { id: '1002', name: 'Example', email: 'lisi@company.com', phone: '138-0000-0002', department: 'Example', position: 'Example', salary: 'P6', location: 'Example', manager: 'Example', project: 'ItemB', status: 'active', notes: 'Details, Example' },
      { id: '1003', name: 'Example', email: 'wangwu@company.com', phone: '138-0000-0003', department: 'Example', position: 'UIText', salary: 'P5', location: 'Example', manager: 'Example', project: 'ItemC', status: 'trial', notes: 'Details, Example' },
      { id: '1004', name: 'Example', email: 'zhaoliu@company.com', phone: '138-0000-0004', department: 'Example', position: 'Example', salary: 'P4', location: 'Example', manager: 'Example', project: 'ItemD', status: 'leave', notes: 'Details' },
      { id: '1005', name: 'Example', email: 'qianqi@company.com', phone: '138-0000-0005', department: 'Example', position: 'Example', salary: 'P5', location: 'Example', manager: 'Example', project: 'ItemE', status: 'active', notes: 'Details, Example' },
    ];

    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };

    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case 'active': return 'Example';
        case 'trial': return 'Example';
        case 'leave': return 'Example';
        default: return status;
      }
    };

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <p className="text-sm text-muted-foreground">
            Details. Details.
          </p>
        </div>

        <TableWrapper bordered>
          <Table className="min-w-max">
            <TableHeader>
              <TableRow>
                <CheckboxHeaderCell
                  stickyLeft
                  checked={selectAll}
                  onCheckedChange={(checked) => handleSelectAll(!!checked)}
                  aria-label="Select all"
                />
                <TableHead stickyLeft cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit" variant="status">Details</TableHead>
                <TableHead cellWidth="auto">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <CheckboxCell
                    stickyLeft
                    checked={selectedRows.includes(item.id)}
                    onCheckedChange={(checked) => handleRowSelect(item.id, !!checked)}
                    aria-label={`Select ${item.name}`}
                  />
                  <TableCell stickyLeft cellWidth="fit">{item.name}</TableCell>
                  <TableCell cellWidth="fit">{item.email}</TableCell>
                  <TableCell cellWidth="fit">{item.phone}</TableCell>
                  <TableCell cellWidth="fit">{item.department}</TableCell>
                  <TableCell cellWidth="fit">{item.position}</TableCell>
                  <TableCell cellWidth="fit">{item.salary}</TableCell>
                  <TableCell cellWidth="fit">{item.location}</TableCell>
                  <TableCell cellWidth="fit">{item.manager}</TableCell>
                  <TableCell cellWidth="fit">{item.project}</TableCell>
                  <TableCell cellWidth="fit" variant="status">
                    <Tag variant={
                      item.status === 'active' ? 'success' :
                      item.status === 'trial' ? 'primary' :
                      item.status === 'leave' ? 'warning' :
                      'default'
                    }>
                      {getStatusText(item.status)}
                    </Tag>
                  </TableCell>
                  <TableCell cellWidth="auto">{item.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
    );
  },
};

// Right sticky columns - Example
export const RightStickyColumns: Story = {
  render: () => {
    const data = [
      { id: '1001', name: 'Example', email: 'zhangsan@company.com', phone: '138-0000-0001', department: 'Example', position: 'Example', salary: 'P7', location: 'Example', manager: 'Example', project: 'ItemA', status: 'active', notes: 'Details' },
      { id: '1002', name: 'Example', email: 'lisi@company.com', phone: '138-0000-0002', department: 'Example', position: 'Example', salary: 'P6', location: 'Example', manager: 'Example', project: 'ItemB', status: 'active', notes: 'Details' },
      { id: '1003', name: 'Example', email: 'wangwu@company.com', phone: '138-0000-0003', department: 'Example', position: 'UIText', salary: 'P5', location: 'Example', manager: 'Example', project: 'ItemC', status: 'trial', notes: 'Details' },
      { id: '1004', name: 'Example', email: 'zhaoliu@company.com', phone: '138-0000-0004', department: 'Example', position: 'Example', salary: 'P4', location: 'Example', manager: 'Example', project: 'ItemD', status: 'leave', notes: 'Details' },
      { id: '1005', name: 'Example', email: 'qianqi@company.com', phone: '138-0000-0005', department: 'Example', position: 'Example', salary: 'P5', location: 'Example', manager: 'Example', project: 'ItemE', status: 'active', notes: 'Details' },
    ];

    const getStatusText = (status: string) => {
      switch (status) {
        case 'active': return 'Example';
        case 'trial': return 'Example';
        case 'leave': return 'Example';
        default: return status;
      }
    };

    return (
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <p className="text-sm text-muted-foreground">
            Details. Details.
          </p>
        </div>

        <TableWrapper bordered>
          <Table className="min-w-max">
            <TableHeader>
              <TableRow>
                <TableHead cellWidth="fit">ID</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="fit">Details</TableHead>
                <TableHead cellWidth="auto">Details</TableHead>
                <TableHead cellWidth="fit" variant="status">Details</TableHead>
                <TableHead stickyRight cellWidth="fit" style={{ right: '0px' }}>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell cellWidth="fit">{item.id}</TableCell>
                  <TableCell cellWidth="fit">{item.name}</TableCell>
                  <TableCell cellWidth="fit">{item.email}</TableCell>
                  <TableCell cellWidth="fit">{item.phone}</TableCell>
                  <TableCell cellWidth="fit">{item.department}</TableCell>
                  <TableCell cellWidth="fit">{item.position}</TableCell>
                  <TableCell cellWidth="fit">{item.salary}</TableCell>
                  <TableCell cellWidth="fit">{item.location}</TableCell>
                  <TableCell cellWidth="fit">{item.manager}</TableCell>
                  <TableCell cellWidth="fit">{item.project}</TableCell>
                  <TableCell cellWidth="auto">{item.notes}</TableCell>
                  <TableCell cellWidth="fit" variant="status">
                    <Tag variant={
                      item.status === 'active' ? 'success' :
                      item.status === 'trial' ? 'primary' :
                      item.status === 'leave' ? 'warning' :
                      'default'
                    }>
                      {getStatusText(item.status)}
                    </Tag>
                  </TableCell>
                  <ActionCell
                    stickyRight
                    style={{ right: '0px' }}
                    actions={[
                      { label: 'Example option', onClick: () => console.log('Example', item.name) },
                      { label: 'Edit', onClick: () => console.log('Edit', item.name) },
                      { label: 'Example option', onClick: () => console.log('Example', item.name), variant: 'destructive' },
                    ]}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </div>
    );
  },
};

// Example: Example
export const WithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    // Example
    const allData = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Example${i + 1}`,
      email: `employee${i + 1}@company.com`,
      role: ['Example', 'User', 'Edit'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3],
      createTime: `2024-${String(Math.floor(i / 10) + 1).padStart(2, '0')}-${String((i % 10) + 1).padStart(2, '0')}`,
    }));

    // Example
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);

    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length,
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active': return 'success';
        case 'inactive': return 'destructive';
        case 'pending': return 'warning';
        default: return 'default';
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case 'active': return 'Example';
        case 'inactive': return 'Example';
        case 'pending': return 'Example';
        default: return status;
      }
    };

    return (
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Details.
          </p>
        </div>

        {/* Example TablePagination Example */}
        <div className="space-y-4">
          <TableWrapper bordered>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead cellWidth="xs">ID</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="md">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">
                      {item.id}
                    </TableCell>
                    <TableCell cellWidth="sm">{item.name}</TableCell>
                    <TableCell cellWidth="md">{item.email}</TableCell>
                    <TableCell cellWidth="sm">{item.role}</TableCell>
                    <TableCell cellWidth="sm">
                      <Tag variant={getStatusVariant(item.status)}>
                        {getStatusText(item.status)}
                      </Tag>
                    </TableCell>
                    <TableCell cellWidth="sm">{item.createTime}</TableCell>
                    <TableCell cellWidth="sm">
                      <div className="flex items-center gap-2">
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                          Edit
                        </Button>
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">
                          Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>

          <TablePagination
            pagination={pagination}
            onPageChange={handlePageChange}
            showTotal={(total, range) => `Example ${total} Details ${range[0]}-${range[1]} Example`}
          />
        </div>
      </div>
    );
  },
};

// Example: Example
export const IntegratedPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    // Example
    const allData = Array.from({ length: 73 }, (_, i) => ({
      id: i + 1,
      name: `User${i + 1}`,
      email: `user${i + 1}@Example.com`,
      role: ['Example', 'User', 'Edit', 'Example'][i % 4],
      status: ['active', 'inactive', 'pending'][i % 3],
      lastLogin: i % 5 === 0 ? 'Example' : `2024-01-${String((i % 28) + 1).padStart(2, '0')} ${String((i % 12) + 10).padStart(2, '0')}:${String((i % 60)).padStart(2, '0')}`,
    }));

    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length,
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active': return 'success';
        case 'inactive': return 'destructive';
        case 'pending': return 'warning';
        default: return 'default';
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case 'active': return 'Example';
        case 'inactive': return 'Example';
        case 'pending': return 'Example';
        default: return status;
      }
    };

    // Example
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);

    return (
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Example TableWithPagination Component, Details API.
          </p>
        </div>

        <TableWithPagination
          data={allData}
          columns={[]} // Example
          pagination={pagination}
          onPageChange={handlePageChange}
          wrapperProps={{ bordered: true }}
        >
          <TableHeader>
            <TableRow>
              <TableHead cellWidth="xs">ID</TableHead>
              <TableHead cellWidth="sm">Username</TableHead>
              <TableHead cellWidth="md">Details</TableHead>
              <TableHead cellWidth="sm">Details</TableHead>
              <TableHead cellWidth="sm">Details</TableHead>
              <TableHead cellWidth="md">Details</TableHead>
              <TableHead cellWidth="sm">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell cellWidth="xs" className="font-mono text-muted-foreground">
                  {item.id}
                </TableCell>
                <TableCell cellWidth="sm">{item.name}</TableCell>
                <TableCell cellWidth="md">{item.email}</TableCell>
                <TableCell cellWidth="sm">{item.role}</TableCell>
                <TableCell cellWidth="sm">
                  <Tag variant={getStatusVariant(item.status)}>
                    {getStatusText(item.status)}
                  </Tag>
                </TableCell>
                <TableCell cellWidth="md">{item.lastLogin}</TableCell>
                <TableCell cellWidth="sm">
                  <div className="flex items-center gap-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm">
                      Edit
                    </Button>
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">
                      Details
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableWithPagination>
      </div>
    );
  },
};

// Example: Example
export const CustomPaginationInfo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const allData = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      product: `Example ${i + 1}`,
      price: (Math.random() * 1000).toFixed(2),
      stock: Math.floor(Math.random() * 500),
      category: ['Example', 'Example', 'Example', 'Example'][i % 4],
      status: ['Example', 'Example', 'Example'][i % 3],
    }));

    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length,
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const currentData = allData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Details.
          </p>
        </div>

        <div className="space-y-4">
          <TableWrapper bordered>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead cellWidth="xs">ID</TableHead>
                  <TableHead cellWidth="md">Details</TableHead>
                  <TableHead cellWidth="sm" variant="numeric">Details</TableHead>
                  <TableHead cellWidth="sm" variant="numeric">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                  <TableHead cellWidth="sm">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">
                      {item.id}
                    </TableCell>
                    <TableCell cellWidth="md">{item.product}</TableCell>
                    <TableCell cellWidth="sm" variant="numeric">¥{item.price}</TableCell>
                    <TableCell cellWidth="sm" variant="numeric">{item.stock}</TableCell>
                    <TableCell cellWidth="sm">{item.category}</TableCell>
                    <TableCell cellWidth="sm">
                      <Tag variant={
                        item.status === 'Example' ? 'success' :
                        item.status === 'Example' ? 'destructive' : 'warning'
                      }>
                        {item.status}
                      </Tag>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>

          <TablePagination
            pagination={pagination}
            onPageChange={handlePageChange}
            showTotal={(total, range) =>
              `Example ${range[0]}-${range[1]} Details ${total} Example`
            }
          />
        </div>
      </div>
    );
  },
};