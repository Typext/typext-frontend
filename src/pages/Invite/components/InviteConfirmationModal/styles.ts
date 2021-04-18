import styled, { css } from 'styled-components';

interface ContentProps {
  error?: boolean;
}

export const Container = styled.div`
  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: 100%;
  margin-top: -30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  h1 {
    margin: 1rem 0 1.5rem;
    text-align: center;
    font-family: 'Roboto';
    font-style: bold;
    font-size: 36px;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 25%;
  }

  ${props =>
    props.error &&
    css`
      h1,
      h2 {
        color: #f60846;
      }
    `}
`;
