import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: grid;
  grid-template-columns: 22.063rem 16.5rem 16.5rem 26.25rem;
  align-items: center;
  justify-content: center;

  width: 81.375rem;
  height: 4.375rem;
  background: var(--soft-gray);
  border: none;
  border-radius: 1.25rem;

  margin-bottom: 1.5rem;

  &:last-child {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-family: Roboto;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 900;
      line-height: 1.75rem;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;
