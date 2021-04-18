import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  img {
    max-width: 50rem;
    width: 100%;
    opacity: 0.1;
    position: absolute;
    z-index: 1;
  }

  h1 {
    font-size: 15rem;
    margin: 0;
  }

  h2 {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  button {
    z-index: 2;
    margin-top: 20px;
  }
`;
