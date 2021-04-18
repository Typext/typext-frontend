import React from 'react';

import { useAuth } from 'contexts/auth';

import ShieldIcon from 'assets/shield-icon.svg';
import WarnIcon from 'assets/warn.svg';

import Loader from 'components/Loader';
import DefaultModal from 'components/DefaultModal';

import { StyledResetPasswordModal, StyledResetPasswordContent } from './styles';

interface IResetPasswordModalProps {
  onClose: Function;
}

const ResetPasswordModal: React.FC<IResetPasswordModalProps> = ({
  onClose,
}: IResetPasswordModalProps) => {
  const {
    reset: { error, loader },
  } = useAuth();

  return (
    <StyledResetPasswordModal>
      <DefaultModal onClose={onClose}>
        {loader ? (
          <Loader />
        ) : error === '' ? (
          <StyledResetPasswordContent>
            <img src={ShieldIcon} alt="" />
            <h1>SENHA ATUALIZADA</h1>
            <h3>REDIRECIONANDO PARA ÁREA DE LOGIN...</h3>
          </StyledResetPasswordContent>
        ) : (
          <StyledResetPasswordContent>
            <img src={WarnIcon} alt="" />
            <h1>SENHA INVÁLIDA!</h1>
            <h3>VERIFIQUE SE A DIGITOU CORRETAMENTE</h3>
          </StyledResetPasswordContent>
        )}
      </DefaultModal>
    </StyledResetPasswordModal>
  );
};

export default ResetPasswordModal;
