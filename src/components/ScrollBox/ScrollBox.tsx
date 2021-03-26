import React from 'react';
import StyledScrollBox from './styles';

interface Props {
  // eslint-disable-next-line
  children: any;
  // depois precisa corrigir esse type any
}

const ScrollBox: React.FC<Props> = ({ children }: Props) => {
  return <StyledScrollBox>{children}</StyledScrollBox>;
};

export default ScrollBox;
