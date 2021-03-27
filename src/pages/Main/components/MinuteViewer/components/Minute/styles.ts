import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1020px;
  min-height: 1320px;
  width: 1020px;
  height: max-content;

  background: #ffffff;

  padding: 60px;

  div {
    margin: 15px 0;
  }

  h2, h3 {
    margin: 0;
  }
`;
