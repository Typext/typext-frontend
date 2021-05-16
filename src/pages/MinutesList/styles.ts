import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5rem 0 0 0;

  h1 {
    font-family: Roboto;
    font-size: 3.125rem;
    font-weight: 900;
    line-height: 3.688rem;
    color: var(--gray);

    margin-bottom: 3.375rem;
  }

  input {
    margin-bottom: 3.375rem;
  }
`;
