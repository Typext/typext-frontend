import React from 'react';

import StyledBoxInformation from './styles';

interface BoxInformationProps {
  children: React.ReactNode;
}

const BoxInformation: React.FC<BoxInformationProps> = ({
  children,
}: BoxInformationProps) => {
  return <StyledBoxInformation>{children}</StyledBoxInformation>;
};

export default BoxInformation;
