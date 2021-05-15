import React from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  margin?: string;
  styleComponent?: 'gray' | 'black' | 'red' | 'green';
  sizeComponent?: 'normal' | 'large';
}
