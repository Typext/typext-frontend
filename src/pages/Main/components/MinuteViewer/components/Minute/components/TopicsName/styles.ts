import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 400px;

  border: 1px solid #1a1a1a;

  .topicInfo {
    border-bottom: 1px solid #1a1a1a;

    span {
      height: 100%;
    }

    span.topic {
      border-right: 1px solid #1a1a1a;
      border-left: 1px solid #1a1a1a;
    }
  }

  .topicInfo,
  .titleExamples {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    h4 {
      border-bottom: 1px solid #1a1a1a;
      border-right: 1px solid #1a1a1a;

      &:last-child {
        border-right: none;
      }
    }

    .id {
      width: 5%;
    }

    .topic {
      width: 50%;
    }

    .responsible {
      width: 25%;
    }

    .deadLine {
      width: 20%;
    }

    span,
    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
