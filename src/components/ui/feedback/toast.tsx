import toast, { Toaster as HotToaster, ToasterProps, Toast } from 'react-hot-toast';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
  // Implementation detail
interface ToastOptions {
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  id?: string;
}
  // Implementation detail
interface ToasterComponentProps extends ToasterProps {
  className?: string;
}
  // Implementation detail
const CustomToast = ({ toast: t }: { toast: Toast }) => {
  const getIcon = () => {
    switch (t.type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Info className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg',
        'min-w-[300px] max-w-md mx-auto',
        t.visible 
          ? 'animate-in slide-in-from-top-2 fade-in duration-200' 
          : 'animate-out slide-out-to-top-2 fade-out duration-200'
      )}
    >
      {getIcon()}
      <div className="flex-1">
        <div className="text-sm font-medium text-foreground">
          {String(t.message)}
        </div>
        {(t as any).description && (
          <div className="text-sm text-muted-foreground mt-1">
            {String((t as any).description)}
          </div>
        )}
      </div>
      {(t as any).action && (
        <button
          onClick={(t as any).action.onClick}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {(t as any).action.label}
        </button>
      )}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        ×
      </button>
    </div>
  );
};

// Toaster Component
const Toaster = ({ className, ...props }: ToasterComponentProps) => {
  return (
    <HotToaster
      position="top-center"
      containerClassName={cn('toaster', className)}
      toastOptions={{
        duration: 4000,
        removeDelay: 200, // Text
        style: {
          background: 'transparent',
          border: 'none',
          padding: 0,
          boxShadow: 'none',
        },
      }}
      {...props}
    >
      {(t) => <CustomToast toast={t} />}
    </HotToaster>
  );
};
  // Implementation detail
const customToast = (message: string, options?: ToastOptions) => {
  return toast.custom(
    (t) => (
      <CustomToast 
        toast={{
          ...t,
          message,
          ...(options?.description && { description: options.description }),
          ...(options?.action && { action: options.action }),
        } as Toast}
      />
    ),
    {
      id: options?.id,
      duration: options?.duration || 4000,
      removeDelay: 200,
    }
  );
};

// Toast Success
customToast.success = (message: string, options?: ToastOptions) => {
  return toast.custom(
    (t) => (
      <CustomToast 
        toast={{
          ...t,
          type: 'success',
          message,
          ...(options?.description && { description: options.description }),
          ...(options?.action && { action: options.action }),
        } as Toast}
      />
    ),
    {
      id: options?.id,
      duration: options?.duration || 4000,
      removeDelay: 200,
    }
  );
};

// Toast Error
customToast.error = (message: string, options?: ToastOptions) => {
  return toast.custom(
    (t) => (
      <CustomToast 
        toast={{
          ...t,
          type: 'error',
          message,
          ...(options?.description && { description: options.description }),
          ...(options?.action && { action: options.action }),
        } as Toast}
      />
    ),
    {
      id: options?.id,
      duration: options?.duration || 4000,
      removeDelay: 200,
    }
  );
};

// Toast Warning
customToast.warning = (message: string, options?: ToastOptions) => {
  return toast.custom(
    (t) => (
      <div
        className={cn(
          'flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg',
          'min-w-[300px] max-w-md mx-auto',
          t.visible 
            ? 'animate-in slide-in-from-top-2 fade-in duration-200' 
            : 'animate-out slide-out-to-top-2 fade-out duration-200'
        )}
      >
        <AlertCircle className="h-4 w-4 text-yellow-600" />
        <div className="flex-1">
          <div className="text-sm font-medium text-foreground">
            {message}
          </div>
          {options?.description && (
            <div className="text-sm text-muted-foreground mt-1">
              {options.description}
            </div>
          )}
        </div>
        {options?.action && (
          <button
            onClick={options.action.onClick}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {options.action.label}
          </button>
        )}
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ×
        </button>
      </div>
    ),
    {
      id: options?.id,
      duration: options?.duration || 4000,
      removeDelay: 200,
    }
  );
};

// Toast Information
customToast.info = (message: string, options?: ToastOptions) => {
  return customToast(message, options);
};

// Toast Loading
customToast.loading = (message: string, options?: Omit<ToastOptions, 'action'>) => {
  return toast.loading(message, {
    id: options?.id,
    duration: options?.duration,
  });
};

// Toast Promise
customToast.promise = <T,>(
  promise: Promise<T>,
  options: {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((error: any) => string);
    description?: string;
    duration?: number;
    id?: string;
  }
) => {
  return toast.promise(promise, {
    loading: options.loading,
    success: options.success,
    error: options.error,
  });
};

// Toast Close
customToast.dismiss = (id?: string) => {
  return toast.dismiss(id);
};

export { Toaster, customToast as toast, type ToastOptions }; 