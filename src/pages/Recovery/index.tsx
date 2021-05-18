import React, { useRef, useState, useCallback } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from 'utils/getValidationErrors';

import InputForm from 'components/atoms/InputForm';
import Button from 'components/atoms/Button';
import TypextLogo from 'components/atoms/Logo';

import { useAuth } from 'contexts/auth';
import StyledRecoveryPassword from './styles';
import RecoveryModal from './components/RecoveryModal';

const RecoveryPassword = () => {
  const { recoveryPassword } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const [showRecoveryModal, setShowRecoveryModal] = useState<boolean>(false);

  const handleCloseRecoveryModal = useCallback(() => {
    setShowRecoveryModal(false);
  }, []);

  const handleRecoveryPassword = useCallback(
    async (data: { email: string }) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O email é obrigatório')
            .email('Digite um email valído'),
        });

        await schema.validate(data, { abortEarly: false });

        setShowRecoveryModal(true);
        await recoveryPassword({
          email: data.email,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [recoveryPassword],
  );

  return (
    <>
      {showRecoveryModal && (
        <RecoveryModal onClose={handleCloseRecoveryModal} />
      )}

      <StyledRecoveryPassword>
        <div className="RecoveryPassword">
          <TypextLogo />

          <Form
            onSubmit={handleRecoveryPassword}
            ref={formRef}
            className="Email"
          >
            <InputForm
              name="email"
              title="Confirme seu e-mail"
              color="var(--black)"
            />

            <Button styleComponent="black" sizeComponent="normal" type="submit">
              Próximo
            </Button>
          </Form>
        </div>
      </StyledRecoveryPassword>
    </>
  );
};

export default RecoveryPassword;
