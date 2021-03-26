import styled from "styled-components";

const StyledScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  max-height: 18.75rem;
  height: 100%;


  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 20px;
    background: var(--red-pink);
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid var(--red-pink);
    border-radius: 20px;
    background: white;
  }
`;

export default StyledScrollBox;