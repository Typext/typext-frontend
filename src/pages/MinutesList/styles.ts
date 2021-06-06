import styled, { css } from 'styled-components';

interface IContainerProps {
  isOpenMinuteViewer: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5rem 0 0 0;

  h1 {
    font-family: Roboto;
    font-size: 3.125rem;
    font-weight: 900;
    line-height: 3.688rem;
    color: var(--gray);

    margin-bottom: 3.375rem;
  }

  .search-minute {
    display: flex;
    align-items: center;

    max-width: 57.625rem;
    width: 100%;
    margin-bottom: 3.375rem;

    button {
      margin: 0 0 0 1rem;
    }
  }

  ${props =>
    props.isOpenMinuteViewer &&
    css`
      .list-content {
        display: flex;
        justify-content: center;
      }
    `}

  .list-content {
    max-width: 81.375rem;
    width: 100%;

    .warn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin: 0 0 1rem 0;
      }

      h1 {
        font-family: Roboto;
        font-size: 3.125rem;
        font-weight: 700;
        line-height: 3.688rem;
        text-align: center;
        color: var(--black);
      }

      h3 {
        font-family: Roboto;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.75rem;
        text-align: center;
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0 2rem;
  }
`;
