import { css } from 'styled-components';

export const getSize = (size: string) => {
  const sizes: any = {
    normal: css`
      width: 17.3rem;
      height: 4rem;
    `,
    large: css`
      width: 33.5rem;
      height: 4rem;
    `,
  };

  return sizes[size];
};
