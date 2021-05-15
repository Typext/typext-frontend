import React, { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  margin?: string;
  styleComponent: 'gray' | 'black' | 'red' | 'green' | 'add';
  sizeComponent: 'normal' | 'large';
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}
