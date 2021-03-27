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

    h3 {
        width: 100%;
        text-align: left;
        margin-bottom: 1rem;
      }

    .Text {
      display: flex;
      align-items: top;
      justify-content: space-between;
      width: 100%;

      margin-bottom: 2rem;

      TextArea {
        margin: 0px; 
        
        max-width: 80rem; 
        max-height: 17.813rem;
        min-width: 80rem; 
        min-height: 17.813rem;

        outline: none;

        padding: 1rem;

      }

    }

    .Attributes {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: left;

      button {
        margin-left: 78rem;
      }
    }





  } 

`;

export default StyledSubjects;
