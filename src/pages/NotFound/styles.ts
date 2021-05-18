import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  .logo {
    height: 3.125rem;
    margin: 4.375rem 0 8rem 0;
  }

  h1 {
    font-family: Roboto;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.688rem;
    letter-spacing: 0em;
    text-align: left;
    color: var(--red-pink);

    margin: 0;
  }

  img {
    max-width: 29rem;
    width: 100%;
  }

  p {
    font-size: 2rem;
    margin: 1rem 0 0 0;
  }

  button {
    margin-top: 20px;
  }
`;
