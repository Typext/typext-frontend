import styled from 'styled-components';

export const StyledNewPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4.375rem;

  .NewPassword {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 41.875rem;
    width: 100%;

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

export default StyledNewPassword;
