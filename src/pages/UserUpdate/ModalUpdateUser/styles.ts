import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 5.9rem;
    text-align: center;
    color: #373435;

    margin: 1.6rem 0;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 2.8rem;
    text-align: center;

    color: #373435;
  }
`;
