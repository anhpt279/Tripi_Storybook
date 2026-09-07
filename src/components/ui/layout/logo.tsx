import * as React from 'react';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  lightSrc?: string;
  darkSrc?: string;
  variant?: 'image' | 'placeholder';
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ 
    lightSrc = '/logo.png', 
    darkSrc = '/logo_dark.png', 
    variant = 'placeholder',
    className, 
    ...props 
  }, ref) => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
      // check initial theme
      const checkTheme = () => {
        const htmlElement = document.documentElement;
  // Implementation detail
        const hasDarkClass = htmlElement.classList.contains('dark');
        const hasLightClass = htmlElement.classList.contains('light');
        
        let isDarkMode;
        if (hasDarkClass && !hasLightClass) {
          isDarkMode = true;
        } else if (hasLightClass && !hasDarkClass) {
          isDarkMode = false;
        } else {
  // Implementation detail
          isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        

        setIsDark(isDarkMode);
      };
  // Implementation detail
      checkTheme();
  // Implementation detail
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            checkTheme();
          }
        });
      });
  // Implementation detail
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
  // Implementation detail
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => checkTheme();
      mediaQuery.addEventListener('change', handleMediaChange);

      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }, []);

    if (variant === 'placeholder') {
      return (
        <div
          ref={ref}
          className={cn(
            'flex items-center gap-2 h-8',
            className
          )}
          {...props}
        >
          <Zap 
            className="h-5 w-5 text-primary"
          />
          <span 
            className="font-medium text-foreground text-base"
          >
            Acme Inc.
          </span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center h-6', className)}
        {...props}
      >
        <img
          src={isDark ? darkSrc : lightSrc}
          alt="Logo"
          className="w-auto h-6"
        />
      </div>
    );
  }
);

Logo.displayName = 'Logo';

export { Logo };
export type { LogoProps }; 