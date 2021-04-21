import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 4rem;

  .Login {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    .EmailPassword,
    .LoginPassForgot {
      width: 100%;
      max-width: 40rem;
    }

    .EmailPassword {
      margin: 14rem 0 2rem 0;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > div {
        margin-bottom: 2rem;
      }
    }

    .LoginPassForgot {
      width: 100%;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      Button {
        width: 14.063rem;
        margin: 2rem 0;
      }

      a {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: max-content;
        text-align: center;
        color: var(--red-pink);
      }

      strong {
        margin-left: 0.2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
    margin: 0;
  }

  @media (max-width: 410px) {
    .LoginPassForgot {
      justify-content: center !important;

      button {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Content;
