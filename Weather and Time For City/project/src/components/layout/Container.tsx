import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`max-w-6xl mx-auto px-4 ${className}`}>
    {children}
  </div>
);