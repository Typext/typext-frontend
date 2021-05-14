import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  color?: string;
  weight?: string;
  Size?: string;
  styleWidth?: string;
  Type?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  color,
  Size,
  styleWidth,
  weight,
  Type,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      InputWidth={styleWidth || '23.75rem'}
      Color={color || 'var(--black)'}
      Size={Size || '1.5rem'}
      weight={weight}
      className="input-styled"
    >
      <h3>{title}</h3>

      <input type={Type || 'text'} {...rest} />
    </StyledInput>
  );
};

Input.defaultProps = {
  Type: '',
  Size: '',
  weight: '',
  styleWidth: '23.75rem',
  color: 'var(--black)',
};

export default Input;
