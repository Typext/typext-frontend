import React from 'react';
import { StyledInput } from './styles';

interface Props {
  title: string;
  color: string;
  size: string;
  styleWidth: string;
  type: string;
}

const Input: React.FC<Props> = ({
  title,
  color,
  size,
  styleWidth,
  type,
}: Props) => {
  return (
    <StyledInput InputWidth={styleWidth} Color={color} Size={size}>
      <h3>{title}</h3>

      <input type={type} />
    </StyledInput>
  );
};

export default Input;
