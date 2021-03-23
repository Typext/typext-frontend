import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  background: #f8f8f8;
  padding: 0 40px;

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
    font-size: 30px;
    line-height: 35px;

    color: #cecfd0;

    margin-right: 20px;
  }

  img {
    height: 50px;
    width: 50px;
    padding: 0 10px;

    &.logo {
      height: 40px;
      width: 230px;
    }
  }
`;
