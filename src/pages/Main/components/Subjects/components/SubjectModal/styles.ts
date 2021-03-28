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
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px 20px;

    textarea {
      padding: 20px;
    }

    .textArea,
    textarea {
      width: 100%;
      height: 100%;
    }

    .inputs {
      display: flex;
      width: 100%;
      margin: 30px 0;

      div {
        margin-right: 30px;
      }
    }

    .options {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
