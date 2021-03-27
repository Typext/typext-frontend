import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 280px;

  padding: 20px;
  border: 1px solid #1a1a1a;

  .projectName {
    display: flex;
  }

  .titleExamples,
  .member {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h4,
    span {
      width: 150px;
    }
  }
`;
