import styled, { css } from 'styled-components';

interface Props {
  InputWidth: string;
  Color: string;
  Size: string;
}

export const StyledInput = styled.div<Props>`
  display: flex;
  flex-direction: column;

  margin: 0;

  ${props =>
    props.InputWidth === 'large'
      ? css`
          width: 49.375rem;
        `
      : css`
          width: 23.75rem;
        `}

  h3 {
    font-weight: 900;
    margin-bottom: 5px;

    ${props =>
      props.Color === 'black'
        ? css`
            color: var(--black);
          `
        : css`
            color: var(--red-pink);
          `}

    ${props =>
      props.Size === 'large'
        ? css`
            font-size: 2rem;
          `
        : css`
            font-size: 1.5rem;
          `}
  }

  input {
    display: flex;
    align-items: center;
    padding-left: 0.625rem;
    height: 4.063rem;
    background-color: var(--soft-gray);

    outline: none;
    border: 0;
    border-radius: 1.25rem;

    ${props =>
      props.InputWidth === 'large'
        ? css`
            width: 49.375rem;
          `
        : css`
            width: 23.75rem;
          `}
  }
`;
