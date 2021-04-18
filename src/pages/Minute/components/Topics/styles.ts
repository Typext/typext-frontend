/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledTopics = styled.div`
  max-width: 102.125rem;

  width: 100%;

  border-radius: 20px;

  padding: 3rem;

  background-color: #ffffff;

  h1 {
    color: var(--gray);
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 3rem;
  }

  .Topic {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 2rem;

    width: 100%;
  }

  .AddTopic {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: top;

    margin-top: -2rem;

    gap: 1.8rem;
  }
`;

export default StyledTopics;
