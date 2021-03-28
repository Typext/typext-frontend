import React, { TextareaHTMLAttributes } from 'react';
import { StyledTextArea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
    cols: number;
    rows: number;
  }

  const TextArea: React.FC<Props> = ({
    title,
    cols,
    rows,
    ...rest
}: Props) => {
    return (
      <StyledTextArea title={title}>
        <textarea rows={rows} cols={cols} {...rest} />
      </StyledTextArea>
    );
  };

  export default TextArea;
