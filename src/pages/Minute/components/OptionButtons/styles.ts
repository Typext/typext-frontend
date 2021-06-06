import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  column-gap: 2rem;
  max-width: 120rem;
  justify-content: flex-end;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    width: 92rem;
    column-gap: 20px;
  }

  @media (max-width: 960px) {
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;
