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

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0%;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.575rem;

    color: #cecfd0;

    margin: 0 1.25rem 0 0;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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

  button:hover {
    transition: 0.4s;
    transform: perspective(1px) scale(1.05);
  }

  @media (max-width: 960px) {
    zoom: 70%;
    height: 6rem;

    img {
      zoom: 135%;
    }
  }
`;
