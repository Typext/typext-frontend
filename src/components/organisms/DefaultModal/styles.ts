import styled, { css } from 'styled-components';

interface ModalProps {
  modalIsOpen: boolean;
}

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

export const Modal = styled.div<ModalProps>`
  width: 60rem;
  height: 45rem;
  padding: 3rem;
  z-index: 998;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.modalIsOpen
      ? css`
          animation: startModal 0.5s normal;
        `
      : css`
          animation: closeModal 0.5s normal;
        `}

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

  @keyframes startModal {
    0% {
      transform: translateX(-120%);
      opacity: 0;
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes closeModal {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }

    100% {
      transform: translateX(-120%);
      opacity: 0;
    }
  }
`;
