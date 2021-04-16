import styled from 'styled-components';

interface ContainerProps {
  userIsAdmin: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: -30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  pointer-events: none;

  .userInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 4rem 0;

    svg {
      margin: 4rem 0;
    }

    h1 {
      font-size: 3.2rem;
      margin: 0 0 5px 0;
    }

    h2 {
      color: ${props => props.userIsAdmin && 'var(--red-pink)'};
      font-size: 2.6rem;
      margin: 0;
    }

    .usertype {
      display: flex;
      align-items: center;
      pointer-events: all;

      input,
      label {
        cursor: pointer;
      }

      input {
        width: 2rem;
        height: 2rem;
        margin: 0 0.5rem 0 2rem;
      }

      label {
        font-size: 2rem;
      }
    }
  }

  .buttons {
    pointer-events: all;

    width: 100%;
    display: flex;
    justify-content: center;

    button {
      height: 5rem;
      font-size: 2rem;

      margin: 0 5px;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;

    .userInfo {
      text-align: center;
    }
  }
`;
