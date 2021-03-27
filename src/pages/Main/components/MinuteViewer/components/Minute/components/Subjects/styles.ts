import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  height: max-content;

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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 55%;
    height: max-content;
  }
`;
