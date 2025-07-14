import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input'; 