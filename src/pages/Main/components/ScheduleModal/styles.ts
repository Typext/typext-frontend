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
    width: 600px;
    height: 450px;
    padding: 30px;

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

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      pointer-events: none;
      width: 100%;
      height: 100%;
      margin-top: -30px;

      h2 {
        margin: 10px 0;
        font-size: 4rem;
      }

      h4 {
        font-size: 2rem;
        letter-spacing: 0.25em;
        color: #373435;
      }
    }
  }
`;
