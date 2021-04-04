import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;

  padding: 30px;

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &,
    .EmailPassword,
    .LoginPassForgot {
      width: 100%;
      max-width: 50rem;
    }

    a {
      width: 18.125rem;
      height: 3.125rem;

      img {
        width: 18.125rem;
        height: 3.125rem;
      }
    }

    .EmailPassword {
      margin: 10rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      Input {
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
    width: 100%;
    height: 100%;
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
