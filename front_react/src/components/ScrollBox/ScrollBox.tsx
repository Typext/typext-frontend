import React from "react";
import StyledScrollBox from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ScrollBox: React.FC<Props> = ({ children }) => {
  return(
    <StyledScrollBox>
      {children}
    </StyledScrollBox>
  );
}

export default ScrollBox;