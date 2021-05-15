import { css } from 'styled-components';

export const getTheme = (theme: string) => {
  const themes: any = {
    gray: css`
      border: 0.06rem solid var(--gray);
      border-radius: 1.25rem;
      color: var(--gray);
      background-color: transparent;
      :hover {
        transition: 0.3ms;
        border: 0;
        background-color: var(--gray);
      }
    `,

    black: css`
      border: 0.06rem solid var(--black);
      border-radius: 1.25rem;
      color: var(--black);
      background-color: transparent;
      :hover {
        transition: 0.3ms;
        border: 0;
        background-color: var(--black);
      }
    `,

    green: css`
      border: 0.06rem solid var(--green);
      border-radius: 1.25rem;
      color: var(--green);
      background-color: transparent;
      :hover {
        transition: 0.3ms;
        border: 0;
        background-color: var(--green);
      }
    `,

    red: css`
      border: 0.06rem solid var(--red-pink);
      border-radius: 1.25rem;
      color: var(--red-pink);
      background-color: transparent;
      :hover {
        transition: 0.3ms;
        border: 0;
        background-color: var(--red-pink);
      }
    `,

    add: css`
      border: 0;
      border-radius: 1.25rem;
      color: var(--red-pink);
      background-color: transparent;
      :hover {
        transition: 0.3ms;
        border: 0;
        background-color: var(--red-pink);
      }
    `,
  };

  return themes[theme];
};
