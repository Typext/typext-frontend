import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  color?: string;
  Size?: string;
  styleWidth?: string;
  Type?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  color,
  Size,
  styleWidth,
  Type,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      InputWidth={styleWidth || '23.75rem'}
      Color={color || 'var(--black)'}
      Size={Size || '1.5rem'}
    >
      <h3>{title}</h3>

      <input type={Type || 'text'} {...rest} />
    </StyledInput>
  );
};

Input.defaultProps = {
  Type: '',
  Size: '',
  styleWidth: '23.75rem',
  color: '',
};

export default Input;
