import React, { TextareaHTMLAttributes } from 'react';
import { StyledTextArea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  cols: number;
  rows: number;
  divClass?: string,
}

const TextArea: React.FC<Props> = ({
 title, cols, rows, divClass, ...rest
}: Props) => {
  return (
    <StyledTextArea title={title} className={divClass}>
      <textarea rows={rows} cols={cols} {...rest} />
    </StyledTextArea>
  );
};

TextArea.defaultProps = {
  divClass: '',
};

export default TextArea;
