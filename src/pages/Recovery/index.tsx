import React, { useCallback, useState } from 'react';
import { message } from 'antd';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import LogoIcon from 'assets/logo.svg';

import { useAuth } from 'contexts/auth';
import StyledRecoveryPassword from './styles';
import RecoveryModal from './components/RecoveryModal';

const RecoveryPassword = () => {
  const { recoveryPassword } = useAuth();

  const [showRecoveryModal, setShowRecoveryModal] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>('');

  const handleCloseRecoveryModal = useCallback(() => {
    setShowRecoveryModal(false);
  }, []);

  const handleRecoveryPassword = useCallback(() => {
    if (!userEmail) {
      message.error('Todos os campos devem estar preenchidos');
      return;
    }

    setShowRecoveryModal(true);
    recoveryPassword({
      email: userEmail,
    });
  }, [recoveryPassword, userEmail]);

  return (
    <>
      {showRecoveryModal && (
        <RecoveryModal onClose={handleCloseRecoveryModal} />
      )}

      <StyledRecoveryPassword>
        <div className="RecoveryPassword">
          <a href="/recovery-password">
            <img src={LogoIcon} alt="Typext" />
          </a>

          <div className="Email">
            <Input
              title="Confirme seu e-mail"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
              onChange={event => setUserEmail(event.target.value)}
            />

            <Button color="var(--black)" onClick={handleRecoveryPassword}>
              Próximo
            </Button>
          </div>
        </div>
      </StyledRecoveryPassword>
    </>
  );
};

export default RecoveryPassword;
