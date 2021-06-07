import styled from 'styled-components';
import { Form as DefaultForm } from '@unform/web';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ccccccaa;
  backdrop-filter: blur(6px);

  .modal {
    h1 {
      width: 100%;

      font-size: 1.5rem;
      text-align: left;
    }

    width: 90rem;
    background: #ffffff;
    border-radius: 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 3rem;

    textarea {
      padding: 1.25rem;
    }

    .textArea,
    textarea {
      width: 100%;

      font-family: Roboto;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: bold;
    }
  }

  @media (max-width: 960px) {
    .modal {
      max-width: 100vw;
      textarea {
        height: 40rem;
      }

      button {
        font-size: 80%;
      }
    }
  }
`;

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 1.75rem;

  width: 100%;
  gap: 2rem;

  .textarea {
    width: 100%;
  }

  .inputsAndOptions {
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 20px;

    .inputs {
      display: flex;
      width: 100%;
      gap: 2rem;
    }

    .options {
      width: 100%;
      height: 100%;
      gap: 2rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  @media (max-width: 600px) {
    .inputsAndOptions {
      display: flex;
      flex-direction: column;
      width: 100%;
      row-gap: 2rem;
      .options {
        justify-content: center;
      }
    }
  }
`;
