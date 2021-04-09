import React, { useState } from 'react';

import { Container, SelectContainer, Option } from './styles';

interface SelectProps {
  title: string;
  values: Array<string>;
  getValue: Function;
}

function Select({ title, values, getValue }: SelectProps) {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleSelectOption = (value: string) => {
    getValue(value);
    setSelectedValue(value);
    setOpenOptions(false);
  };

  return (
    <Container optionsIsOpen={openOptions}>
      <section className="inputSelect">
        <h1>{title}</h1>
        <button
          className="selectedValue"
          type="button"
          onClick={() => setOpenOptions(!openOptions)}
        >
          <p>{selectedValue}</p>
        </button>
      </section>

      {openOptions && (
        <SelectContainer>
          {values.map(value => (
            <Option isSelected={value === selectedValue}>
              <button type="button" onClick={() => handleSelectOption(value)}>
                {value}
              </button>
            </Option>
          ))}
        </SelectContainer>
      )}
    </Container>
  );
}

export default Select;
