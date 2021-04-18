/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledTopics = styled.div`
  width: 102.125rem;

  border-radius: 20px;

  padding: 3rem;

  background-color: #ffffff;

  h1 {
    color: var(--black);
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

  .TopicList {
    h3 {
      font-weight: 500;
      font-size: 1.5rem;
      color: var(--black);
      margin-bottom: 5px;
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;
    .Topic {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledTopics;
