import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .Content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 6rem 0;

    .inputContent {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      width: 100%;
      max-width: 90rem;

      > div {
        margin: 10px 15px;
      }
    }

    .input-styled {
      margin: 1.25rem;
    }

    button {
      margin-top: 6rem;
    }
  }
`;
