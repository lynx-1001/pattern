// src/components/Button.tsx
'use client'; // If it has event handlers or state, otherwise not strictly needed if just styling

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Example variants
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  // Basic styling, can be enhanced with Tailwind or CSS Modules
  const baseStyle = "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const primaryStyle = "bg-blue-500 hover:bg-blue-700 text-white";
  const secondaryStyle = "bg-gray-500 hover:bg-gray-700 text-white";

  // In a real app, you'd use clsx or a similar utility for conditional classes
  const variantStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
