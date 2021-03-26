import React, { ButtonHTMLAttributes } from 'react';
import StyledButton from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  colorText?: string;
  size?: string;
  figure?: string;
}

const Button: React.FC<Props> = ({
  color,
  colorText,
  size,
  figure,
  children,
  ...rest
}: Props) => {
  return (
    <StyledButton color={color} colorText={colorText} size={size} {...rest}>
      {children}
      {figure && figure}
    </StyledButton>
  );
};

Button.defaultProps = {
  colorText: '#fff',
  size: '',
  figure: '',
};

export default Button;
