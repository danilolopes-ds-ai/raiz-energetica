import React from 'react';
import { cn } from '@/lib/utils';

const textVariants = {
  h1: 'text-4xl md:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  body: 'text-base text-gray-700 leading-relaxed',
  lead: 'text-lg md:text-xl text-gray-600 leading-relaxed',
  caption: 'text-sm text-gray-500',
  gradient: 'text-gradient',
};

const Text = ({ as: Component = 'p', variant = 'body', className, children, ...props }) => {
  const variantClass = textVariants[variant];

  return (
    <Component className={cn(variantClass, className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;