import styled from 'styled-components';

const StyledRecoveryPassword = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.375rem;

  .RecoveryPassword {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 102.125rem;
    width: 100%;

    a {
      width: 18.125rem;
      height: 3.125rem;

      img {
        width: 18.125rem;
        height: 3.125rem;
      }
    }

    .Email {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      width: 41.875rem;

      margin-top: 16rem;

      Button {
        margin-top: 9.688rem;
      }
    }
  }
`;

export default StyledRecoveryPassword;
