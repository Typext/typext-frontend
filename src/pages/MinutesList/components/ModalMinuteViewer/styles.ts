import styled, { css } from 'styled-components';

interface ModalProps {
  modalIsOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 999;

  background: #ccccccaa;
  backdrop-filter: blur(6px);
`;

export const Modal = styled.div<ModalProps>`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 85rem;
  z-index: 998;

  border-radius: 1.25rem;
  background: white;

  ${props =>
    props.modalIsOpen
      ? css`
          animation: startModal 0.5s normal;
        `
      : css`
          animation: closeModal 0.5s normal;
        `}

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    padding: 0 1rem;

    margin: 1rem 0 2rem 0;

    button {
      background: none;
      border: none;

      img {
        height: 2.625rem;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;

    padding: 0 0 2rem 0;
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
