import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  &,
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    width: 18.75rem;
    height: auto;
    margin-top: 4.375rem;
    margin-bottom: 4.375rem;
  }

  section {
    margin: 50px;

    h2 {
      margin: 10px 0 15px;
      color: var(--red-pink);
      font-size: 2rem;
      margin-bottom: 6.25rem;
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

  @media(max: 845px){
    svg {
    width: 9.375rem;
    height: auto;
  }
  }

`;
