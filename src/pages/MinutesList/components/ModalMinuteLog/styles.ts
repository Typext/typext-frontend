import styled, { css } from 'styled-components';

interface IModal {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;

  overflow-x: scroll;
  width: 100%;
  height: 100%;
  padding: 100px 2rem;

  position: absolute;
  top: 0;
  z-index: 999;

  background: #ccccccaa;
  backdrop-filter: blur(6px);
`;

export const Modal = styled.div<IModal>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 54.813rem;
  max-width: 108rem;
  width: 100%;

  border-radius: 1.25rem;
  background: white;

  ${props =>
    props.isOpen
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
