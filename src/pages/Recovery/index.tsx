import React, { useCallback, useState } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import LogoIcon from 'assets/logo.svg';

import StyledRecoveryPassword from './styles';
import RecoveryModal from './components/RecoveryModal';

const RecoveryPassword = () => {
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);

  const handleOpenRecoveryModal = useCallback(() => {
    setShowRecoveryModal(!showRecoveryModal);
  }, [showRecoveryModal]);

  return (
    <>
      {showRecoveryModal && <RecoveryModal />}
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
            />

            <Button color="var(--black)" onClick={handleOpenRecoveryModal}>
              Próximo
            </Button>
          </div>
        </div>
      </StyledRecoveryPassword>
    </>
  );
};

export default RecoveryPassword;
