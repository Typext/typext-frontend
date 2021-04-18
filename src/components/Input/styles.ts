import styled from 'styled-components';

interface Props {
  InputWidth: string;
  Color: string;
  Size: string;
}

export const StyledInput = styled.div<Props>`
  display: flex;
  flex-direction: column;

  max-width: ${props => props.InputWidth || '23.75rem'};
  width: 100%;

  margin: 0;

  h3 {
    font-weight: 500;
    font-size: ${props => props.Size || '1.5rem'};
    color: ${props => props.Color || 'var(--black)'};

    margin-bottom: 5px;
  }

  input {
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    height: 4.063rem;
    background-color: var(--soft-gray);

    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;

    outline: none;
    border: 0;
    border-radius: 1.25rem;

    max-width: ${props => props.InputWidth || '23.75rem'};
    width: 100%;
  }
`;
