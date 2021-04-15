import React from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import LogoIcon from 'assets/logo.svg';

import StyledRecoveryPassword from './styles';

const RecoveryPassword = () => {
  return (
    <>
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

            <Button
              color="var(--black)"
            >
              Próximo
            </Button>
          </div>
        </div>
      </StyledRecoveryPassword>
    </>
  );
};

export default RecoveryPassword;
