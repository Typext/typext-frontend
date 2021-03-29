import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;

  .ant-table-wrapper {
    &,
    div {
      margin: 0;
    }
  }

  .ant-pagination {
    display: none;
  }

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 0;

    border-right: 1px solid #1a1a1a;
    border-left: 1px solid #1a1a1a;
    border-bottom: 1px solid #1a1a1a;

    span {
      margin-right: 5px;
    }

    span:last-child {
      display: none;
    }

    p {
      margin: 0;
    }
  }

  .ant-table-tbody > tr > td,
  .ant-table-thead > tr > th {
    border-bottom: none;
  }

  table {
    border: 1px solid #1a1a1a;
  }

  thead {
    background: rgb(192 213 255);

    tr {
      th {
        background: none;
        border-right: 1px solid #1a1a1a;

        font-weight: bold;
        font-size: 16px;
      }

      th:last-child {
        border-right: none;
      }
    }
  }

  tbody {
    tr {
      td {
        border-top: 1px solid #1a1a1a;
        border-right: 1px solid #1a1a1a;
      }

      td:last-child {
        border-right: none;
      }
    }
  }
`;
