import styled, {css} from "styled-components";

interface Props {
  InputWidth: string;
}

export const StyledInput = styled.div<Props>`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--black);
    font-weight: 900;
    font-size: 2rem;

    margin-bottom: 5px;
  }

  input {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 65px;
    background-color: var(--soft-gray);

    outline: none;
    border: 0;
    border-radius: 20px;

    ${Props => Props.InputWidth === "large" ? (
      css`width: 49.375rem;`
    ) : (
      css`width: 23.75rem;`
    )
    }
  }
`;