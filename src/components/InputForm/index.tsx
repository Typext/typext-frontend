import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  maxSize?: string;
}

const Input = ({ name, title, maxSize, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState<string | undefined>('');

  const { fieldName, error, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setInputError(error);
  }, [error]);

  return (
    <Container isErrored={!!inputError} maxSize={maxSize}>
      <h3>{title}</h3>

      <section>
        <input
          onChange={() => setInputError('')}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {inputError && (
          <Error title={inputError}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </section>
    </Container>
  );
};

Input.defaultProps = {
  maxSize: '',
};

export default Input;
