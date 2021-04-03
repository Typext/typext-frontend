import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20rem 1fr 20rem;

  height: 5rem;
  background: #f8f8f8;
  padding: 0 2.5rem;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0%
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.875rem;

    color: #cecfd0;

    margin: 0 1.25rem 0 0;
  }

  img {
    height: 3.5rem;
    width: 3.5rem;
    padding: 0 0.625rem;

    &.logo {
      height: 2.5rem;
      width: 14.375rem;
    }
  }

  button {
    border: none;
    background: none;
  }
`;
