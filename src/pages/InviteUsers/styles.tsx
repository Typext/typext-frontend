import styled from 'styled-components';

export const StyleInviteUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 30px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 3.125rem;
    color: #cecfd0;

    text-align: center;
  }

  .emailAndPermission {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 6rem 0;

    input {
      margin-bottom: 2rem;
    }

    button {
      margin-top: 4rem;
      width: 14.063rem;
    }
  }
`;

export default StyleInviteUsers;
