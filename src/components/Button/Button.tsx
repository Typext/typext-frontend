import React, { ButtonHTMLAttributes } from "react";
import StyledButton from "./styles";

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
}) => {

  return(
    <StyledButton
      color={color}
      colorText={colorText}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );  
}

Button.defaultProps = {
  colorText: '#fff',
}

export default Button;