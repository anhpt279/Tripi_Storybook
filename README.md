# Shadcn Tailwind Design System

A modern component library built on [shadcn/ui](https://ui.shadcn.com/), developed with React, TypeScript, Tailwind CSS, and Storybook.

## Features

- **50+ polished components** covering base, data entry, navigation, feedback, data display, and layout scenarios
- **Storybook documentation** with complete component documentation and interactive examples
- **TypeScript support** with full type definitions and type safety
- **Dark mode** with built-in light and dark theme switching
- **Responsive design** with adaptive layouts for all screen sizes
- **Complete layout system** with standardized spacing guidelines and layout components
- **Form solutions** based on React Hook Form
- **Five practical examples** covering dashboards, settings, resume editing, ticket booking, and movie ranking

## Quick Start

```bash

# Install dependencies
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook

# Build the project
npm run build
```

## Component Categories

### Base Components (8)

Button, Avatar, Badge, Label, Typography, ButtonGroup, ColorPalette, Dropdown

### Data Entry Components (15)

Input, Textarea, Select, Checkbox, RadioGroup, Switch, DatePicker, Calendar, FileUpload, Search, CitySelect, Cascader, TagsInput, Form

### Navigation Components (6)

Sidebar, TopNav, Tabs, Steps, Pagination, Command

### Feedback Components (10)

Alert, Modal, Dialog, Tooltip, Popover, Popconfirm, Loading, Skeleton, Toast, CascaderDropdown

### Data Display Components (3)

Table, Tags, Filter

### Layout Components (4)

PageContainer, PageHeader, BlockLayout, Logo

### Complete Examples (5)

- **Data Analytics Dashboard** - Enterprise-level data dashboard example
- **Settings Page** - User configuration interface example
- **Resume Editor** - Dynamic forms and file upload example
- **Ticket Booking** - Event listing and filtering example
- **Movie Ranking** - Data display and sorting example

## Tech Stack

- **Frontend framework:** React 18 + TypeScript 5.2+
- **Styling:** Tailwind CSS 4.1+
- **Build tool:** Vite 5.2+
- **UI foundation:** shadcn/ui + Radix UI
- **Documentation:** Storybook 8.3+
- **Form handling:** React Hook Form 7.58+ + Zod 3.25+
- **Charts:** Recharts 3.0+
- **Icons:** Lucide React 0.378+

## Usage Example

```tsx
import { Button, Input, Alert } from '@/components/ui'

function App() {
  return (
    <div className="p-6 space-y-4">
      <Alert variant="default">
        Welcome to Shadcn Tailwind Design System!
      </Alert>
      <Input placeholder="Enter content..." />
      <Button variant="default">Click Button</Button>
    </div>
  )
}
```

## Component Documentation

Run Storybook to browse the complete component documentation:

```bash
npm run storybook
```

## Development Guidelines

- See [Component Development SOP](./COMPONENT_DEVELOPMENT_SOP.md) for development standards.
- See [Component Library Reference](./COMPONENT_LIBRARY_REFERENCE.md) for component usage.
- See [Layout System Guidelines](./LAYOUT_SYSTEM.md) for spacing and layout standards.

## Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push the branch: `git push origin feature/NewFeature`
5. Open a pull request.

## License

MIT License. See the [LICENSE](LICENSE) file for details.
