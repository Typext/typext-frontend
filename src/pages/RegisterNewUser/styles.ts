import styled from 'styled-components';

const StyledRegisterNewUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.375rem;

  a {
    width: 18.125rem;
    height: 3.125rem;

    img {
      width: 18.125rem;
      height: 3.125rem;
    }
  }

  .RegisterNewUser{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .Content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7.25rem;

      margin-top: 8.75rem;

      Input {
        margin-bottom: 1.25rem;
      }
    }

    Button {
      margin-top: 5.625rem;
    }
  }
`;

export default StyledRegisterNewUser;
