import styled from 'styled-components';

export const StyledInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .Initial {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    padding-top: 3.75rem;

    h1 {
      color: #f9537e;
      font-size: 3.125rem;
      font-weight: bold;
    }

    form {
      display: flex;
      width: 100%;

      background-color: #ffffff;
      border-radius: 20px;

      padding: 3rem;

      align-items: center;
      justify-content: center;
      gap: 3rem;

      margin-top: 4rem;

      .Local {
        width: 100%;
      }

      .HorarioData {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        gap: 3rem;
      }
    }
  }

  @media (max-width: 960px) {
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100vw;

      div {
        width: 100%;
        max-width: 100vw;
      }
    }
  }
`;
