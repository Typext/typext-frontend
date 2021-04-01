import React from 'react';
import LogoIcon from 'assets/logo.svg';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import StyledRegisterNewUser from './styles';

const RegisterNewUser = () => {
  return (
    <StyledRegisterNewUser>
      <a href="/recovery-password">
        <img src={LogoIcon} alt="Typext" />
      </a>

      <div className="RegisterNewUser">
        <div className="Content">
          <div className="LeftContent">
            <Input
              title="Nome completo"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Título / Cargo"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Área"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Empresa"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />
          </div>

          <div className="RightContent">
            <Input
              title="E-mail"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Telefone"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Senha"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />

            <Input
              title="Confirme a senha"
              color="var(--black)"
              styleWidth="41.875rem"
              Type="text"
            />
          </div>
        </div>

        <Button
          color="var(--green)"
        >
          Cadastrar
        </Button>
      </div>
    </StyledRegisterNewUser>
  );
};

export default RegisterNewUser;
