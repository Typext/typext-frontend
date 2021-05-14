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

export const SectionButton = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  max-width: 90rem;
  padding: 0 35px;

  button:nth-child(1) {
    margin-right: 2rem;
  }
`;
