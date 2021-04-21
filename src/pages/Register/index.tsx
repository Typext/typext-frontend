import React, { useRef, useCallback, useState } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import { useAuth } from 'contexts/auth';
import { getInviteInfo } from 'services/auth';
import FormUpdate from 'components/FormUpdate';

import getValidationErrors from 'utils/getValidationErrors';
import registerSchemaValidation from 'utils/registerSchemaValidation';

import TypextLogo from 'components/Logo';
import RegisterModal from './components/RegisterModal';

import StyledRegisterNewUser from './styles';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  office: string;
  phone: string;
  company: string;
  area: string;
}

const RegisterNewUser = () => {
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
        await signUp(data);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signUp],
  );

  return (
    <>
      {openRegisterModal && <RegisterModal onClose={setOpenRegisterModal} />}

      <StyledRegisterNewUser>
        <TypextLogo />

        <div className="RegisterNewUser">
          <FormUpdate
            formRef={formRef}
            hasPasswordField
            inviteInfo={inviteInfo}
            handleSubmit={handleSubmit}
          />
        </div>
      </StyledRegisterNewUser>
    </>
  );
};

export default RegisterNewUser;
