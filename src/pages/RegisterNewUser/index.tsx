import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import LogoIcon from 'assets/logo.svg';
import InputForm from 'components/InputForm';
import Button from 'components/Button/Button';

import getValidationErrors from 'utils/getValidationErrors';
import registerSchemaValidation from 'utils/registerSchemaValidation';

import StyledRegisterNewUser from './styles';

const RegisterNewUser = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape(registerSchemaValidation);

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <StyledRegisterNewUser>
      <a href="/recovery-password">
        <img src={LogoIcon} alt="Typext" />
      </a>

      <div className="RegisterNewUser">
        <Form onSubmit={handleSubmit} ref={formRef} className="Content">
          <div className="inputContent">
            <InputForm name="name" title="Nome completo" />

            <InputForm name="role" title="Título / Cargo" />

            <InputForm name="area" title="Área" />

            <InputForm name="enterprise" title="Empresa" />

            <InputForm name="email" title="E-mail" />

            <InputForm name="phone" title="Telefone" />

            <InputForm name="password" title="Senha" />

            <InputForm name="passwordConfirmation" title="Confirme a senha" />
          </div>

          <Button color="var(--green)">Cadastrar</Button>
        </Form>
      </div>
    </StyledRegisterNewUser>
  );
};

export default RegisterNewUser;
