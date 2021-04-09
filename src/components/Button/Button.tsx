import React, { ButtonHTMLAttributes } from 'react';
import StyledButton from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  colorText?: string;
  size?: string;
}

const Button: React.FC<Props> = ({
  color,
  colorText,
  size,
  children,
  ...rest
}: Props) => {
  return (
    <StyledButton
      color={color}
      colorText={colorText}
      size={size}
      {...rest}
      className="styled-button"
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  colorText: '#fff',
  size: '17.313rem',
  color: '#F60846',
};

export default Button;
