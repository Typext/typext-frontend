import styled from 'styled-components';

export const StyledInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .Initial {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    padding-top: 3.75rem;

    h1 {
      color: #f9537e;
      font-size: 3.125rem;
      font-weight: bold;
    }

    form {
      display: flex;
      width: 100%;

      background-color: #ffffff;
      border-radius: 20px;

      padding: 3rem;
      gap: 3rem;

      align-items: center;
      justify-content: space-between;

      margin-top: 4rem;
    }
  }
`;
