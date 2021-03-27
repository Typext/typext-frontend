import styled from 'styled-components';

interface StyledButtonProps {
  color: string;
  colorText?: string;
  size?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.size || '17.313rem'};
  height: 4.063rem;
  border-radius: 20px;
  border: none;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;

  color: ${props => props.colorText || '#fff'};
  background: ${props => props.color};

  img {
    height: 1.875rem;
    padding-left: 5rem;
    margin-right: -5rem;
  }
`;

export default StyledButton;