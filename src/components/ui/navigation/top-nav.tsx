import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Logo } from '../layout/logo';
import { Avatar } from '../base/avatar';
import { Button } from '../base/button';
  // Implementation detail
const topNavVariants = cva(
  'bg-sidebar flex items-center justify-between w-full h-12 px-6 transition-all duration-300 ease-in-out',
  {
    variants: {},
    defaultVariants: {},
  }
);

// help icon
const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

// type definitions
export interface TopNavProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof topNavVariants> {
  /**
   * Whether the user is signed in
   */
  isLoggedIn?: boolean;
  /**
 * Component documentation
   */
  avatarSrc?: string;
  /**
 * Component documentation
   */
  avatarFallback?: string;
  /**
   * Username
   */
  userName?: string;
  /**
 * Component documentation
   */
  onHelpClick?: () => void;
  /**
 * Component documentation
   */
  onAvatarClick?: () => void;
  /**
 * Component documentation
   */
  onLoginClick?: () => void;
  /**
 * Component documentation
   */
  onLogoClick?: () => void;
}

const TopNav = React.forwardRef<HTMLDivElement, TopNavProps>(
  ({ 
    className, 
    isLoggedIn = false,
    avatarSrc,
    avatarFallback,
    userName,
    onHelpClick,
    onAvatarClick,
    onLoginClick,
    onLogoClick,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(topNavVariants({ className }))}
        {...props}
      >
        {/* Text Logo */}
        <div className="flex items-center">
          <div 
            className="cursor-pointer"
            onClick={onLogoClick}
          >
            <Logo />
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              {/* Help and account actions */}
              <Button
                variant="ghost"
                size="sm-icon"
                onClick={onHelpClick}
                tooltip="Help"
              >
                <HelpIcon />
              </Button>
              
              <div 
                className="cursor-pointer"
                onClick={onAvatarClick}
              >
                <Avatar
                  src={avatarSrc}
                  alt={userName}
                  fallback={avatarFallback || userName?.charAt(0)?.toUpperCase() || 'U'}
                  size="sm"
                />
              </div>
            </>
          ) : (
            <>
              {/* Help and sign-in actions */}
              <Button
                variant="ghost"
                size="sm-icon"
                onClick={onHelpClick}
                tooltip="Help"
              >
                <HelpIcon />
              </Button>
              
              <Button
                variant="default"
                size="sm"
                onClick={onLoginClick}
              >
                Sign in
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
);

TopNav.displayName = 'TopNav';

export { TopNav, topNavVariants }; 