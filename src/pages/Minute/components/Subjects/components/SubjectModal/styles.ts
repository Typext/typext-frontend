import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ccccccaa;
  backdrop-filter: blur(6px);

  .modal {
    width: 90rem;
    height: 55rem;
    background: #ffffff;
    border-radius: 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.875rem 1.25rem;

    textarea {
      padding: 1.25rem;
    }

    .textArea,
    textarea {
      width: 100%;
      height: 100%;

      font-family: Roboto;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: bold;

    }

    .inputs {
      display: flex;
      width: 100%;
      margin: 1.875rem 0;

      div {
        margin-right: 1.875rem;
      }
    }

    .options {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
