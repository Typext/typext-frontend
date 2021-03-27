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
`;
