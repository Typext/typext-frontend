import styled from 'styled-components';

const Content = styled.div`
  
  display: flex;
  justify-content: center;

  margin-top: 4.375rem;


  .Login {
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


      a {
      width: 18.125rem;
      height: 3.125rem;

      img {
        width: 18.125rem;
        height: 3.125rem;
      }
    }

    .EmailPassword {

        margin-top: 13.25rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        Input {
            margin-bottom: 2rem;  
        }


    }

    .LoginPassForgot { 

        margin-top: 4rem;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        Button {
            width: 14.063rem;
        }

        a {
            display: flex;
            align-items: center;
            color: var(--red-pink);
        }

        strong {
            margin-left: 0.2rem;
        }

    }

    

  }

  

`;

export default Content;
