import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TopNav } from '@/components/ui/navigation/top-nav';

const meta = {
  title: 'Navigation/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation header. Navigation header. ',
      },
    },
  },
  argTypes: {
    isLoggedIn: {
      description: 'Whether the user is signed in',
      control: 'boolean',
    },
    avatarSrc: {
      description: 'avatar URL',
      control: 'text',
    },
    avatarFallback: {
      description: 'Top navigation with account actions.',
      control: 'text',
    },
    userName: {
      description: 'Username',
      control: 'text',
    },
    onHelpClick: {
      description: 'Top navigation with account actions.',
    },
    onAvatarClick: {
      description: 'Sample label (Navigation header)',
    },
    onLoginClick: {
      description: 'Top navigation with account actions.',
    },
    onLogoClick: {
      description: 'LogoText',
    },
  },
  args: {
    onHelpClick: fn(),
    onAvatarClick: fn(),
    onLoginClick: fn(),
    onLogoClick: fn(),
  },
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// Top navigation examples
export const LoggedIn: Story = {
  args: {
    isLoggedIn: true,
    userName: 'Top navigation examples',
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    avatarFallback: 'Top navigation examples',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example: Navigation header. Navigation header. ',
      },
    },
  },
};

// Top navigation examples
export const NotLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example: Navigation header. ',
      },
    },
  },
};