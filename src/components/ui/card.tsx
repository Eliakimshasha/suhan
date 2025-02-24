import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'ghost';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ children, elevation = 'md', variant = 'default', className = '', ...props }, ref) => {
      const elevations = {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg'
      };
  
      const variants = {
        default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
        bordered: 'border-2 border-gray-200 dark:border-gray-700 bg-transparent',
        ghost: 'bg-transparent'
      };
  
      // Renamed 'className' to 'computedClassName' to avoid duplication
      const computedClassName = `
        rounded-lg
        ${elevations[elevation]}
        ${variants[variant]}
        ${className}
      `.trim();
  
      return (
        <div ref={ref} className={computedClassName} {...props}>
          {children}
        </div>
      );
    }
  );
  

Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 py-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className = '', ...props }, ref) => (
    <h3 ref={ref} className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`.trim()} {...props}>
      {children}
    </h3>
  )
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className = '', ...props }, ref) => (
    <p ref={ref} className={`mt-2 text-sm text-gray-600 dark:text-gray-300 ${className}`.trim()} {...props}>
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';