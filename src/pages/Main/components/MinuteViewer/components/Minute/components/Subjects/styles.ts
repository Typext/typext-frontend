import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  border: 1px solid #1a1a1a;

  h3 {
    width: 100%;
    height: max-content;
    padding: 5px 0;

    text-align: center;
    border-bottom: 1px solid #1a1a1a;
  }

  .description {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 55%;
  }
`;
