/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledTopics = styled.div`
  margin-top: 3.75rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--gray);
    font-size: 2.25rem;
    font-weight: bold;

    margin-bottom: 4rem;
  }

  .Topic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    justify-content: space-between;

    padding-bottom: 4.5rem;
    border-bottom: 2px solid var(--red-pink);

  }

  .AddTopic {
    display: flex;
    flex-direction: column;
    
    gap: 1.8rem;

    Button {
      margin-left: 25.5rem;
    }
  } 

`;

export default StyledTopics;
