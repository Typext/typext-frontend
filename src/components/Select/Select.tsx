import React, { SelectHTMLAttributes } from 'react';
import { StyledSelect } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
    color?: string;
    Size?: string;
    styleWidth?: string;
}

const Select: React.FC<SelectProps> = ({
    title,
    id,
    color,
    Size,
    styleWidth,
    ...rest
  }: SelectProps) => {
    return (
      <StyledSelect
        SelectWidth={styleWidth || '23.75rem'}
        Color={color || 'var(--black)'}
        Size={Size || '1.5rem'}
      >
        <h3>{title}</h3>

        <select name={title} id={id} {...rest} />

      </StyledSelect>
    );
  };

  Select.defaultProps = {
    Size: '',
    styleWidth: '23.75rem',
    color: '',
  };

  export default Select;
