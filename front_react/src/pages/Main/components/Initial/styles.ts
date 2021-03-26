import styled from "styled-components";

export const StyledInitial = styled.div`
  display: flex;
  justify-content: center;

  .Initial {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    max-width: 102.125rem;
    width: 100%;

    padding-top: 4rem;
    padding-bottom: 4rem;
    border-bottom: 2px solid var(--red-pink);

    h1 {
      color: var(--red-pink);
      font-size: 3.125rem;
    }

    form {
      display: flex;
      width: 100%;

      align-items: center;
      justify-content: space-between;

      margin-top: 4rem;
    }
  }
`;