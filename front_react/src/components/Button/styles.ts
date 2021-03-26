import styled from "styled-components";

interface StyledButtonProps {
  color: string;
  colorText?: string;
  size?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 277px;
  height: 65px;
  border-radius: 20px;
  border: none;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: ${props => props.colorText || '#fff'};
  background: ${props => props.color}
`;

export default StyledButton;