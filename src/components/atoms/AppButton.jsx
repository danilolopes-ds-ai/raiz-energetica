import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const appButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'gradient-primary text-white hover:opacity-90',
        secondary: 'border-2 border-[#2D8C5C] bg-transparent text-[#2D8C5C] hover:bg-[#2D8C5C]/10',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        green: 'bg-green-500 hover:bg-green-600 text-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-4 sm:px-8 text-base font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

const AppButton = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(appButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
AppButton.displayName = 'AppButton';

export default AppButton;