import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    max-width: 102.125rem;

    margin: 200px 0;

    button {
      margin: 10px;
    }
  }
`;
