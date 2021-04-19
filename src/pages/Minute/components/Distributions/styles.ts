import styled from 'styled-components';

const StyledDistributions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 102.125rem;

  background-color: #ffffff;
  border-radius: 20px;

  padding: 3rem;

  .Distributions {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    h1 {
      color: var(--black);
      font-size: 3rem;
      font-weight: bold;
      width: 100%;
      text-align: left;
    }

    .SectionDistributions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;

      width: 100%;

      .DataDepartments {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        gap: 2rem;
        width: 100%;
      }
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;
    .SectionDistributions {
      display: flex !important;
      flex-direction: column;

      width: 100%;

      .Departments {
        h3 {
          font-weight: 500;
          font-size: 1.5rem;
          color: var(--black);
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export default StyledDistributions;
