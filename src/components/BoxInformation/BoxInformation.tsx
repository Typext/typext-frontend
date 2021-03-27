import React from 'react';

import ExitIcon from 'assets/exit_icon.svg';

import StyledBoxInformation from './styles';

interface BoxInformationProps {
  children: React.ReactNode;
}

const BoxInformation: React.FC<BoxInformationProps> = ({
  children,
}: BoxInformationProps) => {
  return (
    <StyledBoxInformation>
      {children}
      <button type="button">
        <img src={ExitIcon} alt="" />
      </button>
    </StyledBoxInformation>
  );
};

export default BoxInformation;
