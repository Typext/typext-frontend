import React, { useRef, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from 'contexts/AuthContext';
import { getInviteInfo } from 'services/auth';

import LogoIcon from 'assets/logo.svg';
import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';

import getValidationErrors from 'utils/getValidationErrors';
import registerSchemaValidation from 'utils/registerSchemaValidation';

import Input from 'components/Input/Input';
import RegisterModal from './components/RegisterModal';

import StyledRegisterNewUser from './styles';

interface SignUpData {
  name: string;
  password: string;
  password_confirmation: string;
  office: string;
  phone: string;
  company: string;
  area: string;
}

interface ParamsProps {
  token: string;
}

const RegisterNewUser = () => {
  const params = useParams<ParamsProps>();
  const formRef = useRef<FormHandles>(null);
  const inviteInfo = getInviteInfo();

  const { signUp } = useAuth();

  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (data: SignUpData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape(registerSchemaValidation);

        await schema.validate(data, { abortEarly: false });
        setOpenRegisterModal(true);
        await signUp({ ...data, token: params.token });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signUp, params],
  );

  return (
    <>
      {openRegisterModal && <RegisterModal onClose={setOpenRegisterModal} />}

      <StyledRegisterNewUser>
        <a href="/recovery-password">
          <img src={LogoIcon} alt="Typext" />
        </a>

        <div className="RegisterNewUser">
          <Form onSubmit={handleSubmit} ref={formRef} className="Content">
            <div className="inputContent">
              <InputForm
                name="name"
                title="Nome completo"
                defaultValue={inviteInfo?.name}
              />

              <InputForm name="office" title="Título / Cargo" />

              <InputForm name="area" title="Área" />

              <InputForm name="company" title="Empresa" />

              <Input
                name="email"
                title="E-mail"
                styleWidth="40rem"
                defaultValue={inviteInfo?.email || ''}
                readOnly={!!inviteInfo?.email}
              />

              <InputForm name="phone" title="Telefone" />

              <InputForm name="password" title="Senha" type="password" />

              <InputForm
                name="password_confirmation"
                title="Confirme a senha"
                type="password"
              />
            </div>

            <Button color="var(--green)">Cadastrar</Button>
          </Form>
        </div>
      </StyledRegisterNewUser>
    </>
  );
};

export default RegisterNewUser;
