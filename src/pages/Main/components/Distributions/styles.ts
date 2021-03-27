import styled from 'styled-components';

const StyledDistributions = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.875rem;

  .Distributions {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    h1 {
      color: var(--red-pink);
      font-size: 2.25rem;

      margin-bottom: 4rem;
    }

    .SectionDistributions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.3rem;

      .DataDepartments {
        Button {
          margin: 3.438rem 0 0 25.625rem;
        }
      }
    }
  }
`;

export default StyledDistributions;
