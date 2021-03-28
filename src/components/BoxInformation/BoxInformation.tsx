import React from 'react';

import ExitIcon from 'assets/exit_icon.svg';

import StyledBoxInformation from './styles';

interface BoxInformationProps {
  // eslint-disable-next-line react/require-default-props
  deleteComponent?: Function;
  children: React.ReactNode;
}

const BoxInformation: React.FC<BoxInformationProps> = ({
  deleteComponent,
  children,
}: BoxInformationProps) => {
  const handleOnDelete = () => {
    if (deleteComponent) deleteComponent();
  };

  return (
    <StyledBoxInformation>
      {children}
      <div className="button">
        <button type="button" onClick={handleOnDelete}>
          <img src={ExitIcon} alt="" />
        </button>
      </div>
    </StyledBoxInformation>
  );
};

export default BoxInformation;
