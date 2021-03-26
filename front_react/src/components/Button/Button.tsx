import React from "react";
import StyledButton from "./styles";

interface Props {
  color: string;
  colorText: string;
  size: string;
  figure?: string;
}

const Button: React.FC<Props> = ({
  color,
  colorText,
  size,
  figure,
}) => {
  return(
    <StyledButton
      color={color}
      colorText={colorText}
      size={size}
    >
      teste
    </StyledButton>
  );  
}

export default Button;