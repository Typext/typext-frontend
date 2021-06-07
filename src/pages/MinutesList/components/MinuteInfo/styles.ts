import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 81.375rem;
  width: 100%;
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

  .title {
    width: 25%;
  }

  .date {
    width: 20%;
  }

  .status {
    width: 20%;
  }

  .schedule {
    width: 35%;
  }
`;
