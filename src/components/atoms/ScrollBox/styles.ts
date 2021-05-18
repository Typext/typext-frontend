import styled from 'styled-components';

const StyledScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  max-height: 30rem;
  height: 100%;

  ::-webkit-scrollbar {
    width: 12px;
    border-radius: 20px;
    background: #ffe7ed;
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid #ffe7ed;
    border-radius: 20px;
    background: white;
  }
`;

export default StyledScrollBox;
