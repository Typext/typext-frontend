import styled from 'styled-components';

export const StyleInviteUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 4.375rem;

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 3.125rem;
        color: #CECFD0;
    }


    .EmailAndPermission {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin-top: 13.25rem;

        align-items: flex-end;

       
        Input {
            margin-bottom: 2rem;  
        }

        Button {
            margin-top: 4rem;
            width: 14.063rem;
        }
    }
  

`;

export default StyleInviteUsers;
