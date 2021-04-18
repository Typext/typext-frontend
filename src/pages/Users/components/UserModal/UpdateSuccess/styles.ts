import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  padding: 3rem;

  svg {
    width: 5.5rem;
    height: 5.5rem;
    margin: 0;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 5rem;
    line-height: 5.9rem;
    text-align: center;

    color: #373435;

    margin: 1.5rem 0;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 2.8rem;
    text-align: center;
    letter-spacing: 0.25em;

    color: #373435;

    margin: 0;
  }
`;
