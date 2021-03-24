import React from "react";
import { StyledInput } from "./styles";

interface Props {
  title: string;
  styleWidth: string;
  type: string;
}

const Input: React.FC<Props> = ({
  title,
  styleWidth,
  type,  
}: Props) => {
  return(
    <StyledInput
      InputWidth={styleWidth}
    >
      <h3>{title}</h3>

      <input type={type}/>
    </StyledInput>
  );
}

export default Input;