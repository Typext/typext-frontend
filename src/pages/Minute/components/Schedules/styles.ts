/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Form as DefaultForm } from '@unform/web';

export const StyledSchedules = styled.div`
  width: 102.125rem;
  margin: 20px 0;
  border-radius: 20px;

  padding: 3rem;

  background-color: #ffffff;

  h1 {
    color: var(--black);
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 3rem;
  }

  .schedule {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 2rem;

    width: 100%;
  }

  .scheduleList {
    h3 {
      font-weight: 500;
      font-size: 1.5rem;
      color: var(--black);
      margin-bottom: 5px;
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;
    .schedule {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: top;

  margin-top: -2rem;

  gap: 1.8rem;
`;
