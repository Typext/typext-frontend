import { css } from 'styled-components';

export const getTheme = (theme: string) => {
  const themes: any = {
    gray: css`
      border: 0.06rem solid var(--gray);
      border-radius: 1.25rem;
      color: var(--gray);
      background-color: transparent;
      :hover {
        transition: 0.5s;
        border: 0;
        background-color: var(--gray);
        color: white;
      }
    `,

    black: css`
      border: 0.06rem solid var(--black);
      border-radius: 1.25rem;
      color: var(--black);
      background-color: transparent;
      :hover {
        transition: 0.5s;
        border: 0;
        background-color: var(--black);
        color: white;
      }
    `,

    green: css`
      border: 0.06rem solid var(--green);
      border-radius: 1.25rem;
      color: var(--green);
      background-color: transparent;
      :hover {
        transition: 0.5s;
        border: 0;
        background-color: var(--green);
        color: white;
      }
    `,

    red: css`
      border: 0.06rem solid var(--red-pink);
      border-radius: 1.25rem;
      color: var(--red-pink);
      background-color: transparent;

      :hover {
        transition: 0.5s;
        border: 0;
        background-color: var(--red-pink);
        color: white;
        transform: perspective(1px) scale(1.03);
        box-shadow: 1px 1px 30px rgba(246, 8, 70, 0.4);
      }
    `,

    add: css`
      border: 0;
      border-radius: 1.25rem;
      color: var(--red-pink);
      background: rgba(246, 8, 70, 0.1);
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      width: 25rem;
      :hover {
        transition: 0.5s;
        background: rgba(246, 8, 70, 0.2);
      }
    `,
  };

  return themes[theme];
};
