import React, { useCallback, useState, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from 'utils/getValidationErrors';

import { useAuth } from 'contexts/auth';

import InputForm from 'components/atoms/InputForm';
import Button from 'components/atoms/Button';

import { useParams } from 'react-router-dom';
import TypextLogo from 'components/atoms/Logo';
import ResetPasswordModal from './components/ResetPasswordModal';
import StyledNewPassword from './styles';

export interface ParamsData {
  email: string;
}

const NewPassword = () => {
  const params: ParamsData = useParams();
  const formRef = useRef<FormHandles>(null);
  const { resetPassword } = useAuth();

  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  const handleCloseResetModal = useCallback(() => {
    setShowResetModal(false);
  }, []);

  const handleResetPassword = useCallback(
    async (data: { password: string; password_confirmation: string }) => {
      const userEmail = params.email;

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'As senhas devem ser iguais',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        setShowResetModal(true);
        await resetPassword({
          email: userEmail,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [resetPassword, params],
  );

  return (
    <>
      {showResetModal && <ResetPasswordModal onClose={handleCloseResetModal} />}

      <StyledNewPassword>
        <TypextLogo />

        <Form
          ref={formRef}
          onSubmit={handleResetPassword}
          className="NewPassword"
        >
          <InputForm
            title="Inserir nova senha"
            name="password"
            color="var(--black)"
          />

          <InputForm
            title="Confirme nova senha"
            name="password_confirmation"
            color="var(--black)"
          />

          <Button styleComponent="green" sizeComponent="normal" type="submit">
            Atualizar
          </Button>
        </Form>
      </StyledNewPassword>
    </>
  );
};

export default NewPassword;
