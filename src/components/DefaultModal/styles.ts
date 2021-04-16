import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ccccccaa;
  backdrop-filter: blur(6px);
`;

export const Modal = styled.div`
  width: 60rem;
  height: 45rem;
  padding: 3rem;
  z-index: 998;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      border: none;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 600px) {
    border-radius: 0;
    height: 100%;
    width: 100%;
  }
`;
