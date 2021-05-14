import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'contexts/auth';

import ShieldIcon from 'assets/shield-icon.svg';
import WarnIcon from 'assets/warn.svg';

import Loader from 'components/molecules/Loader';
import DefaultModal from 'components/organisms/DefaultModal';

import { StyledResetPasswordModal, StyledResetPasswordContent } from './styles';

interface IResetPasswordModalProps {
  onClose: Function;
}

const ResetPasswordModal: React.FC<IResetPasswordModalProps> = ({
  onClose,
}: IResetPasswordModalProps) => {
  const history = useHistory();

  const {
    reset: { error, loader, success },
  } = useAuth();

  useEffect(() => {
    if (!loader && !error && success) {
      setTimeout(() => {
        history.push('/login');
      }, 1500);
    }
  }, [success, error, loader, history]);

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
            <h1>OCORREU UM PROBLEMA</h1>
            <h3>{error.toUpperCase()}</h3>
          </StyledResetPasswordContent>
        )}
      </DefaultModal>
    </StyledResetPasswordModal>
  );
};

export default ResetPasswordModal;
