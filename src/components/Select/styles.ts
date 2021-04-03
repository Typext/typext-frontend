import styled from 'styled-components';

interface Props {
    SelectWidth: string;
    Color: string;
    Size: string;
  }

export const StyledSelect = styled.div<Props>`
  display: flex;
  flex-direction: column;
  
  width: ${props => props.SelectWidth || '23.75rem'};

  margin: 0;

  select {
    display: flex;
    align-items: center;
    padding-left: 0.625rem;
    height: 4.063rem;
    background-color: var(--soft-gray);

    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: bold;

    outline: none;
    border: 0;
    border-radius: 1.25rem;

    width: ${props => props.SelectWidth || '23.75rem'}
  }
  
`;
