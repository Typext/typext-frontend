import styled from 'styled-components';

export const RemoveWarnSuccess = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .warn {
    display: flex;
  }

  button {
    height: 5rem;
    font-size: 2rem;

    margin: 0 5px;
    pointer-events: all;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  .warn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 5rem;

    svg {
      width: 5.5rem;
      height: 5.5rem;
      margin: 0;
    }

    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      line-height: 5.9rem;
      text-align: center;

      color: #373435;

      margin: 1.5rem 0;
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 2.4rem;
      text-align: center;
      letter-spacing: 0.25em;

      color: #373435;

      margin: 0;
    }
  }

  .buttons {
    display: flex;
    pointer-events: all;

    button {
      height: 5rem;
      font-size: 2rem;

      margin: 0 5px;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;

    .warn {
      margin: 2.5rem 0;
    }
  }
`;
