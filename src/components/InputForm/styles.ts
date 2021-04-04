import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--black);

    margin-bottom: 5px;
  }

  section {
    display: flex;
    align-items: center;
    max-width: 400px;
    width: 100%;

    padding: 0.2rem 1rem;
    height: 4.063rem;
    background-color: var(--soft-gray);

    border-radius: 1.25rem;
    border: 1px solid rgba(206, 207, 208, 0.2);

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    input {
      display: flex;
      align-items: center;

      font-family: Roboto;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: bold;

      width: 100%;

      color: var(--black);
      border: none;
      background: transparent;

      &::placeholder {
        color: #adadad;
      }
    }


  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
