import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  &,
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 18.75rem;
    height: auto;
  }

  section {
    margin: 50px;

    h2 {
      margin: 10px 0 0;
      color: var(--red-pink);
      font-size: 2rem;
      text-align: center;
    }
  }

  h1 {
    color: var(--red-pink);
    font-size: 3.125rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
  button {
    margin: 0;
  }

  img {
    height: 25rem;
    width: 25rem;
    margin-bottom: 2.5rem;
  }

  @media (max: 845px) {
    svg {
      width: 9.375rem;
      height: auto;
    }
  }
`;
