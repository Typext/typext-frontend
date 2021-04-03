import styled from 'styled-components';

const StyledRegisterNewUser = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;

  a {
    width: 18.125rem;
    height: 3.125rem;

    img {
      width: 18.125rem;
      height: 3.125rem;
    }
  }

  .RegisterNewUser {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 6rem 0;

      .inputContent {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 145rem;
      }

      .input-styled {
        margin: 1.25rem;
      }

      button {
        margin-top: 6rem;
      }
    }
  }

  @media (max-width: 840px) {
    justify-content: flex-start;
    padding: 30px 10px;
  }
`;

export default StyledRegisterNewUser;
