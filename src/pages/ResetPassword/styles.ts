import styled from 'styled-components';

export const StyledNewPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  .NewPassword {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 41.875rem;
    width: 100%;

    margin-top: 13.25rem;

    align-items: flex-end;

    button {
      margin-top: 4rem;
      width: 14.063rem;
    }
  }
`;

export default StyledNewPassword;
