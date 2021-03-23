import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 5rem;
  background: #f8f8f8;
  padding: 0 2.5rem;

  &,
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 1.875rem;
    line-height: 2.188rem;

    color: #cecfd0;

    margin-right: 20px;
  }

  img {
    height: 3.125rem;
    width: 3.125rem;
    padding: 0 10px;

    &.logo {
      height: 2.5rem;
      width: 14.375rem;
    }
  }
`;
