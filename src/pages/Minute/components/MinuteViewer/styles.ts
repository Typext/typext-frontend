import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;

  position: fixed;
  z-index: 999;
  top: 0;

  background: #eeeeeeaa;
  backdrop-filter: blur(6px);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  div.minuteButtons {
    display: flex;
    justify-content: flex-end;
    width: 1020px;
    margin: 40px;

    button {
      margin-left: 10px;
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;

    .minuteButtons {
      zoom: 70%;
      justify-content: center !important;
      margin: 3rem !important;
    }
  }
`;
