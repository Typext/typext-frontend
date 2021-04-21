import styled from 'styled-components';

const StyledRecoveryPassword = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;

  .RecoveryPassword {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 102.125rem;
    width: 100%;

    .Email {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      width: 100%;
      max-width: 40rem;

      margin-top: 16rem;

      Button {
        margin-top: 5.688rem;
      }
    }
  }
`;

export default StyledRecoveryPassword;
