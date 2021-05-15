/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { IButtonProps } from './IButtonProps';
import { Container } from './styles';

const Button: React.FC<IButtonProps> = ({
  children,
  margin,
  styleComponent,
  sizeComponent,
  onClick,
  ...rest
}: IButtonProps) => {
  return (
    <Container
      margin={margin}
      styleComponent={styleComponent}
      sizeComponent={sizeComponent}
      onClick={onClick}
    >
      <button type="button" className="button" onClick={onClick}>
        {children}
      </button>
    </Container>
  );
};

Button.defaultProps = {
  margin: '0',
  sizeComponent: 'normal',
  styleComponent: 'gray',
};

export default Button;
