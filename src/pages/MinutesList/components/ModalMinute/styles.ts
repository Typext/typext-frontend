import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:998;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 12rem;
      margin: 5rem 0 1.75rem 0;
    }

    h3 {
      font-family: Roboto;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 900;
      line-height: 2.625rem;
      letter-spacing: 0em;
      text-align: center;
      color: var(--black);
    }

    strong {
      font-family: Roboto;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1.75rem;
      letter-spacing: 0em;
      text-align: center;
      color: var(--black);
    }

    strong + strong {
      margin: 1rem 0 0 0;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;

      column-gap: 1rem;
      margin: 4.813rem 0 0 0;
    }
  }
`;
