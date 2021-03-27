/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledSubjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.875rem;

  h1 {
      color: var(--red-pink);
      font-size: 2.25rem;

      margin-bottom: 6.25rem;
    }

  .Subjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 102.125rem;
    width: 100%;

    padding-bottom: 5rem;
    border-bottom: 2px solid var(--red-pink);
  }
`;

export default StyledSubjects;
