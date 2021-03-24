import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--black);
    font-weight: 900;
  }

  input {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 65px;
    background-color: var(--soft-gray);
    opacity: 80%

    outline: none;
    border: 0;
  }
`;