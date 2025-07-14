import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary-dark transition',
        className
      )}
      {...props}
    />
  );
} 