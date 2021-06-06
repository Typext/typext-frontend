import styled from 'styled-components';

export const Container = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    pointer-events: none;
    width: 100%;
    height: 100%;
    margin-top: -30px;

    h1 {
      margin: 10px 0;
      font-size: 4rem;
    }

    h4 {
      font-size: 2rem;
      letter-spacing: 0.25em;
      color: #373435;
    }
  }
`;
