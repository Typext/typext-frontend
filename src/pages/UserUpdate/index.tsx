import React, { useRef, useState, useCallback } from 'react';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { getInviteInfo } from 'services/auth';
import FormUpdate from 'components/organisms/FormUpdate';

import { useAuth } from 'contexts/auth';
import { useUsers } from 'contexts/user';
import { IUser } from 'DTOs/User';

import getValidationErrors from 'utils/getValidationErrors';
import updateSchemaValidation from 'utils/updateSchemaValidation';

import ModalUpdateUser from './ModalUpdateUser';

import { Container } from './styles';

function UserUpdate() {
  const { user } = useAuth();
  const { updateUserInfo } = useUsers();
  const formRef = useRef<FormHandles>(null);
  const inviteInfo = getInviteInfo();

  const [showUpdateUserModal, setShowUpdateUserModal] = useState<boolean>(
    false,
  );

  const handleSubmit = useCallback(
    async (data: IUser) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape(updateSchemaValidation);

        await schema.validate(data, { abortEarly: false });
        setShowUpdateUserModal(true);
        await updateUserInfo(data);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [updateUserInfo],
  );

  const handleCloseUpdateUserModal = useCallback(() => {
    setShowUpdateUserModal(false);
  }, []);

  return (
    <>
      {showUpdateUserModal && (
        <ModalUpdateUser onClose={handleCloseUpdateUserModal} />
      )}

      <Container>
        <h1>Atualizar informações</h1>
        <FormUpdate
          formRef={formRef}
          inviteInfo={inviteInfo}
          handleSubmit={handleSubmit}
          user={user}
          emailIsNotAllowed
          buttonText="Atualizar"
          goBackEnabled
        />
      </Container>
    </>
  );
}

export default UserUpdate;
