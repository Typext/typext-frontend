import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 4rem;
    line-height: 59px;
    color: #cecfd0;
    margin: 40px 0 0;
  }

  button {
    border: none;
  }

  .info {
    display: flex;
    width: 100%;
    max-width: 80rem;
    margin: 3rem 0;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px 0;

      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: 2rem;
      line-height: 28px;
      text-align: center;

      color: #ffffff;

      &:first-child {
        background: var(--red-pink);
        border-radius: 20px 0 0 20px;
      }

      &:last-child {
        background: var(--gray);
        border-radius: 0 20px 20px 0;
      }
    }
  }

  .usersList {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 80rem;

    button {
      display: flex;
      padding: 10px 0;
      margin: 10px 0;
      border-radius: 20px;
      background: var(--soft-gray);
    }
  }
`;
