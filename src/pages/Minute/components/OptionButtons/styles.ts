import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f6;
  width: 100%;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    width: 92rem;
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
