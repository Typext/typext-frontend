import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  &,
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 300px;
    height: auto;
  }

  section {
    margin: 50px;

    h2 {
      margin: 10px 0 15px;
    }
  }

  h1,
  button {
    margin: 0;
  }
`;
