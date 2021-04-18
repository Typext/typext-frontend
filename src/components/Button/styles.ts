import styled from 'styled-components';

interface StyledButtonProps {
  color?: string;
  colorText?: string;
  size?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.size || '17.313rem'};
  height: 4.063rem;
  border-radius: 1.25rem;
  border: 0.063rem;
  outline: 0.063rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

  color: ${props => props.colorText || '#fff'};
  background: ${props => props.color || '#F60846'};

  img {
    height: 1.875rem;
    padding-left: 5rem;
    margin-right: -5rem;
  }
`;

export default StyledButton;
