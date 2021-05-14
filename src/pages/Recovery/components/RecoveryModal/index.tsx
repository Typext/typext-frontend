import React from 'react';
import { useAuth } from 'contexts/auth';

import EmailIcon from 'assets/email.svg';
import EmailErrorIcon from 'assets/email_error.svg';
import Loader from 'components/molecules/Loader';

import DefaultModal from 'components/organisms/DefaultModal';
import { StyledRecoveryModal, StyledRecoveryModalContent } from './styles';

interface IRecoveryModalProps {
  onClose: Function;
}

const RecoveryModal: React.FC<IRecoveryModalProps> = ({
  onClose,
}: IRecoveryModalProps) => {
  const {
    recovery: { error, loader },
  } = useAuth();

  return (
    <StyledRecoveryModal>
      <DefaultModal onClose={onClose}>
        <>
          {loader ? (
            <Loader />
          ) : error === '' ? (
            <StyledRecoveryModalContent>
              <img src={EmailIcon} alt="" />
              <h1>E-MAIL ENVIADO!</h1>
              <h3>CONFIRA SUA CAIXA DE E-MAIL.</h3>
            </StyledRecoveryModalContent>
          ) : (
            <StyledRecoveryModalContent>
              <img src={EmailErrorIcon} alt="" />
              <h1>{error.toUpperCase()}</h1>
              <h3>REVISE-O E TENTE NOVAMENTE.</h3>
            </StyledRecoveryModalContent>
          )}
        </>
      </DefaultModal>
    </StyledRecoveryModal>
  );
};

export default RecoveryModal;
