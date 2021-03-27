/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledTopics = styled.div`
  margin-top: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .Topic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    justify-content: space-between;

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
