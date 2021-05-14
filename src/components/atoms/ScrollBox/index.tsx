import React from 'react';
import StyledScrollBox from './styles';

interface Props {
  children: React.ReactNode;
}

const ScrollBox: React.FC<Props> = ({ children }: Props) => {
  return <StyledScrollBox>{children}</StyledScrollBox>;
};

export default ScrollBox;
