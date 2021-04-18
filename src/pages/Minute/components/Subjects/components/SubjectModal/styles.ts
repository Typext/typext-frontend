import styled from 'styled-components';

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

    .Complements {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 1.75rem;

      width: 100%;
      gap: 2rem;

      .inputs {
        display: flex;
        width: 100%;
        gap: 2rem;
      }

      .options {
        margin-top: 2rem;

        width: 100%;
        gap: 2rem;
        display: flex;
        justify-content: space-between;

        button {
          width: 100%;
        }
      }
    }
  }
`;
