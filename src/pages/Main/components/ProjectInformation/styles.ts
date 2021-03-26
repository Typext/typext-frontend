import styled from 'styled-components';

const StyledProjectInformation = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.875rem;

  .ProjectInformation {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    h1 {
      color: var(--red-pink);
      font-size: 2.25rem;

      margin-bottom: 6.25rem;
    }

    .AddUsers {
      display: grid;
      grid-template-columns: 75rem 25.625rem;
      gap: 1.875rem;

      width: 100%;

      margin-top: 3.125rem;

      .DataUser {
        display: flex;
        flex-direction: column;

        h1 {
          color: var(--red-pink);
          font-size: 2rem;

          margin-bottom: 2.5rem;
        }

        .NameTitle {
          display: flex;
          justify-content: space-between;
        }

        .CompanyPhoneEmail {
          display: flex;
          justify-content: space-between;

          margin-top: 12px;
        }
      }

      .Users {
        display: flex;
        flex-direction: column;

        padding-top: 4.875rem;

        h2 {
          color: var(--black);
          font-size: 1.5ren;

          margin-bottom: 14px;
        }
      }
    }
  }
`;

export default StyledProjectInformation;
