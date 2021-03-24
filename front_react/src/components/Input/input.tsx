import React from "react";
import { StyledInput } from "./styles";

interface Props {
  name: string;
  data: string;
  width: number;
  type: string;
}

const Input: React.FC<Props> = ({
  name,
  data,
  width,
  type,  
}: Props) => {
  return(
    <StyledInput>
      <h3>{name}</h3>

      <input type={type}/>
    </StyledInput>
  );
}

export default Input;