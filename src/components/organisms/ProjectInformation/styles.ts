import styled from 'styled-components';
import { Form as DefaultForm } from '@unform/web';

export const StyledProjectInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .ProjectInformation {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    background-color: #ffffff;
    border-radius: 20px;

    padding: 3rem;

    h1 {
      color: var(--black);
      font-size: 3rem;
      font-weight: bold;

      width: 100%;
      text-align: left;
    }

    .AddUsers {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;

      width: 100%;

      margin-top: 3.125rem;

      .DataUser {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h1 {
          color: var(--black);
          font-size: 2.375rem;
          font-weight: 500;

          margin-bottom: 2.5rem;
        }

        .NameTitle {
          display: flex;
          gap: 1.5rem;
          justify-content: space-between;
        }

        .CompanyPhoneEmail {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;

          margin-top: 0.75rem;
        }
      }

      .Users {
        display: flex;
        flex-direction: column;

        padding-top: 4rem;

        h2 {
          color: var(--black);
          font-size: 1.5rem;
          font-weight: bold;

          margin-bottom: 0.875rem;
        }
      }
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;

    .AddUsers {
      display: flex !important;
      flex-direction: column;
    }
  }
`;

export const Form = styled(DefaultForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 20px;

  .inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    column-gap: 10px;
    row-gap: 10px;
  }
`;
