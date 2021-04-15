import React from 'react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'assets/logo.svg';

import StyledNewPassword from './styles';

const NewPassword = () => {
    return (
      <StyledNewPassword>
        <img src={Logo} alt="Logo Typext" />

        <div className="NewPassword">
          <Input
            title="Inserir nova senha"
            color="var(--black)"
            styleWidth="41.875rem"
            Type="text"
          />

          <Input
            title="Confirme nova senha"
            color="var(--black)"
            styleWidth="41.875rem"
            Type="text"
          />

          <Button
            color="var(--green)"
          >
            Atualizar
          </Button>

        </div>
      </StyledNewPassword>

    );
};

export default NewPassword;
