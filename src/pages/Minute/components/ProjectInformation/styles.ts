import styled from 'styled-components';

const StyledProjectInformation = styled.div`
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
      color: var(--gray);
      font-size: 3rem;
      font-weight: bold;

      width: 100%;
      text-align: left;
    }

    .AddUsers {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.875rem;

      width: 100%;

      margin-top: 3.125rem;

      .DataUser {
        display: flex;
        flex-direction: column;

        h1 {
          color: var(--gray);
          font-size: 2.375rem;
          font-weight: 500;

          margin-bottom: 2.5rem;
        }

        .NameTitle {
          display: flex;
          justify-content: space-between;
        }

        .CompanyPhoneEmail {
          display: flex;
          justify-content: space-between;

          margin-top: 0.75rem;
        }

        Button {
          margin: 3rem 0 0 51.25rem;
        }
      }

      .Users {
        display: flex;
        flex-direction: column;

        padding-top: 4rem;

        h2 {
          color: var(--gray);
          font-size: 1.5ren;
          font-weight: bold;

          margin-bottom: 0.875rem;
        }
      }
    }
  }
`;

export default StyledProjectInformation;
