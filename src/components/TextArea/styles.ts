import styled from 'styled-components';

interface Props {
    title: string;
}

export const StyledTextArea = styled.div<Props>`
  display: flex;
  flex-direction: column;

  margin: 0;

  textarea {
      background-color: var(--soft-gray);
      border: none;
      border-radius: 20px;

  }

`;
