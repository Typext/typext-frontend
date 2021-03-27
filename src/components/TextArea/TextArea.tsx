import React from 'react';
import { StyledTextArea } from './styles';

interface Props {
    title: string;
    cols: number;
    rows: number;
  }

  const TextArea: React.FC<Props> = ({
    title,
    cols,
    rows,
}: Props) => {
    return (
      <StyledTextArea title={title}>
        <textarea rows={rows} cols={cols} />
      </StyledTextArea>
    );
  };

  export default TextArea;
