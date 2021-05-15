import React from 'react';

import ExitIcon from 'assets/exit_icon.svg';

import StyledBoxInformation from './styles';

interface BoxInformationProps {
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

BoxInformation.defaultProps = {
  deleteComponent: () => {
    return '';
  },
};

export default BoxInformation;
